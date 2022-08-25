import React from "react";
import ReactDOM from "react-dom/client";

// const root = ReactDOM.createRoot(document.getElementById('root'))

const Message = <p>What a beautiful day!</p>

class HelloWorld extends React.Component {
    render() {
        return (
            <div>
                <h1>
                    Hello, World!
                </h1>
                {Message}
            </div>
        )
    }
}

class App extends React.Component {
    render() {
        return <HelloWorld />
    }
}

ReactDOM.render(<App />, document.getElementById('root'))