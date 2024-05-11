import React from 'react'
import { Container } from 'react-bootstrap'

const Cart = () => {
  return (
    <div className='bg-gradiant-to-1 from-[#e8f3fc] to-[#f8fafc]'>
       <Container>
        <div className='py-[150px]'>
            <div className='mb-[50px] shadow-xl'>
                <p className='py-[18px] bg-white text-[18px] px-[25px]'>
                  Your Cart is Currently empty.
                </p>
            </div>
            <button className='hover:-translate-y-[10px] duration-300 ease-in-out'><a href="" className='text-white py-[13px] px-[30px] bg-black text-[17px] '>Return To Shop</a></button>
        </div>  
       </Container>
    </div>
  )
}

export default Cart
