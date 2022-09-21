import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import {SWRConfig} from 'swr'

 
const root = ReactDOM.createRoot(document.getElementById('root'))

const fetcher = (url) => fetch(url).then(response => response.json())

root.render(
    <SWRConfig value={{fetcher}}>
        <App />
    </SWRConfig>
)