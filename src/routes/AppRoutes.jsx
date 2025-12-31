import React from 'react'
import{ BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from '../screen/Login.jsx';
import Register from '../screen/Register.jsx';
import Home from '../screen/Home.jsx';

const AppRoutes = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default AppRoutes
