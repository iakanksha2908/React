import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

const anotherElement = React.createElement(
  'a', { href: 'https://google.com'},
  'click me'
)

ReactDOM.createRoot(document.getElementById('root')).render(
  
    anotherElement
 
)
