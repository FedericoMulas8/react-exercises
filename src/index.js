import React from 'react';
import ReactDOM from 'react-dom/client'

function Sum({numbers = [1,2,3,4]}) {
  return (
    <h1>
      {numbers.reduce((accumulator, value) => {
        return accumulator + value;
      }, 0)}
    </h1>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<Sum/>)