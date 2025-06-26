import React from 'react'

const ProgressBar = ({progress,setProgress}) => {
   const handleClick=()=>{
    setProgress((prev)=>Math.min(prev + 10, 100))
  }
  return (
    <>
    <div>ProgressBar</div>
    <div className='outer'>
        <div className="inner" style={{transform:`translateX(${progress-100}%)`}}><h3>{progress}</h3></div>
    </div>
    <button onClick={(handleClick)}>Increase progress</button>
    </>
  )
}

export default ProgressBar