import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import GithubUser from './GithubUser'
import { Counter } from './useState01'
import { Welcome } from './Welcome'

export function App() {
    

    return (
        <div>
            <Link to='/'>Home</Link> | <Link to='/counter'>Counter</Link>  | <Link to='/:username'>GitHub User</Link> 
            <Routes>
                <Route path='/' element={<Welcome />}/>
                <Route path='/counter' element={<Counter />} />
                <Route path='/:username' element={<GithubUser/>} />
                <Route path='*' element={<h1>Error: Page not found.</h1>} />
            </Routes>
        </div>

    )
}
