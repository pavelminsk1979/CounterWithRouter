import React, {useReducer, useState} from 'react';
import {Counter} from "./Counter";
import {Settings} from "./Settings";
import {HashRouter, Routes,Route, Navigate} from "react-router-dom";
import {ReduserInputMax, setMaxValue} from "./redusers/ReduserInputMax";
import {ReduserInputMin, setMinValue} from "./redusers/ReduserInputMin";
import {
    ReduserStateNumber,
    setStateNumber,
    setStateNumberEdit,
    setStateNumberStart
} from "./redusers/ReduserStateNumber";


function App() {

    const[inputMax,dispatchInputMax]=useReducer(
        ReduserInputMax,5)
    const[inputMin,dispatchInputMin]=useReducer(
        ReduserInputMin,0)
    const[number,dispatchSetNumber]=useReducer(
        ReduserStateNumber, inputMin)


    const addedPlusOneHandler = () => {
if(number<inputMax){
    dispatchSetNumber(setStateNumber(number))
}
    }

    const setZeroHandler = () => {
        dispatchSetNumber(setStateNumberStart(inputMin))
    }


    const buttonEditNumberHandler = () => {
        dispatchSetNumber(setStateNumberEdit(inputMin))
    }

    const SetInputMinHandler = (valueMin:number) => {
        if(valueMin>=0&&valueMin<inputMax){
            dispatchInputMin(setMinValue(valueMin))}
    }

    const SetInputMaxHandler = (valueMax:number) => {
        if(valueMax>=1&&valueMax>inputMin){
           dispatchInputMax(setMaxValue(valueMax))}
    }




    return (
        <div>
            <HashRouter>
                <Routes>
                    <Route path={'/'}
                    element={<Navigate to={'/counter'}/>}/>

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
