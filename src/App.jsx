import { useState } from 'react'
import './App.css'
import TweetsList from './components/TweetsList/Index'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <TweetsList/>
    </>
  )
}

export default App
