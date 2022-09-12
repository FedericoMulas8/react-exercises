import {useState} from 'react'

export function useLogin() {

    const [data, setData] = useState({
        username: '',
        password: '',
        remember: false,
    })

    function handleDataChange({target}) {
        const {name, value, type, checked} = target
        setData({
            ...data,
            [name]: type === 'checkbox' ? checked : value,
        })
    }

    function handleLogin() {
        console.log(data)
    }

    return ({
            username: data.username,
            password: data.password,
            remember: data.remember,
            onDataChange: handleDataChange,
            onLogin: handleLogin,
        })
}