import React, {ChangeEvent} from 'react';


type InputType = {
    inputNumber: number
    callback: (value: number) => void
    className:string
}

export function Input({inputNumber, callback,className}: InputType) {

    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        callback(Math.round(+event.currentTarget.value))
    }

    return (
        <input
            className={className}
            value={inputNumber}
            onChange={onChangeInputHandler}
            type='number'/>
    )
}