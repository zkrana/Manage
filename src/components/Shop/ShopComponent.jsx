import React, {useState} from 'react'
import './shop.css'
import categoryOthers from '../../img/icon/arrow-down.svg'
import ShopProduct from './ShopProduct'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { fa-star } from '@fortawesome/free-solid-svg-icons';

export default function ShopComponent() {
    const [ price, setPrice ] = useState(20);

    // Triggered when the value gets updated while scrolling the slider:
    const handleInput = (e)=>{
      setPrice( e.target.value );
    }
    const hotels = [
      { name: "UI/UX", price: 80  },
      { name: "Web Design", price: 120  },
      { name: "Web Development", price: 350  },
      { name: "Domain & Hosting", price: 45  }
    ];
  return (
    <div>
        <div className="Container">
            <div className="Shop-wrapper">
                <div className="Left-sidebar">
                    <div className='Search-bar'>
                        <form>
                            <span>
                                <label for='search'>Product Search</label>
                                <input className='mt-2' type='search' name='search' placeholder='Search Product' />
                            </span>
                        </form>
                    </div>
                    <div className='Filter'>
                        <h2>Filter</h2>
                    </div>
                    <div className="Categories">
                        <h2>Categories</h2>
                        <ul className='Categories-data'>
                            <li><input type='checkbox' value='UI/UX' id='UI/UX' /><label for="UI/UX"> UI/UX </label></li>
                            <li><input type='checkbox' value='Web Design' id='Web' /><label for="Web"> Web Design </label></li>
                            <li><input type='checkbox' value='Web Development' id='WebDev' /><label for="WebDev"> Web Development </label></li>
                            <li><input type='checkbox' value='Domain & Hosting' id='DomainHosting' /><label for="DomainHosting"> Domain & Hosting </label></li>
                        </ul>
                        <p className='Others-cat'>Other's  <img className='mt-2' src={categoryOthers} width={20} height={20} alt='Arrow' /></p>
                    </div>
                    <div className="Price-range">
                      <h3>Price Range</h3>
                        <form>
                            <input type="range" onInput={ handleInput } max={400} />
                            <h1>Price: { price }</h1>
                            <div className='Filter-value'>
                                { hotels.filter( hotel => { return hotel.price > parseInt(price, 10) }).map( hotel => {
                                    return <p key={hotel.name}>{ hotel.name } | { hotel.price } $ </p>
                                })}        
                            </div>
                        </form>
                    </div>
                    <div className="Reviews">
                        <h3>Reviews</h3>
                        <div>
                        {/* <FontAwesomeIcon icon={fa-star} className=' pl-2 text-primary'></FontAwesomeIcon> */}
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star"></span>
                            <span class="fa fa-star"></span>
                        </div>
                    </div>
                </div>
                <div className="Shop-body">
                    <ShopProduct />
                </div>
            </div>
        </div>
    </div>
  )
}
