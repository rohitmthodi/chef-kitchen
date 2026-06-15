import React from 'react'
import { Routes, Route } from "react-router-dom";
import Welcome from './pages/Welcome';
import Sidebar from './components/Sidebar';
import Home from './components/Home';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Welcome />} />
        <Route path='/home' element={<Home />} />
      </Routes>
    </div>
  )
}

export default App;