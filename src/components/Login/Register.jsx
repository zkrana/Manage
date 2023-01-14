import React from 'react'
import './Login.css'
import Header from '../Home/Header'
import Footer from '../Home/Footer'
import facebook from '../../img/login/facebook-fill.svg'
import gmail from '../../img/login/google-fill.svg'
import { NavLink } from 'react-router-dom'
export default function Register() {
  return (
    <div>
        <Header />
        <div className='Login-Panel'>
            <div className="Container">
                <div className="Panel-heading">
                    <h2 className='text-[20px] sm:text-[25px] font-semibold'>Create your Manage Account</h2>
                    <span data-spm-anchor-id="a2a0e.login_signup.0.i14.53032829hfwNws">Already member? <NavLink to='../../login' className='text-[tomato]'>Login</NavLink> here.</span>
                </div>
                <div className="Login-body">
                    <form className='w-full flex flex-wrap'>
                        <div className="User-area">
                            <div class="form-groups">
                                <label class="control-label" for="input-number">Phone Number</label>
                                <input type="number" id="input-number" pattern='[0-9]' name="number" class="form-control" placeholder="Please enter your phone number" />
                            </div>
                            <div class="form-groups">
                                <label class="control-label" for="input-password">Password</label>
                                <input type="password" pattern=".{8,}" title="Eight or more characters" id="input-password" name="password" class="form-control" placeholder="Please enter your password!" />
                            </div>
                            <div class="multiple-form-groups">
                                <div class="form-group">
                                    <label class="control-label" for="input-dob">Date of Birth</label>
                                    <input class="form-control" name="dob" type="date" id="input-dob" />
                                </div>
                                <div class="form-group">
                                    <label class="control-label" for="input-lastname">Gender</label>
                                    <select id='gender'>
                                        <option>Select</option>
                                        <option value='Male'>Male</option>
                                        <option value='Female'>Female</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="Loginvia-email">
                            <div class="form-groups">
                                <label class="control-label" for="input-name">Full Name</label>
                                <input type="text" id="input-name" name="input-name" class="form-control" placeholder="Please enter your phone name" />
                            </div>
                            <div className='pb-3'>
                                <label class="next-checkbox ">
                                    <input type="checkbox" />
                                    <span className='pl-2'>I'd like to receive exclusive offers and promotions via SMS</span>
                                </label>
                            </div>

                            <button id="button-confirm" class="Btn-red text-center w-full" type="submit">Sign Up</button>

                            <p className=' text-gray-600 py-2 sm:py-4'>
                                <span>By clicking “SIGN UP”, I agree to Daraz's  
                                    <a className='text-[#049cb9]' href="https://www.managesss.com" target="_blank" rel="noopener noreferrer">Terms of Use</a> and <a  className='text-[#049cb9]' href="https://www.managesss.com" target="_blank" rel="noopener noreferrer" data-spm-anchor-id="a2a0e.login_signup.0.0">Privacy Policy</a>
                                </span>
                            </p>
                            <p className=' text-gray-600 pb-2 sm:pb-3'>Or, signup with</p>
                            
                            <button id="button-confirm" class="Btn-red text-center w-full mb-3" type="submit">Signup with Email</button>
                            <div className='flex gap-10'>
                                <button id="button-confirm" class="Facebook" type="submit"> <img src={facebook} width={18} height={18} alt='facebook' /> Facebook</button>
                                <button id="button-confirm" class="Google h-[3rem]" type="submit"><img src={gmail} width={18} height={18} alt='gmail' />  Gmail</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <Footer />
    </div>
  )
}
