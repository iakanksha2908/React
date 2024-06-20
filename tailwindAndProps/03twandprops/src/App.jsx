import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from './components/Card'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username: "Akanksha",
    age: 27
  }

  let myArr = [1,3,4]
  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind test</h1>
       <Card channel='chai aur code' someObj = {myObj} arr={myArr}/>
       <Card />
    </>
  )
}

export default App
