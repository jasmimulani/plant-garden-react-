import './App.css'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import AllCompo from'./MainPage/AllCompo'
import OneProduct from'./MainPage/OneProduct'
import ShopNow from'./MainPage/ShopNow'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import FourProduct from './MainPage/FourProduct'   
import Wishlist from './MainPage/Wishlist'
import Cart from './MainPage/Cart'
import BlogThree from './MainPage/BlogThree'
import Contact2 from './MainPage/Contact2'
import MainNav from'./Components/MainNav'
import CheckOut from './MainPage/CheckOut'
import Error from './MainPage/Error'
import Success from './MainPage/Success'
// import loginrender from'./MainPage/loginrender'
import Login from './MainPage/Login'
import Signup from './MainPage/Signup'





function App() {
 
 

  return (
    <>
       <BrowserRouter>
    <Navbar/>
    <MainNav/>
        <Routes> 
          <Route path='/Signup' element={<Signup/>}></Route>
          <Route path='/login' element={ <Login/>}></Route>
          <Route path='/' element={<AllCompo/>}/>
          <Route path='/StyleOne' element={<OneProduct/>}/>
          <Route path='/StyleFour' element={<FourProduct/>}/>
           <Route path='/WishList' element={<Wishlist/>}/>
          <Route path='/Cart' element={<Cart/>}/>
           <Route path='/ShopNow' element={<ShopNow/>}/>
          {/* </Route> */}
           <Route path='/BlogThree' element={<BlogThree/>}/>
           <Route path='/Contact' element={<Contact2/>}/>
           <Route path='/ChekOut' element={<CheckOut/>}/>
           <Route path='/payment' element={<Success/>}/>
           <Route path='/*' element={<Error/>}/>
        
        </Routes>
        </BrowserRouter> 
       <Footer/>   

           
    </>
  )
}

export default App
