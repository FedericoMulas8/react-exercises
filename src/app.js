import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import { Welcome } from './Welcome'

export function App() {
    

    return (
        <Routes>
            <Route path='/' element={<Welcome />}/>
        </Routes>
    )
}
