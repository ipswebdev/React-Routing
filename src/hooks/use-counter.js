import { useState, useEffect } from "react";

function useCounter(initialCount){
    const [inital,setCount] = useState(initialCount || 0)
    const incrementCount = () => {
        setCount(inital+1)
    }
    const decrementCount = () => {
        setCount(inital-1)
    }
    
    useEffect(()=>{
        console.log('useEffect',inital)
    },[inital])

    return {inital,incrementCount,decrementCount}
}

export default useCounter;