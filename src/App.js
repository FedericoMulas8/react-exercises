import React from "react";
import { FilteredList } from "./FilteredList";

const list = [
    {
        name: 'Federico',
        id: 1,
        age: 24,
    },
    {
        name: 'Antonio',
        id: 2,
        age: 18,
    },
    {
        name: 'Gabriele',
        id: 3,
        age: 14,
    },
    {
        name: 'Andrea',
        id: 4,
        age: 19,
    }
]

export function App() {
    return (
        <div>
            <FilteredList list={list}/>
        </div>
    )
}