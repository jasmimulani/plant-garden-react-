import React, { useCallback } from 'react'
import { Container } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import axios from 'axios'

const Cart = () => {
  const [quantity, setQuantity] = useState(1)
  const handleDecrement = () => {
    if(quantity > 1){
      setQuantity(prevCount => prevCount -1)
    } 
  }     
  const handleIncrement = () => {
      setQuantity(prevCount => prevCount +1)
    
  }
 const deletecartitem = (e,cart_id) => {
  e.preventDefault();
  console.log(cart_id);
 }

  // const thisCliced = e.currentTarget;
  // thisCliced.innerText ='removing';

  // axios.delete(`/api/delete.cartitem/${cart_id}`).then(res =>{
  //     if(res.data.status === 200)
  //       {
  //               console.warn('success'.res.data.message,'success');
  //               thisCliced.closest('tr').remove();
  //     }
  //     else if(res.data.status ===404)
  //       {
  //         console.warn('error'.res.data.message,'error');
  //         thisCliced.innerText='remove'

  //     }
  // })

//  }
  const CartData = useSelector((state) => state.reducer)
  const amount = CartData.length && CartData.map((item) => item.d_price).reduce((prev, next) => prev + next)
  return (
    <div className=' bg-gradient-to-1 from-[#e8f3fc] to-[#f8fafc]'>
      <Container className='py-[50px]'>
        <div className='py-[150px]'>
          <div className='mb-[50px] shadow-xl'>
            <p className='py-[18px] bg-white text-[18px] px-[25px]'>
              Your Cart is Currently empty.
            </p>
          </div>
          <button className='hover:-translate-y-[10px] duration-300 ease-in-out'><a href="" className='text-white py-[13px] px-[30px] bg-black text-[17px] '>Return To Shop
          </a>
          </button>
        </div>
        <div className='flex container mx-auto justify-between max-xl:block'>
          <div className='w-[65%] text-center bg-white m-auto max-xl:w-[100%] p-[20px]'>
            <div>
              <div className='flex row justify-between pb-[20px] pt-[30px] px-[20px]'>
                <div className="col-6 font-normal">Products</div>
                <div className="col-2 font-normal">Price</div>
                <div className="col-2 font-normal">Quantity</div>
                <div className="col-2 font-normal">Total</div>
              </div>
            </div>
            <hr />
            {CartData.map((item) => {
              return (
                <div key={item.id}>
                  <div className="flex justify-betweenpt-[30px] items-center py-[30px] ">
                    <div className="flex col-6 items-center pl-[20px]">
                      <img
                        className="h-32  w-32 col-6"
                        src={item.img}
                        alt="" />
                      <div className="col-6">{item.name}</div>
                    </div>
                    <div className="col-2">{item.d_price}</div>
                    <div className="col-2  border-1 border-black py-[10px] items-center">
                      <button onClick={handleDecrement} className="mx-[10px]"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-minus"><line x1="5" y1="12" x2="19" y2="12"></line></svg></button>
                      <button className="mx-[10px]">{quantity}</button>
                      <button onClick={handleIncrement} className="mx-[10px]"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-plus"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg></button>
                    </div>
                    <div className="col-2">$123</div>
                    <button  onClick={(e) => deletecartitem (e,item.id)}
                    className='btn brtn-denger btn-sm'>Remove</button>
                  </div>
                  <hr />
                </div> 
              )
            })}
          </div>
          <div className='w-[30%] bg-white max-xl:w-[100%] max-xl:mt-[30px]'>
            <div className='p-[25px]'>
              <h4 className='my-[8px]'>Cart Total is</h4>
              <hr />
              <div className='flex justify-between mt-[30px] mb-[20px]'>
                <span>Subtotal</span>
                <span>{amount}</span>
              </div>
              <hr />
              <div className='leading-10 my-[15px]'>
                <h1>Shiping</h1>
                <div className="flex justify-between">
                  <span>Flat Rate:</span>
                  <span></span>
                </div>
                <div>
                  Shipping to <span className="font-bold">CA</span>
                </div>
                <h4>Change address </h4>
              </div>
              <hr />
              <div className="flex justify-between my-[25px]">
                <span>Total:</span>
                <span>{amount}</span>
              </div>
              <div className="w-full py-[15px] text-center border-2 border-black hover:-translate-y-[15px] duration-300 ease-in-out bg-black text-white checkout">
                <button>Proceed To Checkout</button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}
export default Cart
