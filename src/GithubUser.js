import React from "react";
import { useGithubUser } from "./useGithubUser";

export default function GithubUser({ username }) {
  
  const {user, loading, error} = useGithubUser(username)

  return (
    <div>
      {loading && <p>Loading...</p>}
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



