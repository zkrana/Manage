
import React from 'react';
import Home from './Home';
import About from './About';
import Service from './Service';
import Single from './Singleproduct.jsx';
import Cartpage from './Cart'
import { Route, Routes } from 'react-router-dom';
import Checkout from './Checkout';
import Contact from './Contact';
import Shop from './Shop';
import Login from './components/Login/Login';
import Register from './components/Login/Register';
import Loggin from './Loggin'

function App() {
  return (
    <div>
      <Routes>
        <Route index path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='service' element={<Service />} />
        <Route path='single' element={<Single />} />
        <Route path='cartpage' element={<Cartpage />} />
        <Route path='checkout' element={<Checkout />} />
        <Route path='contact' element={<Contact />} />
        <Route path='shop' element={<Shop />} />
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
        <Route path='loggin' element={<Loggin />} />
      </Routes>
    </div>
  );
}

export default App;
