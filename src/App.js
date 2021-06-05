import React, { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom'
import Routes from './Routes'
import './style.css';


export default function App() {
  
  return (
    <BrowserRouter>
        <Routes/>
    </BrowserRouter>
  );
}
