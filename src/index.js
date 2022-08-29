import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById('root'))

class Age extends React.Component {
    render() {
            return (
                <div>
                    {this.props.age > 18 
                    ? <p>Your age is {this.props.age}</p> 
                    : <p>You are very young!</p>}
                </div>
            )
    }
}

class Welcome extends React.Component {
    render() {
        return (
        <div>
            {this.props.name === 'John' && <p>Welcome, {this.props.name}!</p>}
            <Age age={this.props.age} />
        </div>
        )
    }
}

class App extends React.Component {
    render() {
        return (
            <Welcome name='Federico' age={18} />
            )
        }
}

root.render(<App />)