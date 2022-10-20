import React from 'react'
import banner from '../img/illustration-intro.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
export default function hero() {
  return (
    <div className='Hero-section px-4 sm:px-1'>
    <div className='Left-text w-full sm:w-1/2'>
      <h3 className='text-lg text-gray-500 font-bold'>
          We Unlock Your
      </h3>
      <h1 className='text-3xl sm:text-6xl text-primary font-bold py-4 font-display antialiased'>
          INTUIVE BUSINESS GOALS
      </h1>
      <p className=' text-base text-gray-600 text-justify'>
          Shuvo It is a leading top digital marketing agency in Bangladesh. We deliver dedicated digital marketing services at an affordable price point! Our Marketing engineer team studies your business to sort out the most digital marketing strategy. Within weeks, you will overcome the big competition with our SEO and digital marketing secrets.<FontAwesomeIcon icon={faCoffee} className=' pl-2 text-primary'></FontAwesomeIcon>
      </p>
      

    </div>
    <div className='Right-img w-full sm:w-1/2 p-4'>
      <img src={banner} alt='Banner' className='cursor-pointer scale-75 hover:scale-100'></img>
    </div>
  </div>

  )
}
