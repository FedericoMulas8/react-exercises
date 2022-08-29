import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById('root'))

class Welcome extends React.Component {
    render() {
        return (
        <div>
            <p>Welcome, {this.props.name}!</p>
            <p>Your age is {this.props.age}</p>
        </div>
        )
    }
}

class App extends React.Component {
    render() {
        return (
            <Welcome name='Federico' age={24} />
            )
        }
}


root.render(<App />)