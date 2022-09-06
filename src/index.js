import React from "react";
import ReactDOM from "react-dom/client";

class UncontrolledLogin extends React.Component {

    handleUncontrolledInput = (event) => {
        event.preventDefault()

        const {username, password, remember} = event.target.elements

        console.log({
            username: username.value, 
            password: password.value, 
            checkbox: remember.checked})
    }

    render() {
        return (
            <div>

                <form onSubmit={this.handleUncontrolledInput}>
                    <input name='username' autoFocus></input>
                    <input name='password' type='password'></input>
                    <input name='remember' type='checkbox'></input>
                    <button type='submit'>Login</button>
                </form>

            </div>
        )
    }
}

class App extends React.Component {

    render() {
        return (
            <div>
                <UncontrolledLogin />
            </div>
        )
    }

}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<App />)