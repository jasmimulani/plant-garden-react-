import React from 'react'
import AllCompo from'./MainPage/AllCompo'
import OneProduct from'./MainPage/OneProduct'
import ShopNow from'./MainPage/ShopNow'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import FourProduct from './MainPage/FourProduct'   
import Wishlist from './MainPage/Wishlist'
import Cart from './MainPage/Cart'
import BlogThree from './MainPage/BlogThree'
import Contact2 from './MainPage/Contact2'


const Leyout = () => {
    return (
        <>
        
         <BrowserRouter>
        <Routes> 
          <Route path='/' element={<AllCompo/>}/>
          <Route path='/StyleOne' element={<OneProduct/>}/>
          <Route path='/StyleFour' element={<FourProduct/>}/>
           <Route path='/WishList' element={<Wishlist/>}/>
          <Route path='/Cart' element={<Cart/>}/>
           <Route path='/ShopNow' element={<ShopNow/>}/>
           <Route path='/BlogThree' element={<BlogThree/>}/>
           <Route path='/Contact' element={<Contact2/>}/>
        </Routes>
        </BrowserRouter>       
         </>

    )
}

export default Leyout


