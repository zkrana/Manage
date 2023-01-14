import React from 'react'
import HeroBg from '../../img/Responsive-web-develeopment.png'
import { NavLink } from "react-router-dom";
export default function ServiceIntro() {
  return (
    <div className="Container mt-7">
      <div className='Hero-section sm:px-1' id='hero'>
        <div className='Right-img w-full md:w-1/2 sm:p-4'>
            <img src={HeroBg} alt='Banner'></img>
        </div>
        <div className='Left-text w-full md:w-1/2 sm:pl-10'>
            <h3 className='text-lg text-gray-500 font-semibold'>
                We Are Committed In Dynamic
            </h3>
            <h1 className='Header-text'>
                Best Web Design and Development Company In Bangladesh
            </h1>
            <p className='Paragraph'>
                Design your business websites up to the mark with our web development service. Our company provides international standard websites, e-Commerce sites, and other development tools to make your product and service a good impression. <br></br>
                We have designed websites for more than 500 clients per year since our beginning. You can glance at our client's testimonials about our committed delivery. Our team leader conducts direct discussions and meetings to complete your website projects. We run our full operations at uttara, Dhaka. ​
            </p>
            
           <NavLink to='../contact'>
              <button className='Btn-red mt-5'>Get a free quote</button>
           </NavLink>
        </div>
      </div>
    </div>
  )
}
