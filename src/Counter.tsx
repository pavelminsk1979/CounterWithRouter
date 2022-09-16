import React from 'react';
import st from './Counter.module.css';
import {Button} from "./Button";
import {NavLink} from "react-router-dom";

type CounterType = {
    addedPlusOneHandler: () => void
    setZeroHandler: () => void
    setingsHandler: () => void
    number: number
    finishNumber: number
}

export function Counter({
                            addedPlusOneHandler,
                            setZeroHandler,
                            setingsHandler,
                            number,
                            finishNumber,
                        }: CounterType) {


    return (
        <div className={st.frame}>
            <div className={
                number==finishNumber?st.finishNumber:st.number}>{number}</div>
            <div className={st.buttonGroup}>
                <Button
                    name={'plus and again plus and again plus 1'}
                    callback={addedPlusOneHandler} className={st.plus1}/>
                <Button
                    name={'start over'}
                    callback={setZeroHandler}
                    className={st.start}/>
                <NavLink to={'/setting'}> <Button
                    name={'settings'}
                    callback={setingsHandler}
                    className={st.setting}/></NavLink>

            </div>
        </div>
    )
}