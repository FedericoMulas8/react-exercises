import React from "react";
import { useGithubUsers } from "./useGithubUser";

export default function GithubUser({username}) {
  
  const {user, error, onRefresh} = useGithubUsers(username)

  return (
    <div>
      {!user && <p>Loading...</p>}
      {error && <p>Error</p>}
      {user && 
      <div>
        <button onClick={onRefresh}>Refresh Data</button>
        <h1>{`Name: ${user.name}`}</h1>
        <h1>{`URL: ${user.url}`}</h1>
      </div>

      }
    </div>
  )
}


