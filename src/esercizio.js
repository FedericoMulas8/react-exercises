import React, { useEffect, useState } from "react";

export function GithubUser({username = 'FedericoMulas8'}) {
  const [user, setUser] = useState(null)

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
    .then(response => {
      return response.json()
    })
    .then(dati => {
      setUser(dati)
      console.log(dati)
    })
  }, [username])

  return (
    <div>
      <h1>{`Ciao, ${user.login}`}</h1>
    </div>
  )
}


/*
Create a GithubUser component that fetches the data of the 
username passed as a prop, and renders some of the data within 
a div tag. 
The API to query is https://api.github.com/users/${username}.
*/

