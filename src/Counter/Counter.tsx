import React, {FC} from 'react';
import s from './Counter.module.css';
import Button from "../Button/Button";


type CounterType = {
    currentNumber: number
    setCurrentNumber: (currentNumber: number) => void
    maxValue: number
    startValue: number
    error: string
}

export const Counter: FC<CounterType> = (
    {
        currentNumber,
        setCurrentNumber,
        maxValue,
        startValue,
        error,
    }) => {


    const increaseButton = () => {
        if (currentNumber < maxValue) {
            setCurrentNumber(currentNumber + 1)
        }
    }

    const resetButton = () => {
        setCurrentNumber(startValue)
    }

    let enteringValue: string | number = error ? error : currentNumber //counter

    const incorrectValue = error === "Incorrect value"

    return (
        <div>
            <div className={currentNumber === maxValue || incorrectValue ? s.maxNumber : s.number}>{enteringValue}</div>
            <div className={s.buttons}>
                <Button
                    name='inc'
                    callBack={increaseButton}
                    disabledButton={currentNumber === maxValue || incorrectValue}/>
                <Button
                    name='reset'
                    callBack={resetButton}
                    disabledButton={currentNumber === startValue || incorrectValue}/>
            </div>
        </div>
    );
};

