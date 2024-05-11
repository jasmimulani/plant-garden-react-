import React from 'react'
import Cart_nav from '../Components/Cart/Cart_nav'
import Cart from '../Components/Cart/Cart'
import MainNav from'../Components/Navbar/MainNav'
import Contactfooter from '../Components/Contact2/Contactfooter'


const Cartmain = () => {
  return (
    <div>
    <Cart_nav/>
      <div className='bg-gradient-to-l from-[#e8f3fc] to-[#f8fafc]'>
       <MainNav />
    <Cart/>
    <Contactfooter/>
  
    
  
      </div>
    </div>
  )
}

export default Cartmain
