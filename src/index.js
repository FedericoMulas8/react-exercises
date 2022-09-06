import React from "react";
import ReactDOM from "react-dom/client";

class Login extends React.Component {

    state = {
        username: '',
        password: '',
        remember: false,
    }

    handleInput = (event) => {
        const { name, value, type, checked } = event.target 
        this.setState({
            [name]: type === 'checkbox' ? checked : value
            })
        }

    resetButton = () => {
        this.setState({
            username: '',
            password: '',
            remember: false,
        })
    }    

    componentDidUpdate() {
        console.log(this.state)
    }

    render() {
        return (
            <div>
                <input name="username" value={this.state.username} onChange={this.handleInput}></input>
                <input name="password" type='password' value={this.state.password} onChange={this.handleInput}></input>
                <input name="remember" type='checkbox' value={this.state.remember} onChange={this.handleInput}></input>
                <button onClick={this.resetButton}>Reset</button>
            </div>
        )
    }
}

class App extends React.Component {

    render() {
        return (
            <div>
                <Login />
            </div>
        )
    }

}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<App />)