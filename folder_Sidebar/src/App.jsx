import { useState } from 'react'
import './App.css'
import json from '../data.json'

function App() {
  const [data, setData] = useState(json)

  const List = ({ info }) => {
    return (
      <div>
        {info.map((node) => (
          <Folder key={node.name} node={node} />
        ))}
      </div>
    )
  }

  const Folder = ({ node }) => {
    const [show, setShow] = useState(false)

    const toggle = () => {
      setShow((prev) => !prev)
    }

    return (
      <div style={{ marginLeft: "20px" }}>
        {node.name}
        {node.isFolder && (
          <button onClick={toggle}>
            {show ? "Close" : "Open"}
          </button>
        )}
        {show && node.children && (
          <List info={node.children} />         //imp line (this is recursion)-> keeps on repeating
        )}
      </div>
    )
  }

  return (
    <>
      <div className="container">
        <div>
          <h1>File/Folder Nested Structure</h1>
        </div>
        <List info={data} />
      </div>
    </>
  )
}

export default App
