
import { useState } from 'react'
import './App.css'
import ProgressBar from './components/ProgressBar'

function App() {
  const [progress,setProgress]=useState(0)
  
  return (
    <>
      <div>
        <ProgressBar progress={progress} setProgress={setProgress}/>
      </div>
      
    </>
  )
}

export default App
