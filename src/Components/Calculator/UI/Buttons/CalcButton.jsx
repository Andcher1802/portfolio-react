import { ACTIONS } from '../../Calculator'
export default function CalcButton ({dispatch, digit}){
  return(
    <button onClick={()=>dispatch({type: ACTIONS.ADD_DIGIT, payload:{digit}})}>{digit}</button>
    )
}
