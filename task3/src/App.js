
import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Service from './pages/Service'
import Contact from './pages/Contact'
import About from './pages/About'
import Design from './pages/Design'

function App() {
  return (
   <div className='App'>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/service' element={<Service />} />
        <Route path='/design' element={<Design />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>

      <Navbar />
      
    </BrowserRouter>
   </div>
  );
}

export default App;
