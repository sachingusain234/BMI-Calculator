import React, { useState } from 'react';
import './App.css'
const App = () => {
    const [height, setHeight] = useState(1);
    const [weight, setWeight] = useState(1);

    const onWeightChange = (event) => {
        setWeight(parseInt(event.target.value));
    }

    const onHeightChange = (event) => {
        setHeight(parseFloat(event.target.value));
    }

    const bmi = weight /( (height/100 * height/100));

    return (
        <main>
            <h1>BMI CALCULATOR</h1>
            <div className='input-section'>
                <p className='slider-output'>Weight: {weight}kg</p>
                <input
                    className='slider-input'
                    onChange={onWeightChange}
                    type='range'
                    step="1"
                    min="1"
                    max="200"
                />
                <p className='slider-output'>Height: {height}cm</p>
                <input
                    className='slider-input'
                    onChange={onHeightChange}
                    type='range'
                    step="1"
                    min="1"
                    max="300"
                />
            </div>
            <div className='output-section'>
                <p>Your BMI is: </p>
                <p className='output'>{bmi.toFixed(2)}</p>
            </div>
        </main>
    );
}

export default App;
