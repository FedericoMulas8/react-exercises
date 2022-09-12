import React, { useState, useEffect } from 'react';

export function Counter({onCounterChange}) {

  const [count, setCount] = useState(0)

  
  useEffect(() => onCounterChange(count), [onCounterChange, count])


  const handleIncrement = () => {
    setCount((count) => count + 1) 
  }

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  )
}

/*
Add a side effect to the ClickCounter component from useState 01 that calls a 
onCounterChange function with the current value of the counter every time value of the counter changes. 
The function should be received as a prop.
*/

