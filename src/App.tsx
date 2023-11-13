import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import Card from './Login/Card'
import Connected from './Login/Connected'
function App() {
  const [count, setCount] = useState(0)
  const [isConnected, setConnected] = useState(false)

  return (
    <BrowserRouter>
      <Routes>
        
          <Route index element={<Card />} />
          <Route path="Connected" element={<Connected />} />
          
        
      </Routes>
    </BrowserRouter>
    
  )
}

export default App
