import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Login from './Login'
import Signup from './Signup'



const loginrender = () => {
  return (
    <>
       <BrowserRouter>
       <Routes>
       <Route path='/Signup' element={<Signup/>}></Route>
       <Route path='/login' element={ <Login/>}></Route>       
       </Routes>
       </BrowserRouter>
    </>
  )
}

export default loginrender
