import React, { useState } from 'react';
import Modal from '../Modal';
import logo from '../../img/logo.svg';
import flag from '../../img/topbarIcon/US.png';
import location from '../../img/topbarIcon/map-pin-line.svg';
import login from '../../img/topbarIcon/login-box-line.svg';
import cart from '../../img/topbarIcon/shopping-cart-2-line.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
export default function Header() {
  const [showMobileMenu, setShowMobileMenu] = useState (false);
  const [openModal, setOpenModal] = useState (false);
  return (
    <div>
        <div className="Topbar-bg">
          <div className="Container">
              <div className="Top-bar">
                <div className="Store-details">
                    <div className="Language">
                      <img src={flag} width={20} height={20} alt='USA' />
                      <select id='language' className='Select'>
                        <option value='US'>English - US </option>
                        <option value='Bangla'>Bangla - Bn </option>
                      </select>
                    </div>
                    <div className="Location">
                    <span>
                      <img className='mr-2' src={location} width={20} height={20} alt='USA' /> <span className='text-left pl-1'>Find location</span>
                    </span>
                    </div>
                </div>
                <div className="Store-acc">
                  <div className="Acc-wrap">
                    <button className='Btn-red Display-condition' onClick={() => setOpenModal(true)}>Discount</button>
                  </div>
                </div>
            </div>
          </div>
          <div className="Container">
          <div className="Header-wrapper">
            <header className="App-header">
              <div className='Logo-box w-1/2 h-12 flex justify-start items-center pl-3 md:pl-0 md:w-2/12'>
                <NavLink to='/Manage/' className='borderUnset'>
                    <img src={logo} alt='Logo' height={60} width={120} className='animate-pulse' />
                </NavLink>
              </div>
              <div className='w-1/2 md:w-10/12 flex justify-end items-center'>
                <ul className='px-4 hidden md:flex'>
                  <li className='Nav-item'>
                    <NavLink to='/Manage/' className={ (navInfo) => navInfo.isActive ? 'active' : ''}>
                        Home
                    </NavLink>
                  </li>
                  <li className='Nav-item'>
                    <NavLink to='../Manage/about' className={ (navInfo) => navInfo.isActive ? 'active' : ''}>
                        About Us
                    </NavLink>
                  </li>
                  <li className='Nav-item'>
                    <NavLink to='../Manage/service' className={ (navInfo) => navInfo.isActive ? 'active' : ''}>
                        Service
                    </NavLink>
                  </li>
                  <li className='Nav-item'>
                    <NavLink to='../Manage/shop' className={ (navInfo) => navInfo.isActive ? 'active' : ''}>
                        Shop
                    </NavLink>
                  </li>
                  <li className='Nav-item'>
                    <NavLink to='../Manage/contact' className={ (navInfo) => navInfo.isActive ? 'active' : ''}>
                        Contact
                    </NavLink>
                  </li>
                </ul>

                <div className='Acc-wrap'>
                  <span>
                      <NavLink to='../../Manage/login'>
                          <img src={login} width={20} height={20} alt='Login'/>
                      </NavLink>
                  </span>
                  <span className='ml-2'>
                      <NavLink to='../../Manage/cartpage'>
                      <img src={cart} width={20} height={20} alt='Cart' />
                      </NavLink>
                    
                  </span>
                </div>
                <div className='flex w-20 h-20 justify-center items-center md:hidden'>
                  <FontAwesomeIcon onClick={ () => setShowMobileMenu(!showMobileMenu)} icon={faBars} className=' pl-2 text-primary text-3xl cursor-pointer relative'>
                  </FontAwesomeIcon>
                </div>

                <ul className= {showMobileMenu ? 'mb-menu':'hidden'}>
                <li className='Nav-item'>
                    <NavLink to='/Manage/' className={ (navInfo) => navInfo.isActive ? 'active' : ''}>
                        Home
                    </NavLink>
                  </li>
                  <li className='Nav-item'>
                    <NavLink to='../Manage/about' className={ (navInfo) => navInfo.isActive ? 'active' : ''}>
                        About Us
                    </NavLink>
                  </li>
                  <li className='Nav-item'>
                    <NavLink to='../Manage/service' className={ (navInfo) => navInfo.isActive ? 'active' : ''}>
                        Service
                    </NavLink>
                  </li>
                  <li className='Nav-item'>
                    <NavLink to='../Manage/shop' className={ (navInfo) => navInfo.isActive ? 'active' : ''}>
                        Shop
                    </NavLink>
                  </li>
                  <li className='Nav-item'>
                    <NavLink to='../Manage/contact' className={ (navInfo) => navInfo.isActive ? 'active' : ''}>
                        Contact
                    </NavLink>
                  </li>
                </ul>

              </div>
              <Modal open={openModal} onClose={ () => setOpenModal(false) } />
            </header>
          </div>
        </div>
        </div>

    </div>
  )
}
