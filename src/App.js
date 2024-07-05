import React from 'react'
import { Routes, Route } from 'react-router-dom'

const Hello = () => {
  return <h2>Hello Page</h2>;
}

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/hello" element={<Hello />} />
      </Routes>
      <h1>Hello World!!</h1>
    </div>
  )
}

export default App
