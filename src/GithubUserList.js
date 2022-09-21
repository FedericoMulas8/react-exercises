import { useState } from "react";
import GithubUser from "./GithubUser";
import { Link, Outlet } from 'react-router-dom'


export function GithubUserList({users}) {
  
  const [user, setUser] = useState([]);
  const [newUser, setNewUser] = useState('');

  function handleInput({target}) {
    setNewUser(target.value);
  }

  function handleSubmit() {
      setUser([...user, newUser]);
  }


  const userArray = user.map((username, i) => (
      <div>
        <ul>
          <li key={i}>
            <Link to={username}>{username}</Link>
          </li>
        </ul>
      </div>
  ))

  return (
    <div>

      <div>
            <h1>Add a user and select it</h1>
            <input onChange={handleInput}/>
            <button onClick={handleSubmit}>Search</button>
      </div>

      <div>
        {userArray}
        <Outlet/>
      </div>

    </div>
  )
}