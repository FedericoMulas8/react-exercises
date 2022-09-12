import React from "react";
import { useLogin } from "./useLogin";

export function Login() {

    const {username, password, remember, onDataChange, onLogin} = useLogin({
        username: '',
        password: '',
        remember: false,
    })

    return (
        <div>
            <div>
                <input placeholder="Username" value={username} name="username" onChange={onDataChange}></input>
            </div>
            <div>
                <input placeholder="Password" name="password" value={password} onChange={onDataChange}></input>
            </div>
            <div>
                <input type='checkbox' name="remember" value={remember} onChange={onDataChange}></input>
            </div>
            <div>
                <button onClick={onLogin}>Login</button>
            </div>
        </div>
        
    )
}