import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import { Counter } from './useState01'
import { Welcome } from './Welcome'

export function App() {
    

    return (
        <Routes>
            <Route path='/' element={<Welcome />}/>
            <Route path='/counter' element={<Counter />} />
        </Routes>
    )
}
