import React from "react";
import ReactDOM from "react-dom/client";

class List extends React.Component {

    state = {
        items: ['Mouse', 'Monitor', 'Keyboard'],
        newItem: '',
    }

    handleInputChange = (event) => {
        const obj = event.target.value
        this.setState({
            newItem: obj,
        })
    }

    addItem = (event) => {
        this.setState({
            items: [...this.state.items, this.state.newItem],
            newItem: '',
        })
    }

    handleResetButton = () => {
        this.setState({
            items: []
        })
    }

    render() {

        return (
            <div>
                <ul>
                    {this.state.items.map((item, index) => <li key={index}>{item}</li>)}
                </ul>
                <input value={this.state.newItem} onChange={this.handleInputChange}></input>
                <button name='add' onClick={this.addItem}>Add Item</button>
                <button name="reset" onClick={this.handleResetButton}>Reset List</button>
            </div>
        )
    }

}

class App extends React.Component {

    render() {
        return (
            <div>
                <List/>
            </div>
        )
    }

}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<App />)