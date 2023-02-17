import React from 'react'
import './shop.css'
import favourite from '../../img/Shop/favourite.svg'
import categoryOthers from '../../img/icon/arrow-down.svg'
import product from '../../img/Shop/Web-Devs.png'
import product2 from '../../img/Shop/developer_male.png'
export default function ShopProduct() {
  return (
    <div>
        <div className="Shop-topBar">
            <div className="Filter-wrapper">
                <table className='Cart-table'>
                    <thead>
                            <tr>
                                <td class="text-center rs-none"><span>Best Selling</span> <img src={categoryOthers} width={20} height={20} alt='Arrow' />  </td>
                                <td class="text-right">
                                    <select name="filter" className='all-filters'>
                                        <option>Sort By</option>
                                        <option value="Price">Price</option>
                                        <option value="Type">Type</option>
                                    </select>
                                </td>
                            </tr>
                    </thead>
                </table>
            </div>
            <div className="Product-body">
                <h2 className='Header-text'> Best Service For You: </h2>
                <div className="Shop-product-wrapper">


                    <div className="Product-item">
                        <div className="Product-thumbnail">
                            <img className='Product-img' src={product} width={200} height={200} alt='Web Devs' />
                            <img className='Wishlist' src={favourite} width={10} height={10} alt='Arrow' />
                        </div>
                        <div className="Product-details">
                            <div className="Product-header">
                                <h4 className='Product-title'>Web Development</h4>
                                <span className='Price-tag'>$800</span>
                            </div>
                            <p className='Product-shortDetails'>Best Web Package for all scaled business.</p>
                            <div className="Product-reviews">
                                <span className='Rating'>*****</span>
                                <span className='Rating-count'>35</span>
                            </div>
                        </div>
                        <button type='button' className='Btn-red h-fixed'>Add to Cart</button>
                    </div>

                    <div className="Product-item">
                        <div className="Product-thumbnail">
                            <img className='Product-img' src={product2} width={200} height={200} alt='Web Devs' />
                            <img className='Wishlist' src={favourite} width={10} height={10} alt='Arrow' />
                        </div>
                        <div className="Product-details">
                            <div className="Product-header">
                                <h4 className='Product-title'>Web Development</h4>
                                <span className='Price-tag'>$800</span>
                            </div>
                            <p className='Product-shortDetails'>Best Web Package for all scaled business.</p>
                            <div className="Product-reviews">
                                <span className='Rating'>*****</span>
                                <span className='Rating-count'>35</span>
                            </div>
                        </div>
                        <button type='button' className='Btn-red h-fixed'>Add to Cart</button>
                    </div>


                    <div className="Product-item">
                        <div className="Product-thumbnail">
                            <img className='Product-img' src={product} width={200} height={200} alt='Web Devs' />
                            <img className='Wishlist' src={favourite} width={10} height={10} alt='Arrow' />
                        </div>
                        <div className="Product-details">
                            <div className="Product-header">
                                <h4 className='Product-title'>Web Development</h4>
                                <span className='Price-tag'>$800</span>
                            </div>
                            <p className='Product-shortDetails'>Best Web Package for all scaled business.</p>
                            <div className="Product-reviews">
                                <span className='Rating'>*****</span>
                                <span className='Rating-count'>35</span>
                            </div>
                        </div>
                        <button type='button' className='Btn-red h-fixed'>Add to Cart</button>
                    </div>


                    <div className="Product-item">
                        <div className="Product-thumbnail">
                            <img className='Product-img' src={product2} width={200} height={200} alt='Web Devs' />
                            <img className='Wishlist' src={favourite} width={10} height={10} alt='Arrow' />
                        </div>
                        <div className="Product-details">
                            <div className="Product-header">
                                <h4 className='Product-title'>Web Development</h4>
                                <span className='Price-tag'>$800</span>
                            </div>
                            <p className='Product-shortDetails'>Best Web Package for all scaled business.</p>
                            <div className="Product-reviews">
                                <span className='Rating'>*****</span>
                                <span className='Rating-count'>35</span>
                            </div>
                        </div>
                        <button type='button' className='Btn-red h-fixed'>Add to Cart</button>
                    </div>

                    <div className="Product-item">
                        <div className="Product-thumbnail">
                            <img className='Product-img' src={product} width={200} height={200} alt='Web Devs' />
                            <img className='Wishlist' src={favourite} width={10} height={10} alt='Arrow' />
                        </div>
                        <div className="Product-details">
                            <div className="Product-header">
                                <h4 className='Product-title'>Web Development</h4>
                                <span className='Price-tag'>$800</span>
                            </div>
                            <p className='Product-shortDetails'>Best Web Package for all scaled business.</p>
                            <div className="Product-reviews">
                                <span className='Rating'>*****</span>
                                <span className='Rating-count'>35</span>
                            </div>
                        </div>
                        <button type='button' className='Btn-red h-fixed'>Add to Cart</button>
                    </div>

                    <div className="Product-item">
                        <div className="Product-thumbnail">
                            <img className='Product-img' src={product2} width={200} height={200} alt='Web Devs' />
                            <img className='Wishlist' src={favourite} width={10} height={10} alt='Arrow' />
                        </div>
                        <div className="Product-details">
                            <div className="Product-header">
                                <h4 className='Product-title'>Web Development</h4>
                                <span className='Price-tag'>$800</span>
                            </div>
                            <p className='Product-shortDetails'>Best Web Package for all scaled business.</p>
                            <div className="Product-reviews">
                                <span className='Rating'>*****</span>
                                <span className='Rating-count'>35</span>
                            </div>
                        </div>
                        <button type='button' className='Btn-red h-fixed'>Add to Cart</button>
                    </div>

                    <div className="Product-item">
                        <div className="Product-thumbnail">
                            <img className='Product-img' src={product} width={200} height={200} alt='Web Devs' />
                            <img className='Wishlist' src={favourite} width={10} height={10} alt='Arrow' />
                        </div>
                        <div className="Product-details">
                            <div className="Product-header">
                                <h4 className='Product-title'>Web Development</h4>
                                <span className='Price-tag'>$800</span>
                            </div>
                            <p className='Product-shortDetails'>Best Web Package for all scaled business.</p>
                            <div className="Product-reviews">
                                <span className='Rating'>*****</span>
                                <span className='Rating-count'>35</span>
                            </div>
                        </div>
                        <button type='button' className='Btn-red h-fixed'>Add to Cart</button>
                    </div>



                </div>
            </div>
        </div>
    </div>
  )
}
