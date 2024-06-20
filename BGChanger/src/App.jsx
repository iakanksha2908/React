import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ColorBar from './components/ColorBar'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ColorBar />
    </>
  )
}

export default App
