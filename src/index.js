import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById('root'))

class CounterDisplay extends React.Component {
    render() {
        return <h1>{this.props.count}</h1>
    }
}

class Counter extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            count: this.props.initialValue,
        }
    }

    render() {
        return <CounterDisplay count={this.state.count} />
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                count: this.state.count + this.props.incrementValue
            })
        }, this.props.updateValue)
    }
}

class App extends React.Component {
    render() {
        return <Counter initialValue={5} incrementValue={2} updateValue={1000} />
        }
}

root.render(<App />)