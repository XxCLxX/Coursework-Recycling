import React from 'react'
import { InfoSection, Navbar } from '../components/DonationSection'
import { donateObjOne, donateObjTwo } from '../components/DonationSection/InfoSection/Data'
import Instruct from '../components/DonationSection/Instruction/Instruct'
import Footer from '../components/Footer'

const DonationPage = () => {
  return (
    <>
        <Navbar/>
        <InfoSection {...donateObjOne}/>
        <InfoSection {...donateObjTwo}/>
        <Instruct/>
        <Footer/>
    </>
  )
}

export default DonationPage