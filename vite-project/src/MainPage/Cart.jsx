import React from 'react'
import { Container } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { removeTocart} from '../ProductData/Redux/Action'
import { increment } from '../ProductData/Redux/Action'
import { decrement } from '../ProductData/Redux/Action'
import { NavLink } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Cart = () => {


  const CartData = useSelector((state) => state.reducer);

  const dispatch = useDispatch();


  const totalamount = CartData.reduce((total, item) => total + (item.price * item.quntity), 0);

  const finalamount = totalamount +10

  const ShippingRate = 1500-finalamount


  const RemovetoCart = (item) =>{
    dispatch(removeTocart(item.id)),
    toast.success("Remove Cart successfull ",{
      position:"bottom-left",
       theme:"dark"
    });
  }
  
  return (
    <>
      <div className="bg-gradient-to-l from-[#e8f3fc]  to-[#f8fafc]">
        <Container className="py-[50px]">
          {CartData.length === 0 &&(
            <div className="py-[150px] mx-[60px]">
              <div className="mb-[50px] shadow-2xl shodow-gray-700">
                <p className="py-[15px] bg-white text-[18px] px-[25px]">
                  Your Cart is currently empty.
                </p>
              </div>
              <button className="hover:-translate-y-[10px] duration-300 ease-in-out">
                <NavLink to='/ShopNow'
                  className="text-white py-[13px] px-[30px] bg-black text-[17px] " >
                  Return To Shop
                </NavLink>
              </button>
            </div>)}

           {
            CartData.length >= 1 &&(
          <div className="flex container mx-auto justify-between max-xl:block">
            <div className="w-[65%] text-center bg-white mx-auto max-xl:w-[100%] p-[20px] shadow-2xl shodow-gray-700">

            <div className="mb-[20px]">
            <div className="border-2 border-dashed border-[#e9e9e9] p-[20px] text-start">
                <p>Buy <span className="text-red-500">${ShippingRate}</span> more for get <span className="font-semibold">Free Shipping!!</span></p>
            </div>
            </div>
              <div>
                <div className="flex row justify-between pb-[20px] pt-[30px] px-[20px] max-md:hidden">
                  <div className="col-6 font-normal">Products</div>
                  <div className="col-2 font-normal">Price</div>
                  <div className="col-2 font-normal">Quantity</div>
                  <div className="col-2 font-normal">Total</div>
                </div>
              </div>
              <hr />
              {CartData.flat().map((item) => {
                return (
                  <div key={item.id}>
                    <div className="flex justify-betweenpt-[30px] items-center py-[30px] max-md:block max-md:leading-10">
                      <div className="flex col-6 items-center pl-[20px] max-md:p-0 max-md:block max-md:w-auto max-md:leading-10">
                        <button onClick={() =>RemovetoCart(item)} className="flex max-md:justify-start max-md:px-[8px] max-md:pb-[15px]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-x-circle"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>
                        </button>
                        <img
                          className="h-32 w-32 col-6 ml-[20px]  max-md:w-auto flex max-md:justify-start  max-md:m-0"
                          src={item.img}
                          alt="" />
                        <div className="col-6 max-md:w-auto flex max-md:justify-start ml-[20px] max-md:m-0">{item.name}</div>
                      </div>
                      <div className="col-2 max-md:w-auto max-md:justify-start justify-center flex">${item.price}</div>
                      <div className="col-2 items-center flex justify-center max-md:justify-start max-md:w-auto">
                        <div className="border-1 border-black py-[8px] px-[10px] max-md:py-0">
                          <button onClick={() => dispatch(decrement(item.id))} className='mx-[7px]'>-</button>
                          <button className="mx-[7px]">{item.quntity}</button>
                        
                          <button onClick={() => dispatch(increment(item.id))} className='mx-[7px]'>+</button>
                        </div>
                      </div>
                      <div className="col-2 max-md:w-auto max-md:justify-start flex justify-center">${item.price * item.quntity}</div>
                    </div>
                    <hr />
                  </div>
                );
              })
              }
              <div className="flex justify-start py-[15px] ">
                <input type="number" className="border-1 border-[#d3ced2] px-[10px]" placeholder="coupon Code" />
                <button className="bg-black py-[11px] px-[33px] border-black border-1 text-white checkout" type="submit">Apply Coupon</button>
              </div>
            </div>

            <div className="w-[30%] bg-white max-xl:w-[100%] mx-auto max-xl:mt-[30px] shadow-2xl shodow-gray-700">
              <div className="p-[25px]">
                <h4 className="my-[8px] text-[14px]">Cart Totals</h4>
                <hr />
                <div className="flex justify-between mt-[30px] mb-[20px]">
                  <span>Subtotal</span>
                  <span>${totalamount}</span>
                </div>
                <hr />
                <div className="leading-10 my-[15px]">
                  <h1>Shipping</h1>
                  <div className="flex justify-between">
                    <span>Flat Rate:</span>
                    <span>$10.00</span>
                  </div>
                  <div>
                    Shipping to <span className="font-bold">CA</span>
                  </div>
                  <h4>Change address </h4>
                </div>
                <hr />
                <div className="flex justify-between my-[25px]">
                  <span>Total:</span>
                  <span>${finalamount}</span>
                </div>
                <NavLink to='/checkout'>
                <div className="w-full py-[15px] text-center border-2 border-black hover:-translate-y-[15px] duration-300 ease-in-out bg-black text-white checkout">
                  <button>Proceed To Checkout</button>
                </div>
              </NavLink>
              </div>
            </div>
          </div> )
           }
        </Container>
        <ToastContainer/>
      </div>
    </>
  );
}
export default Cart
