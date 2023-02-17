import React from 'react'
import logo from '../../img/logo-white.svg';
import fb from '../../img/icon-facebook.svg';
import tw from '../../img/icon-twitter.svg';
import pin from '../../img/icon-pinterest.svg';
import yt from '../../img/icon-youtube.svg';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <div className=' w-full bg-slate-800 h-fit'>
        <div className='Container p-4 h-full'>
            <div className="flex justify-start items-start flex-col md:flex-row">
                <div className='w-full md:w-1/5 py-5 h-full' >
                    <div className='Logo-box h-fit md:h-40 mt-4 mb-4 md:mb-0'>
                        <img src={logo} alt='Logo' height={40} width={120} className='animate-pulse'></img>
                        <p className='text-white pt-2'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero maxime exercitationem optio deleniti quisquam ducimus?
                        </p>
                    </div>
                    <div className='flex justify-start space-x-4 mt-2'>
                        <a href='facebook.com'>
                            <img src={fb} alt='Social' width={25} height={25}></img>
                        </a>

                        <a href='twitter.com'>
                            <img src={tw} alt='Social' width={25} height={25}></img>
                        </a>

                        <a href='pinterest.com'>
                            <img src={pin} alt='Social' width={25} height={25}></img>
                        </a>

                        <a href='youtube.com'>
                            <img src={yt} alt='Social' width={25} height={25}></img>
                        </a>
                    </div>
                </div>

                <div className="w-full md:w-2/5 flex justify-betwee">
                    <div className='w-1/2' >
                        <div className='w-full flex justify-start md:justify-around space-x-32 mt-6'>
                            <div className='flex flex-col space-y-3 text-white'>
                                <h2 className='text-lg font-semibold'> Main Navigation </h2>
                                <ul>
                                <li className='hover:text-primary'><Link to='/'>Home</Link></li>
                                <li className='hover:text-primary'><Link to='#'>Pricing</Link></li>
                                <li className='hover:text-primary'><Link to='#'>Products</Link></li>
                                <li className='hover:text-primary'><Link to='/about'>About</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className='w-1/2' >
                        <div className='flex flex-col space-y-3 text-white mt-6'>
                            <h2 className='text-lg font-semibold'> Important Links </h2>
                            <ul>
                            <li className='hover:text-primary'><Link to='#'>Careers</Link></li>
                            <li className='hover:text-primary'><Link to='#'>Community</Link></li>
                            <li className='hover:text-primary'><Link to='#'>Privacy Policy</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className='w-full md:w-2/5' >
                    <div className='flex flex-col space-y-3 text-white mt-6'>
                        <h2 className='text-lg font-semibold'> Subscription </h2>
                        <div  className='mt-7'>
                        <form>
                            <input type="email" name="email" placeholder="Email" className='text-black inline h-11 border-none rounded focus:outline-none pl-3 w-[unset]'></input>
                            <input type="submit" className='Subscription' value="Submit"></input>
                        </form>
                        </div>
                        <p className='text-base py-3'>All Rights Reserved 2022</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
