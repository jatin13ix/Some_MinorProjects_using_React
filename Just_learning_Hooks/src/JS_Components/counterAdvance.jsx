import React from "react";
import { useState } from "react";



function Count() {
    const [count, setCount] = useState(0)
    //Function for Incrementing the State
    const increment = () => {
        setCount(count+1)
    }
    //Function for Decrementing the State
    const decrement = () => {
        setCount(count-1)
    }
    //Function for setting the state to zero
    const setzero = () => {
        setCount(0)
    }

    return (
        <>
            <div className="btnClass">
                <button
                onClick={increment}>INCREMENT</button>
                <button
                onClick={decrement}>DECREMENT</button>
                <button
                onClick={setzero}>setToZero</button>
                {count}
           </div>
        </>
    )
} 
export default Count