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
}

export const SettingsCounter: FC<SettingsCounterType> = (
    {
        setCurrentNumber,
        setError,
        maxValue,
        setMaxValue,
        startValue,
        setStartValue,
    }) => {

    const [isDisabledSetButton, setisDisabledSetButton] = useState<boolean>(false)

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
    }, [])

    const setSettingCounter = () => {
        localStorage.setItem('maxValue', JSON.stringify(maxValue))
        localStorage.setItem('startValue', JSON.stringify(startValue))
        setCurrentNumber(startValue)
        setError('')
        setisDisabledSetButton(true)
    }

    const changeStartValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const value = +e.currentTarget.value
        setStartValue(value)
        if (value >= 0 && value < maxValue) {
            setError("enter values and press 'set'")
            setisDisabledSetButton(false)
        } else {
            setError("Incorrect value")
            setisDisabledSetButton(true)
        }
    }

    // const changeError = (currentTargetValue:number,   ) =>{
    //     if (currentTargetValue >= 0 && currentTargetValue > startValue) {
    //         setError("enter values and press 'set'")
    //         setisDisabledSetButton(false)
    //     } else {
    //         setError("Incorrect value")
    //         setisDisabledSetButton(true)
    // }

    const changeMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const value = +e.currentTarget.value
        setMaxValue(value)
        if (value >= 0 && value > startValue) {
            setError("enter values and press 'set'")
            setisDisabledSetButton(false)
        } else {
            setError("Incorrect value")
            setisDisabledSetButton(true)
        }
    }
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
                <Button name='set' callBack={setSettingCounter} disabledButton={isDisabledSetButton}/>
            </div>
        </div>
    );
};

