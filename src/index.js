import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById('root'))

class Welcome extends React.Component {
    render() {
        return <p>Welcome, {this.props.name}!</p>
    }
}

class App extends React.Component {
    render() {
        return (
            <Welcome name='Federico' />
            )
        }
    }


root.render(<App />)