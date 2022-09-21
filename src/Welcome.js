import React, {useState} from "react"

export function Welcome() {

    const [name, setName] = useState('Federico')

    function handleInput({target}) {
        setName(target.value)
    }

    return(
        <div>
            <h1>Hello, {name}!</h1>
            <input value={name} onChange={handleInput}></input>
        </div>
    )

}