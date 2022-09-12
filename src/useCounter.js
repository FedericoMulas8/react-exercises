import { useState } from "react"

export function useCounter({initialValue = 0}) {

    const [count, setCount] = useState(initialValue)

    function handleIncrement() {
        setCount((c) => c + 1)
    }

    function handleDecrement() {
        setCount((c) => c - 1)
    }

    function handleReset() {
        setCount(initialValue)
    }

    return (
        {
            count: count,
            onIncrement: handleIncrement,
            onDecrement: handleDecrement,
            onReset: handleReset,
        }
    )

}


/*
Create a custom hook useCounter that keeps track of the state of a counter, and returns the current value of the counter as 
well as three functions to increment, decrement and 
reset the counter.
*/