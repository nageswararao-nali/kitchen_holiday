import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom'
// import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
import './App.css';
import Home from './pages/Home/Home';
import Terms from './pages/terms/Terms';
import Privacy from './pages/privacy/Privacy';

function App() {
  return (
    <Routes>
        <Route path="/"  element={<Home />} />
        <Route path="/terms"  element={<Terms />} />
        <Route path="/privacy"  element={<Privacy />} />
        {/* <Route path="/login" element={<Login />} /> */}
        <Route path="*" element={<Navigate to="/" />} />
    </Routes>
    
  );
}

export default App;
