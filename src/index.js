import React from 'react';
import ReactDOM from 'react-dom/client'

function Welcome({name}) {
  return (
    <p>Hello, {name}</p>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<Welcome name='Federico'/>)