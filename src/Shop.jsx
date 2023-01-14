import React from 'react'
import Footer from './components/Home/Footer'
import Header from './components/Home/Header'
import ShopComponent from './components/Shop/ShopComponent'

export default function Shop() {
  return (
    <div>
        <div className="Container flex w-full">
          <Header />
        </div>
        <ShopComponent />
        <Footer />
    </div>
  )
}
