import React from 'react';
import st from './Counter.module.css';
import {Button} from "./Button";

type CounterType = {
    addedPlusOneHandler: () => void
    setZeroHandler: () => void
    setingsHandler: () => void
}

export function Counter(props: CounterType) {


    return (
        <div className={st.frame}>
            <div>0</div>
            <div className={st.buttonGroup}>
                <Button
                    name={'plus and again plus and again plus 1'}
                    callback={props.addedPlusOneHandler} className={st.plus1}/>
                <Button
                    name={'start over'}
                    callback={props.setZeroHandler}
                    className={st.start}/>
                <Button
                    name={'settings'}
                    callback={props.setingsHandler}
                    className={st.setting}/>

            </div>
        </div>
    )
}