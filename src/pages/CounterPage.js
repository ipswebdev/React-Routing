import useCounter from "../hooks/use-counter";
import { useReducer, useState } from "react";

const COUNT_CHANGE = 'count';
const VALUE_CHANGE = 'value';
const reducer = (state,action) => {
    console.log('reducer',action)
    if(action.type === COUNT_CHANGE){
        state = {
            ...state,
            count: state.count + action.payload
        }
    }
    if(action.type === VALUE_CHANGE){
        state = {
            ...state,
            valueToAdd: action.payload
        }
    }
    return {
        ...state
    }
}


function CounterPage({initialCount}){
    // const {inital,incrementCount,decrementCount} = useCounter(initialCount);
    // const [inital,setCount] = useState(initialCount || 0)
    const [state,dispatch] = useReducer(reducer,{
        count: initialCount,
        valueToAdd: 0
    })
    const incrementCount = () => {
        // setCount(inital+1)
        dispatch({type:COUNT_CHANGE,payload:1})
    }
    const decrementCount = () => {
        // setCount(inital-1)
        dispatch({type:COUNT_CHANGE,payload:-1})
    }
    const handleInputChange = (event) => {
        let newValue = parseInt(event.target.value) || 0
        dispatch({type:VALUE_CHANGE,payload:newValue})
        console.log('input change',newValue)
    }
    const addToValue = () => {
        dispatch({type:COUNT_CHANGE,payload:state.valueToAdd})
        dispatch({type:VALUE_CHANGE,payload:0})
        console.log('submit',state.valueToAdd)
    }
    return(
        <div>
            <div>{state.count || 0}</div>
            <button onClick={()=>incrementCount()}> Increment </button>
            <button onClick={()=>decrementCount()}> Decrement </button>
            <div>
                <input 
                    type="number"
                    value={state.valueToAdd}
                    onChange={handleInputChange}
                />
            </div>
            <button onClick={()=>addToValue()}> Add Bulk Value </button>
        </div>
    )
}

export default CounterPage;