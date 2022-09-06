import React from "react";
import ReactDOM from "react-dom/client";
import './index.css'

class Welcome extends React.Component {
    render() {
      return <p className="welcome">Hello, world!</p>;
    }
  }

class App extends React.Component {

    render() {
        return (
            <div>
                <Welcome/>
            </div>
        )
    }

}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<App />)