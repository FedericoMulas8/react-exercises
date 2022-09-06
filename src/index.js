import React, {createContext} from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const LanguageContext = createContext("en");

const Translation = {
  English: {
    ACTUAL_LANG: 'Current language is English'
  },
  Italiano: {
    ACTUAL_LANG: 'La lingua corrente è Italiano'
  }
}

class DisplayLanguage extends React.Component {

  render() {
      return(
          <div>
              <LanguageContext.Consumer>
                  {(language) => {
                    return (
                    <div>
                      <div>{Translation[language].ACTUAL_LANG}</div>
                      <h1>{language}</h1>
                    </div>
                    )
                  }}
              </LanguageContext.Consumer>
          </div>
      )
  }
}

class App extends React.Component {
    state = {
        language: "English",
      };
    
    handleLanguage = (e) => {
      this.setState({
        language: e.target.value,
      });
      // console.log(e.target.value)
    };

  render() {
    return (
      <div>
        <select value={this.state.language} onChange={this.handleLanguage}>
          <option value="English">English</option>
          <option value="Italiano">Italian</option>        
        </select>

      <LanguageContext.Provider value={this.state.language}>
        <DisplayLanguage />
      </LanguageContext.Provider>
      </div>
    );
  }
}


const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(
    <App />
);