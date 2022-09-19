import React from 'react';
import st from './Counter.module.css';
import {Button} from "./Button";
import { useNavigate} from "react-router-dom";

type CounterType = {
    addedPlusOneHandler: () => void
    setZeroHandler: () => void
    number: number
    inputMax: number
}

export function Counter({
                            addedPlusOneHandler,
                            setZeroHandler,
                            number,
                            inputMax,
                        }: CounterType) {

    const navigate = useNavigate()

const setingsHandler = () => {
  navigate('/setting')
}


    return (
        <div className={st.frame}>
            <div className={
                number==inputMax?st.finishNumber:st.number}>{number}</div>
            <div className={st.buttonGroup}>
                <Button
                    name={'plus and again plus and again plus 1'}
                    callback={addedPlusOneHandler} className={st.plus1}/>
                <Button
                    name={'start over'}
                    callback={setZeroHandler}
                    className={st.start}/>
                <Button
                    name='settings'
                    callback={setingsHandler}
                    className={st.setting}/>
            </div>
        </div>
    )
}