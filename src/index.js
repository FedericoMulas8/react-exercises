import React from "react";
import ReactDOM from "react-dom/client";

class Welcome extends React.Component {
    render() {
      return <p>Welcome, {this.props.username}</p>;
    }
  }

class InteractiveWelcome extends React.Component {

    state = {
        name: ''
    }

    handleUsernameChange = (event) => {
        this.setState({
            name: event.target.value,
        })
    }

    render() {
        return (
            <div>
                <input name='username' value={this.state.username} onChange={this.handleUsernameChange}></input>
                <Welcome username={this.state.name}/>
            </div>
        )
    }
}

class App extends React.Component {

    render() {
        return (
            <div>
                <InteractiveWelcome />
            </div>
        )
    }

}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<App />)