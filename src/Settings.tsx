import React from 'react';
import st from './Settings.module.css';
import {Input} from "./Input";
import {Button} from "./Button";
import {NavLink} from "react-router-dom";

type SettingsType = {
    buttonEditNumberHandler: () => void
    inputMax: number
    SetInputMax: (valueMax: number) => void
    inputMin: number
    SetInputMin: (valueMin: number) => void
}

export function Settings({buttonEditNumberHandler, inputMax, SetInputMax, inputMin, SetInputMin}: SettingsType) {


    return (
        <div className={st.frame}>
            <div className={st.blokValueAndInput}>
                MIN value
                <Input
                inputNumber={inputMin}
                callback={SetInputMin}
                className={st.inputMin}/>
            </div>
            <div className={st.blokValueAndInput}>
                MAX value
            <Input
                inputNumber={inputMax}
                callback={SetInputMax}
                className={st.inputMax}/>
            </div>
            <NavLink to={'/counter'}>
                <Button
                    name={'как напишешь цифру - так и жми СЮДА'}
                    callback={buttonEditNumberHandler}
                    className={st.buttonEditNumber}/>
            </NavLink>

        </div>
    )
}