import React, {useState} from 'react';
import {Counter} from "./Counter";
import {Settings} from "./Settings";
import {HashRouter, Routes,Route} from "react-router-dom";


function App() {

    const[inputMax,SetInputMax]=useState(5)
    const[inputMin,SetInputMin]=useState(0)
    const[number,SetNumber]=useState(inputMin)


    const addedPlusOneHandler = () => {
if(number<inputMax){
    SetNumber(number+1)
}
    }

    const setZeroHandler = () => {
        SetNumber(inputMin)
    }


    const buttonEditNumberHandler = () => {
        SetNumber(inputMin)
    }

    const SetInputMaxHandler = (valueMax:number) => {
        SetInputMax(valueMax)
    }

    const SetInputMinHandler = (valueMin:number) => {
        SetInputMin(valueMin)
    }


    return (
        <div>
            <HashRouter>
                <Routes>
                    <Route path={'/counter'}
                           element={<Counter
                               inputMax={inputMax}
                               number={number}
                               addedPlusOneHandler={addedPlusOneHandler}
                               setZeroHandler={setZeroHandler}
                           />}/>
                    <Route path={'/setting'}
                           element={<Settings
                               inputMax={inputMax}
                               SetInputMax={SetInputMaxHandler}
                               inputMin={inputMin}
                               SetInputMin={SetInputMinHandler}
                               buttonEditNumberHandler={buttonEditNumberHandler}
                           />}/>
                </Routes>
            </HashRouter>
        </div>
    );
}

export default App;
