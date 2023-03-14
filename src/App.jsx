import { useState } from 'react'
import GuessProvider from './contexts/GuessContext'

import './App.css'
import GuessInput from './components/GuessInput'

function App() {


  return (
    <div className="App">
      <GuessProvider>
        <GuessInput />
      </GuessProvider>
    </div>
  )
}

export default App
