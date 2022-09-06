import React from "react";
import ReactDOM from "react-dom/client";
import './index.css'

class Container extends React.Component {
    
    render() {
        return (
            // <div className="title">{this.props.title}</div>
            <div className="container">
                <p>{this.props.title}</p>
                {this.props.children}
            </div>
        )
    }
}

class App extends React.Component {

    render() {
        return (
            <Container title='Titolo'>
                <h1>Ciao</h1>
            </Container>
        )
    }

}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<App />)