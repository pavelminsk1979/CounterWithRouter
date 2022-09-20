
type ReduserInputMinType=setMinValueType
export const ReduserInputMin = (state:number,action:ReduserInputMinType) => {
  switch (action.type){
      case 'SET-MINVALUE':{
          return action.valueMin
      }
      default:return state
  }
}

type setMinValueType=ReturnType<typeof setMinValue>
export const setMinValue = (valueMin:number) => {
  return{
      type:'SET-MINVALUE',
      valueMin
  }as const
}