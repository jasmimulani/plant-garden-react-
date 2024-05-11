import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
import MainNav from '../Components/Navbar/MainNav'
import S_Categories from '../Components/Homepage/S_Categories'
import Header_parts from '../Components/Homepage/Header_parts'
import Interior from '../Components/Homepage/Interior'
import FreeShiping from '../Components/Homepage/FreeShiping'
import NewArrivals from '../Components/Homepage/NewArrivals'
import GardningTools from '../Components/Homepage/GardningTools'



const AllCompo = () => {
  return (
    <div>
      <Navbar />
      <MainNav />
      <Header_parts />
      <S_Categories />
      <Interior />
      <FreeShiping />
      <GardningTools />
      <NewArrivals />
      <Footer />
     



    </div>
  )
}

export default AllCompo
