import React, {ChangeEvent, FC, useEffect, useState} from 'react';
import Button from "../Button/Button";
import s from './SettingsCounter.module.css'

type SettingsCounterType = {
    setCurrentNumber: (currentNumber: number) => void
    error: string
    setError: (error: string) => void
    startValue: number
    setStartValue: (startValue: number) => void
    maxValue: number
    setMaxValue: (maxValue: number) => void
    incorrectValue: boolean
}

export const SettingsCounter: FC<SettingsCounterType> = (
    {
        setCurrentNumber,
        setError,
        maxValue,
        setMaxValue,
        startValue,
        setStartValue,
        incorrectValue
    }) => {

    const [disabledSetButton, setDisabledSetButton] = useState<boolean>(false)

    useEffect(() => {
        let maxValue = localStorage.getItem('maxValue')
        if (maxValue) {
            let newValue = JSON.parse(maxValue)
            setMaxValue(newValue)
        }
        let startValue = localStorage.getItem('startValue')
        if (startValue) {
            let newValue = JSON.parse(startValue)
            setStartValue(newValue)
        }
    }, []) ///setting counter

    const setSettingCounter = () => {
        localStorage.setItem('maxValue', JSON.stringify(maxValue))
        localStorage.setItem('startValue', JSON.stringify(startValue))
        setCurrentNumber(startValue)
        setError('')
        setDisabledSetButton(true)
    }///setting counter

    const changeStartValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const value = +e.currentTarget.value
        setStartValue(value)
        const error = value >= 0 && value < maxValue ? "enter values and press 'set'" : "Incorrect value"
        setError(error)
        incorrectValue ? setDisabledSetButton(true) : setDisabledSetButton(false)
    }//counter

    const changeMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const value = +e.currentTarget.value
        setMaxValue(value)
        const error = value > 0 && value > startValue ? "enter values and press 'set'" : "Incorrect value"
        setError(error)
        incorrectValue ? setDisabledSetButton(true) : setDisabledSetButton(false)
    }//counter

    return (
        <div>
            <div className={s.containerInput}>
                <div>
                    start value: <input className={s.input}
                                        value={startValue}
                                        onChange={changeStartValueHandler}
                                        type="number"/>
                </div>
                <div>
                    max value: <input className={s.input}
                                      value={maxValue}
                                      onChange={changeMaxValueHandler}
                                      type="number"/>
                </div>
            </div>
            <div className={s.button}>
                <Button name='set' callBack={setSettingCounter} disabledButton={disabledSetButton}/>
            </div>
        </div>
    );
};

