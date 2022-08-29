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
                    {this.props.age && <p>Your age is {this.props.age}</p>}
                </div>
            )
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
            <Welcome name='Federico' age={false} />
            )
        }
}

root.render(<App />)