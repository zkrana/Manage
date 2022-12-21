import React from 'react'
import AboutBg from '../../img/business cooperation.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
export default function Introduce() {
  return (
  <div className="Container">
    <div className='Hero-section sm:px-1' id='hero'>
      <div className='Left-text w-full md:w-1/2'>
        <h3 className='text-lg text-gray-500 font-bold'>
            We Unlock Your
        </h3>
        <h1 className='Header-text'>
            INTUIVE BUSINESS GOALS
        </h1>
        <p className='Paragraph'>
            Shuvo It is a leading top digital marketing agency in Bangladesh. We deliver dedicated digital marketing services at an affordable price point! Our Marketing engineer team studies your business to sort out the most digital marketing strategy. Within weeks, you will overcome the big competition with our SEO and digital marketing secrets.<FontAwesomeIcon icon={faCoffee} className=' pl-2 text-primary'></FontAwesomeIcon>
        </p>
        <button className='Btn-red mt-5'>Get In Touch</button>

      </div>
      <div className='Right-img w-full md:w-1/2 p-4'>
        <img src={AboutBg} alt='Banner' className='cursor-pointer scale-75 hover:scale-100'></img>
      </div>
    </div>
  </div>
  )
}
