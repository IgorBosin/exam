import React, {useState} from 'react';
import Button from "./Button";
import s from './App.module.css'

const App = () => {

    const startValue = 0
    const maxValue = 5

    const [currentNumber, setCurrentNumber] = useState<number>(startValue)

    const increaseButton = () => {
        if (currentNumber < maxValue) {
            setCurrentNumber(current => currentNumber + 1)
        }
    }

    const resetButton = () => {
        setCurrentNumber(startValue)
    }

    let disabledIncreaseButton = currentNumber === maxValue
    let disabledResetButton = currentNumber === startValue

    return (
        <div className={s.border}>
            <div className={disabledIncreaseButton ? s.maxNumber : s.number}>{currentNumber}</div>
            <div className={s.buttons}>
                <Button
                    name='inc'
                    callBack={increaseButton}
                    disabledButton={disabledIncreaseButton}/>
                <Button
                    name='reset'
                    callBack={resetButton}
                    disabledButton={disabledResetButton}/>
            </div>
        </div>
    );
};

export default App;