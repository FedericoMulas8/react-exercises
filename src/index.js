import React from "react";
import ReactDOM from "react-dom/client";
import './index.css'

class Container extends React.Component {
    
    render() {
        return <div className="container">{this.props.children}</div>
    }
}

class App extends React.Component {

    render() {
        return (
                <Container>
                    <h1>Ciao</h1>
                </Container>
        )
    }

}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<App />)