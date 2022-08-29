import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById('root'))

class Counter extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0,
        }

        setInterval(() => {
            this.setState({
                count: this.state.count + 1
            })
        }, 1000)
    }

    render() {
        return <h1>{this.state.count}</h1>
    }
}

class App extends React.Component {
    render() {
        return <Counter />
        }
}

root.render(<App />)