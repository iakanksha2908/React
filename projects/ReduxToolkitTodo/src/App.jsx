import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'
import AddTodoComp from './components/AddTodo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1>Redux toolkit Project</h1>
     <AddTodoComp/>
     <Todos/>
    </>
  )
}

export default App
