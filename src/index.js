import React, {createContext} from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const LanguageContext = createContext("en");

class DisplayLanguage extends React.Component {

  state = {
    language: "en",
  };

  handleLanguage = (e) => {
    this.setState({
      language: e.target.value,
    });
    // console.log(e.target.value)
  };

  render() {
      return(
          <div>
            <select value={this.state.language} onChange={this.handleLanguage}>
              <option value="en">English</option>
              <option value="it">Italian</option>        
            </select>
          </div>
      )
  }
}

class App extends React.Component {
  state = {}

  render() {
    return (
      <LanguageContext.Provider value={this.state.language}>
        <DisplayLanguage />
      </LanguageContext.Provider>
    );
  }
}


const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(
    <App />
);