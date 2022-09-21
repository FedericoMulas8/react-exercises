import React from "react";
import { useGithubUsers } from "./useGithubUser";

export default function GithubUser({username}) {
  
  const {user, error} = useGithubUsers(username)

  return (
    <div>
      {!user && <p>Loading...</p>}
      {error && <p>Error</p>}
      {user && 
      <div>
        <h1>{`Name: ${user.name}`}</h1>
        <h1>{`URL: ${user.url}`}</h1>
      </div>

      }
    </div>
  )
}


