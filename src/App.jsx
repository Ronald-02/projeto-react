import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar';
import { Outlet } from 'react-router-dom';

function App() {

  return (
    <div className="app-container">
      <Navbar />
      <Outlet />    
    </div>
  );
}

export default App;
