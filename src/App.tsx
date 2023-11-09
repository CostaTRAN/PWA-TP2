import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import Card from './Login/Card'

function App() {
  const [count, setCount] = useState(0)
  const [isConnected, setConnected] = useState(false)

  return (
    <Card />
  )
}

export default App
