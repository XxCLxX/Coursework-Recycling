import React from 'react'
import Annoucement from '../components/ShopSection/Annoucement'
import Categories from '../components/ShopSection/Categories'
import Navbar from '../components/ShopSection/Navbar'
import Slider from '../components/ShopSection/Slider'
import Products from '../components/ShopSection/Products'
import Newsletter from '../components/ShopSection/Newsletter'
import Footer from '../components/ShopSection/Footer'
import OurMission from '../components/ShopSection/OurMission'

const ShopPage = () => {
  return (
    <>
      <Annoucement />
      <Navbar />
      <Slider />
      <Categories />
      <OurMission />
      <Products />
      <Newsletter />
      <Footer/>
    </>
  )
}

export default ShopPage