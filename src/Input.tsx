import React, {ChangeEvent} from 'react';




type InputType = {
    inputNumber:number
    callback:(value:number)=>void
}

export function Input ({inputNumber,callback}: InputType) {

    const onChangeInputHandler = (event:ChangeEvent<HTMLInputElement>) => {
      callback(+event.currentTarget.value)
    }

    return (
        <input
value={inputNumber}
onChange={onChangeInputHandler}
            type='number'/>
    )
}