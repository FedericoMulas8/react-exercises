import React from "react";
import ReactDOM from "react-dom/client";


const root = ReactDOM.createRoot(document.getElementById('root'))

class Counter extends React.Component {
    constructor(props) {
        super(props)
        
        this.state = {
            count: 0,
        }
    }
    
    handleIncrement = () => {
        this.setState((state) => {
            return {count: state.count + 1}
        })
    }

    render() {
        return (
            <div>
                <p>{this.state.count}</p>
                <button onClick={this.handleIncrement} >Increment</button>
            </div>
        )
    }
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

root.render(<App />)