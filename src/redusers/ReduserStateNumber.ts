
type ReduserStateNumberType=setStateNumberType
|setStateNumberStartType
|setStateNumberEditType

export const ReduserStateNumber = (state:number,action:ReduserStateNumberType) => {
  switch (action.type){
      case 'NUMBER-PLUS-ONE':{
          return action.number+1
      }
      case 'NUMBER-SET-STATE-START':{
          return action.inputMin
      }
      case 'NUMBER-SET-EDIT':{
          return action.inputMin
      }
      default:return state
  }
}

type setStateNumberEditType=ReturnType<typeof setStateNumberEdit>
export const setStateNumberEdit = (inputMin:number) => {
    return{
        type:'NUMBER-SET-EDIT',
        inputMin
    }as const
}

type setStateNumberStartType=ReturnType<typeof setStateNumberStart>
export const setStateNumberStart = (inputMin:number) => {
    return{
        type:'NUMBER-SET-STATE-START',
        inputMin
    }as const
}

type setStateNumberType=ReturnType<typeof setStateNumber>
export const setStateNumber = (number:number) => {
  return{
      type:'NUMBER-PLUS-ONE',
      number
  }as const
}