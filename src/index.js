import React from "react";
import ReactDOM from "react-dom/client";


const root = ReactDOM.createRoot(document.getElementById('root'))

class Counter extends React.Component {
    constructor(props) {
        super(props)
        
        this.state = {
            buttonName: "",
        }
    }
    
    handleTracker = (event) => {
        this.setState(() => {
            return {buttonName: event.target.name}
        })
    }

    render() {
        return (
            <div>
                <p>Hai premuto: {this.state.buttonName}</p>
                <button onClick={this.handleTracker} name='Button 1'> Button 1 </button>
                <button onClick={this.handleTracker} name='Button 2'> Button 2 </button>
                <button onClick={this.handleTracker} name='Button 3'> Button 3 </button>
            </div>
        )
    }
}

class App extends React.Component {

    render() {
        return (
            <div>
                <Counter />
            </div>
        )
    }

}

root.render(<App />)