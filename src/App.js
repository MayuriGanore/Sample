import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Hello from './Hello.js';

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/hello" element={<Hello />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
