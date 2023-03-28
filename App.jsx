import { useState } from 'react'

import './App.css'
import HomeScreen from './HomeScreen'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
      <HomeScreen />
      
    </div>
  )
}

export default App
