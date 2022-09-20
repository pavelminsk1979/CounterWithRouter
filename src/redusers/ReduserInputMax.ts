
type ReduserInputMaxType=setMaxValueType
export const ReduserInputMax = (state:number,action:ReduserInputMaxType) => {
  switch (action.type){
      case 'SET-MAXVALUE':{
          return action.valueMax
      }
      default:return state
  }
}

type setMaxValueType=ReturnType<typeof setMaxValue>
export const setMaxValue = (valueMax:number) => {
  return{
      type:'SET-MAXVALUE',
      valueMax
  }as const
}