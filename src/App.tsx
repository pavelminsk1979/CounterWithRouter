import React from 'react';
import {Counter} from "./Counter";
import {Settings} from "./Settings";
import {HashRouter, Routes,Route, Navigate} from "react-router-dom";
import { setMaxValue} from "./redusers/ReduserInputMax";
import { setMinValue} from "./redusers/ReduserInputMin";
import {
    setStateNumber,
    setStateNumberEdit,
    setStateNumberStart
} from "./redusers/ReduserStateNumber";
import {useDispatch, useSelector} from "react-redux";
import {ReduxStoreType} from "./redux/store";


function App() {

    const dispatch=useDispatch()

   const inputMin=useSelector<ReduxStoreType,number>(
       state => state.inputMin
   )

    const inputMax=useSelector<ReduxStoreType,number>(
       state => state.inputMax
   )

    const number=useSelector<ReduxStoreType,number>(
       state => state.number
   )


    const addedPlusOneHandler = () => {
if(number<inputMax){
    dispatch(setStateNumber(number))
}
    }

    const setZeroHandler = () => {
        dispatch(setStateNumberStart(inputMin))
    }


    const buttonEditNumberHandler = () => {
        dispatch(setStateNumberEdit(inputMin))
    }

    const SetInputMinHandler = (valueMin:number) => {
        if(valueMin>=0&&valueMin<inputMax){
            dispatch(setMinValue(valueMin))}
    }

    const SetInputMaxHandler = (valueMax:number) => {
        if(valueMax>=1&&valueMax>inputMin){
            dispatch(setMaxValue(valueMax))}
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
