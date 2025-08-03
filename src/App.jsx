import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css'

import Header from './components /Header'
import Slider from './components /Slider'
import Provider from './components /Provider'
import MovieList from './components /MovieList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header/>
      <Slider/>
      <Provider/>
      <MovieList/>
    </div>
  )
}

export default App
