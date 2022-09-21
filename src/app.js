import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import GithubUser from './GithubUser'
import { Counter } from './useState01'
import { Welcome } from './Welcome'

export function App() {
    

    return (
        <Routes>
            <Route path='/' element={<Welcome />}/>
            <Route path='/counter' element={<Counter />} />
            <Route path='/:username' element={<GithubUser/>} />
        </Routes>
    )
}
