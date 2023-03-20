import React, {useState} from 'react';
import s from './App.module.css'
import {Counter} from "./Counter/Counter";
import {SettingsCounter} from "./SettingCounter/SettingsCounter";

const App = () => {

    const [currentNumber, setCurrentNumber] = useState<number>(0)  ///app
    const [startValue, setStartValue] = useState<number>(0) ///setting counter
    const [maxValue, setMaxValue] = useState<number>(5) ///setting counter
    const [error, setError] = useState<string>('')  ///app



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
                    setCurrentNumber={setCurrentNumber}/>
            </div>
            <div className={s.container}>
                <Counter
                    error={error}
                    setCurrentNumber={setCurrentNumber}
                    startValue={startValue}
                    currentNumber={currentNumber}
                    maxValue={maxValue}/>
            </div>
        </div>
    );
};

export default App;