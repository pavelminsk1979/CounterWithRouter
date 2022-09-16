import React, {useState} from 'react';
import {Counter} from "./Counter";
import {Settings} from "./Settings";
import {HashRouter, NavLink, Routes,Route} from "react-router-dom";


function App() {

    const starnNumber=0
    const finishNumber=5

    const[number,SetNumber]=useState(starnNumber)

    const addedPlusOneHandler = () => {
if(number<finishNumber){
    SetNumber(number+1)
}
    }

    const setZeroHandler = () => {
        SetNumber(starnNumber)
    }

    const setingsHandler = () => {

    }


    return (
        <div>
            <HashRouter>
                <NavLink to={'/counter'}><h2>counter</h2></NavLink>
                {/*<NavLink to={'/setting'}><h2>setting</h2></NavLink>*/}

                <Routes>
                    <Route path={'/counter'}
                           element={<Counter
                               finishNumber={finishNumber}
                               number={number}
                               addedPlusOneHandler={addedPlusOneHandler}
                               setZeroHandler={setZeroHandler}
                               setingsHandler={setingsHandler}
                           />}/>
                    <Route path={'/setting'}
                           element={<Settings/>}/>
                </Routes>
            </HashRouter>
        </div>
    );
}

export default App;
