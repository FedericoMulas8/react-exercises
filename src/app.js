import React from 'react'
import { CarDetails } from './CarDetails'

export function App() {

    return (
        <div>
            <CarDetails initialData={{model: 'Fiat', year: 2000, color: 'White'}}/>
        </div>
    )
}

