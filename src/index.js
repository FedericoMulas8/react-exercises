import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById('root'))

class Counter extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            count: this.props.initialValue,
        }

        setInterval(() => {
            this.setState({
                count: this.state.count + this.props.incrementValue
            })
        }, this.props.updateValue)
    }

    render() {
        return <h1>{this.state.count}</h1>
    }
}

class App extends React.Component {
    render() {
        return <Counter initialValue={5} incrementValue={2} updateValue={1000} />
        }
}

root.render(<App />)