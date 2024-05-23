import React from 'react'
import { Container } from 'react-bootstrap'
import { useSelector , useDispatch} from 'react-redux'
import { addTocart, removewishlist } from '../ProductData/Redux/Action';
import { NavLink } from 'react-router-dom';

const Wishlist = () => {

  const wishlist = useSelector((state) => state.Wishlist_Reducer)
   const dispatch = useDispatch();


       
  return (
    <div className="bg-gradient-to-l from-[#e8f3fc]  to-[#f8fafc]">
      <Container>
        <div className="py-[150px] mx-[60px]">
          <div className="mb-[50px] shadow-2xl shodow-gray-700">
            <p className="py-[18px] bg-white text-[18px] px-[25px]">
              Your Wishlist is currently empty.
            </p>
          </div>
          <NavLink to='/ShopNow'>
          <button className="hover:-translate-y-[10px] duration-300 ease-in-out">
            <a
              href=""
              className="text-white py-[13px] px-[30px] bg-black text-[17px] "
            >
              Return To Shop
            </a>
          </button>
          </NavLink>
        </div>
        <div className="flex container mx-auto justify-between max-xl:block">
          <div className="w-[65%] text-center table-fix bg-white mx-auto max-xl:w-[100%] p-[20px]">
            <div>
              <div className="flex row justify-between pb-[20px] pt-[30px] px-[20px]">
                <div className="col-6 font-normal">Product Name</div>
                <div className="col-2 font-normal ">Unit Price</div>
                <div className="col-2 font-normal">Date Added</div>
                <div className="col-2 font-normal">Stock Status</div>
              </div>
            </div>
            <hr />
            {wishlist.map((item) => {
              return (
                <div key={item.id}>
                  <div className='flex justify-between pt-[30px] items-center py-[30px] text-gray-500'>
                    <div className='flex col-4 items-center pl-[20px]'>
                      <button onClick={() => dispatch(removewishlist (item.id))} className='btn btn-denger btn-sm'> Remove </button>
                      <img className='h-24 w-24 col-2' src={item.img} alt="" />
                      <div className='col-6'>{item.name} </div>
                    </div>
                    <div className='col-2'>
                      <span>{item.d_price}</span>
                    </div>
                  
                    <div className=" col-2 hover:-translate-y-[10px] duration-300 ease-in-out">
                      <button className="text-white py-[10px] px-[10px] bg-black text-[17px]" onClick={() => dispatch(addTocart(item))}>
                        Add To Cart
                      </button>
                    </div>
                  </div>
                    <hr />
                </div>
              )
            })}
          </div>
        </div>
      </Container>
    </div>
  );
};


export default Wishlist
