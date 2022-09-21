import React from "react"
import { BrowserRouter } from "react-router-dom"
import { App } from "./app"

export function Root() {

    return (
        <BrowserRouter >
            <App />
        </BrowserRouter>
    )
}