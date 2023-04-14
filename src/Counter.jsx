import React, { useState, useEffect } from "react";

function Counter(){

    const [counter, setCounter] = useState(0)

    useEffect(() => {
        console.log('renderizou')
    }, [counter])

    function handleClickPlus(){
        setCounter(counter + 1);
    }

    function handleClickLess(){
        setCounter(counter - 1)
    }

    return(
        <div>
            <button onClick={handleClickLess}>-</button>
            <span>{counter}</span>
            <button onClick={handleClickPlus}>+</button>
        </div>
    )
}

export default Counter