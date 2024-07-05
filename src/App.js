import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Hello from './Hello';
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/hello" element={<Hello />} />
      </Routes>
    </div>
  )
}

export default App
