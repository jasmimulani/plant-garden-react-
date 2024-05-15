import React from 'react'
import { Container } from 'react-bootstrap'

const Wishlist1 = () => {
  return (
    <div>
       <Container>
        <div className='py-[150px]'>
          <div className='mb-[50px] shadow-xl'>
            <p className='py-[18px] bg-white text-[18px] px-[25px]'>Your Wishlist is currently empty.</p>
          </div>
          <button className='hover:-translate-y-[10px] duration-300 ease-in-out'><a href="" className='text-white py-[13px] px-[30px] bg-black text-[17px] '>Return To Shop</a></button>
        </div>
      </Container>
    </div>
  )
}

export default Wishlist1
