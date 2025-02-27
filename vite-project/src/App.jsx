import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import MainNav from './Components/MainNav'
import AllCompo from './MainPage/AllCompo'
import OneProduct from './MainPage/OneProduct'
import ShopNow from './MainPage/ShopNow'
import FourProduct from './MainPage/FourProduct'
import Wishlist from './MainPage/Wishlist'
import Cart from './MainPage/Cart'
import BlogThree from './MainPage/BlogThree'
import Contact2 from './MainPage/Contact2'
import CheckOut from './MainPage/CheckOut'
import Success from './MainPage/Success'
import Error from './MainPage/Error'
import Login from './MainPage/Login'
import Signup from './MainPage/Signup'

function Layout({ children }) {
  const location = useLocation()
  const hideFooterAndMainNav = ['/login', '/signup'].includes(location.pathname) //hide footer or mainnav in login signup page
  return (
    <>
      <Navbar />
      {!hideFooterAndMainNav && <MainNav />} 
      {children}
      {!hideFooterAndMainNav && <Footer />} 
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route path='/' element={<AllCompo />} />
          <Route path='/StyleOne' element={<OneProduct />} />
          <Route path='/StyleFour' element={<FourProduct />} />
          <Route path='/WishList' element={<Wishlist />} />
          <Route path='/Cart' element={<Cart />} />
          <Route path='/ShopNow' element={<ShopNow />} />
          <Route path='/BlogThree' element={<BlogThree />} />
          <Route path='/Contact' element={<Contact2 />} />
          <Route path='/CheckOut' element={<CheckOut />} />
          <Route path='/payment' element={<Success />} />
          <Route path='/*' element={<Error />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App


