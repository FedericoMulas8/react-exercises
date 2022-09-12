import React from "react"
import { useCounter } from "./useCallback"

export function Counter({initialValue = 0}) {

    const {count, onIncrement, onDecrement, onReset} = useCounter(initialValue)

    return (
        <div>
            <h1>{`Number: ${count}`}</h1>
            <button onClick={onIncrement}>+</button>
            <button onClick={onDecrement}>-</button>
            <button onClick={onReset}>Reset</button>
        </div>
    )
}