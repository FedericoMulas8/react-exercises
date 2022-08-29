import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById('root'))

class Age extends React.Component {
    render() {
        if (this.props.age > 18 && this.props.age < 65) {
            return <p>Your age is {this.props.age}</p>
        } else {
            return <p>Age is not valid</p>
        }
    }
}

class Welcome extends React.Component {
    render() {
        return (
        <div>
            <p>Welcome, {this.props.name}!</p>
            <Age age={this.props.age} />
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