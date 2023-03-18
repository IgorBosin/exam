import React, {useState} from 'react';
import s from './App.module.css'
import {Counter} from "./Counter/Counter";
import {SettingsCounter} from "./SettingCounter/SettingsCounter";

const App = () => {

    const [currentNumber, setCurrentNumber] = useState<number>(0)  ///app
    const [startValue, setStartValue] = useState<number>(0) ///setting counter
    const [maxValue, setMaxValue] = useState<number>(5) ///setting counter
    const [error, setError] = useState<string>('')  ///app
    const incorrectValue = error === "Incorrect value"


    return (
        <div className={s.app}>
            <div className={s.container}>
                <SettingsCounter
                    startValue={startValue}
                    setStartValue={setStartValue}
                    maxValue={maxValue}
                    setMaxValue={setMaxValue}
                    error={error}
                    setError={setError}
                    incorrectValue={incorrectValue}
                    setCurrentNumber={setCurrentNumber}/>
            </div>
            <div className={s.container}>
                <Counter
                    error={error}
                    incorrectValue={incorrectValue}
                    setCurrentNumber={setCurrentNumber}
                    startValue={startValue}
                    currentNumber={currentNumber}
                    maxValue={maxValue}/>
            </div>
        </div>
    );
};

export default App;

// import React, {useEffect, useState} from 'react';
// import Button from "./Button";
// import s from './App.module.css'
// import {start} from "repl";
//
// const App = () => {
//
//     const startValue = 0
//     const maxValue = 5
//
//
//     const [currentNumber, setCurrentNumber] = useState<number>(()=>{
//         let valueAsString = localStorage.getItem('counter')
//         if (valueAsString) {
//             return JSON.parse(valueAsString)
//         }else{
//             return 0
//         }
//     })
//
//     useEffect(() => {
//         localStorage.setItem('counter', JSON.stringify(currentNumber))
//     }, [currentNumber])
//
//     useEffect(() => {
//         let valueAsString = localStorage.getItem('counter')
//         if (valueAsString) {
//             let newValue = JSON.parse(valueAsString)
//             setCurrentNumber(newValue)
//         }
//     }, [])
//
//     const increaseButton = () => {
//         if (currentNumber < maxValue) {
//             setCurrentNumber(current => currentNumber + 1)
//         }
//     }
//
//     const resetButton = () => {
//         setCurrentNumber(startValue)
//     }
//
//     let disabledIncreaseButton = currentNumber === maxValue
//     let disabledResetButton = currentNumber === startValue
//
//     return (
//         <div className={s.border}>
//             <div className={disabledIncreaseButton ? s.maxNumber : s.number}>{currentNumber}</div>
//             <div className={s.buttons}>
//                 <Button
//                     name='inc'
//                     callBack={increaseButton}
//                     disabledButton={disabledIncreaseButton}/>
//                 <Button
//                     name='reset'
//                     callBack={resetButton}
//                     disabledButton={disabledResetButton}/>
//             </div>
//         </div>
//     );
// };
//
// export default App;