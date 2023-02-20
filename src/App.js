
import React from 'react';
import Home from './Home';
import Manage from './Manage';
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
        <Route index path='/manage/' element={<Home />} />
        <Route path='manage/about' element={<About />} />
        <Route path='manage/service' element={<Service />} />
        <Route path='manage/single' element={<Single />} />
        <Route path='manage/cartpage' element={<Cartpage />} />
        <Route path='manage/checkout' element={<Checkout />} />
        <Route path='manage/contact' element={<Contact />} />
        <Route path='manage/shop' element={<Shop />} />
        <Route path='manage/login' element={<Login />} />
        <Route path='manage/register' element={<Register />} />
        <Route path='loggin' element={<Loggin />} />
      </Routes>
    </div>
  );
}

export default App;
