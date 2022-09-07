import React, {useState} from "react";
import ReactDOM from "react-dom/client";


function Login(props) {
  const [data, setData] = useState({
    username: '',
    password: '',
    remember: false,
  });

  const handleInputChange = (event) => {
    const {name, value, type, checked} = event.target;
    setData({
      ...data,
      [name]: type === 'checkbox' ? checked : value
    })
  }
  
  return (
    <div>
      <input name='username' value={data.username} onChange={handleInputChange}></input>
      <input name="password" value={data.password} onChange={handleInputChange}></input>
      <input name="remember" type='checkbox' value={data.remember} onChange={handleInputChange}></input>
    </div>
  )
}

class App extends React.Component {

    render() {
        return (
            <div>
                <Login />
            </div>
        )
    }

}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<App />)