import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById('root'))

// class Age extends React.Component {
//     render() {
//         if (this.props.age) {
//             return <p>Your age is {this.props.age}</p>
//         } else {
//             return <p>Age is not present</p>
//         }
//     }
// }

class Age extends React.Component {
    render() {
            return (
                <div>
                    {this.props.age > 18 && this.props.age < 65 && <p>Your age is {this.props.age}</p>}
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
            <Welcome name='Federico' age={24} />
            )
        }
}

root.render(<App />)