import React, { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom'
import Routes from './Routes'
import { Navbar } from './components/Navbar'
import './style.css';


export default function App() {
  
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes/>
    </BrowserRouter>
  );
}
