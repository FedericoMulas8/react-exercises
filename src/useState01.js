import React, {useState} from "react";

export function Counter(props) {

    const [count, setCount] = useState(0)
  
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
  