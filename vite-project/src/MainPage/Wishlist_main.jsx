import React from 'react'
import Wishlist from '../Components/Wishlist/Wishlist nav'
import Wishlist1 from '../Components/Wishlist/Wishlist1'
import Wishfooter from '../Components/Wishlist/Wishfooter'
import MainNav from'../Components/Navbar/MainNav'

const Wishlist_main = () => {
  return (
    <div>
    <Wishlist/>
    <div className='bg-gradient-to-l from-[#e8f3fc] to-[#f8fafc]'>
    <MainNav/>
    <Wishlist1/>
    </div>
    <Wishfooter/>
    </div>
  )
}

export default Wishlist_main

