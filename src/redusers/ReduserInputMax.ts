
type ReduserInputMaxType=setMaxValueType

const initialMaxValue:number=5
export const ReduserInputMax = (state:number=initialMaxValue,action:ReduserInputMaxType) => {
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