import React, { useState } from "react";
import ReactDOM from "react-dom/client";

function Counter(props) {

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

class App extends React.Component {

    render() {
        return (
            <div>
                <Counter />
            </div>
        )
    }

}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)
