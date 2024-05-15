import React from 'react'
import { Container } from 'react-bootstrap'
import { useSelector } from 'react-redux'

const Cart = () => {

  const CartData = useSelector((state) => state.reducer)
  const amount = CartData.length && CartData.map((item) => item.d_price) .reduce((prev , next)=> prev+next)
  
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
        <h1 className="flex justify-center text-3xl font-bold">Shipping Cart</h1>
      <div className="flex container mx-auto justify-around">
        <table className="w-[800px] text-center mt-[20px] table-fix ">
        <thead>
          <tr className="">
            <th className="border-2 border-black">Item Image</th>
            <th className="border-2 border-black">Item Name</th>
            <th className="border-2 border-black">item Price</th>
          </tr>
        </thead>
          {CartData.map((item) => {
            return (
              <tbody key={item.id}>
                <tr>
                  <td className="border-2 border-black ">
                    <img className="h-28 mx-auto" src={item.img} alt="" />
                  </td>
                  <td className="border-2 border-black font-bold">{item.name}</td>
                  <td className="border-2 border-black ">{item.d_price}</td>
                </tr>
              </tbody>
            );
          })}
        </table>
        <div>
          <table className="mt-20 border-2 border-black">
          <thead>
            <tr className="border-2 border-black">
              <th>Total Price</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-2 border-black">
              <td>{amount}</td>
            </tr>
          </tbody>
          </table>
        </div>
      </div>
       </Container>
    </div>
  )
}

export default Cart
