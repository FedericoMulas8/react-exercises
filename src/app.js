import React from 'react'
import {Counter} from './esercizio'


export function App() {

    function onCounterChange(count) {
        console.log(`Il numero è: ${count}`)
    }

    return (
        <div>
            <Counter onCounterChange={onCounterChange}/>
        </div>
    )
}

