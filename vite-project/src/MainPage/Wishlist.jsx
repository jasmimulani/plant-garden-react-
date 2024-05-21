import React from 'react'
import { Container } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { removeTocart } from '../ProductData/Redux/Action';

const Wishlist = () => {

   const wishlistData = useSelector((state) => state.reducer)
  //  const amount = wishlistData.length && wishlistData.map((item) => item.d_price).reduce((prev, next) => prev + next)
  return (
    <div className='bg-gradient-to-1 from-[#e8f3fc] to-[#f8fafc]'>
       <Container>
        <div className='py-[150px] mx-[60px]'>
          <div className='mb-[50px] shadow-xl shadow-gray-600'>
            <p className='py-[18px] bg-white text-[18px] px-[25px]'>Your Wishlist is currently empty.</p>
          </div>
          <button className='hover:-translate-y-[10px] duration-300 ease-in-out'><a href="" className='text-white py-[13px] px-[30px] bg-black text-[17px] '>Return To Shop</a></button>
        </div>
        <div className="flex container mx-auto justify-between max-xl:block">
          <div className="w-[65%] text-center table-fix bg-white mx-auto max-xl:w-[100%] p-[20px]">
            <div>
              <div className="flex row justify-between pb-[20px] pt-[30px] px-[20px]">
                <div className="col-6 font-normal">Products</div>
                <div className="col-2 font-normal">Price</div>
                <div className="col-2 font-normal">Quantity</div>
                <div className="col-2 font-normal">Total</div>
              </div>
            </div>
            <hr />
            {wishlistData.map((item) =>{
              return(
               <div key={item.id}>
               <div className="flex justify-betweenpt-[30px] items-center py-[30px] ">
                      <div className="flex col-6 items-center pl-[20px]">
                        <button  onClick={() => dispatch(removeTocart(item))}>remove</button>
                        <img
                          className="h-32  w-32 col-6"
                          src={item.img}
                          alt=""
                        />
                        <div className="col-6">{item.name}</div>
                      </div>
                      <div className="col-2">{item.price}</div>
                      <div className="col-2 items-center flex justify-center">
                        <div className="border-1 border-black py-[10px] w-[80%] ">
                          <button className="mx-[7px]"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-minus"><line x1="5" y1="12" x2="19" y2="12"></line></svg></button>
                          {/* <button className="mx-[7px]">{quantity}</button> */}
                          <button className="mx-[7px]"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-plus"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg></button>
                        </div>
                      </div>
                      <div className="col-2">123</div>
                      {/* <button className='bg-red-300'>{amount}</button> */}
                    </div>
                    <hr />
               </div>
              )
             })}
          </div>
        </div>
     </Container>
    </div>
  )
}

export default Wishlist
