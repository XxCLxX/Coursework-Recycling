import React, {useState} from 'react'
import Navbar from '../components/MainHomepage/Navbar'
import Sidebar from '../components/MainHomepage/Sidebar'
import MainHomeSection from '../components/MainHomepage/MainHomeSection'
import InfoSection from '../components/MainHomepage/InfoSection'
import { homeObjOne, homeObjTwo, homeObjThree } from '../components/MainHomepage/InfoSection/Data'
import Services from '../components/MainHomepage/Services'
import Footer from '../components/Footer'

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

  return (
    <>
    <Sidebar isOpen={isOpen} toggle={toggle}/>
    <Navbar toggle={toggle} />
    <MainHomeSection/>
    <InfoSection {...homeObjOne}/>
    <InfoSection {...homeObjTwo}/>
    <Services/>
    <InfoSection {...homeObjThree}/>
    <Footer/>
    </>
  )
}

export default Home