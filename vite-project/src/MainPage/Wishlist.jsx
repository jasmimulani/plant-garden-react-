import React from 'react'
import { Container } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { addTocart, removewishlist, emptywishlist} from '../ProductData/Redux/Action';
import { NavLink } from 'react-router-dom';

const Wishlist = () => {

  const dispatch = useDispatch();


  const wishlist = useSelector((state) => state.Wishlist_Reducer)

  let date = new Date()

  const Removelist = (item) => {
    dispatch(removewishlist(item.id))
  }
  const ADDcart = (item) => {
    dispatch(addTocart(item))
    dispatch(removewishlist(item.id))
  }

  return (
    <div className="bg-gradient-to-l from-[#e8f3fc]  to-[#f8fafc] py-[70px]">
      <Container>
        {wishlist.length === 0 && (
          <div className="py-[150px] mx-[60px]">
            <div className="mb-[50px] shadow-2xl shodow-gray-700">
              <p className="py-[18px] bg-white text-[18px] px-[25px]">
                Your Wishlist is currently empty.
              </p>
            </div>
            <NavLink to='/ShopNow'>
              <button className="hover:-translate-y-[10px] duration-300 ease-in-out">
                <a href=""
                  className="text-white py-[13px] px-[30px] bg-black text-[17px] "  >
                  Return To Shop
                </a>
              </button>
            </NavLink>

          </div>
        )}
        <div className="flex container mx-auto justify-between max-xl:block">
          <div className="w-[100%] text-center table-fix bg-white mx-auto p-[20px]">
            <hr />
            <div>
              <div className="flex justify-between pb-[20px] pt-[20px] px-[20px] max-md:justify-center">
                <div className="col-4 font-medium max-md:w-[100%]">Products Name</div>
                <div className="col-3 font-medium max-md:hidden  ">Unit Price</div>
                <div className="Col-2 font-medium max-md:hidden">Date Added</div>
                <div className="col-3 font-medium max-md:hidden"></div>
              </div>
            </div>
            <hr />
            {wishlist.map((item) => {
              return (
                // <div key={item.id}>
                //   <div className='flex justify-between pt-[30px] items-center py-[30px] text-gray-500'>
                //     <div className='flex col-4 items-center pl-[20px]'>
                //       <button onClick={() => Removelist(item)} className='btn btn-denger btn-sm'> Remove </button>
                //       <img className='h-24 w-24 col-2' src={item.img} alt="" />
                //       <div className='col-6'>{item.name} </div>
                //     </div>
                //     <div className='col-2'>
                //       <span>{item.d_price}</span>
                //     </div>
                //     <p className='text-[#666666] text-[16px]'>{date.toDateString()}</p>
                //     <div className=" col-2 hover:-translate-y-[10px] duration-300 ease-in-out">
                //       <button className="text-white py-[10px] px-[10px] bg-black text-[17px]" onClick={() => ADDcart(item)} >
                //         Add To Cart
                //       </button>
                //     </div>
                //   </div>
                //   <hr />
                // </div>
                <div key={item.id}>
                  <div className="flex justify-between items-center py-[20px] text-gray-500 max-md:block max-md:leading-10">

                    <div className="flex col-4 pl-[15px] max-lg:p-0 max-md:block max-md:w-auto max-md:leading-10 items-center">
                      <button onClick={() => Removelist(item)} className="flex max-md:justify-start max-md:px-[8px] max-md:pb-[15px]">
                        Remove
                      </button>
                      <img className="h-28  w-28 col-2 ml-[15px] max-lg:h-20 max-lg:w-20 max-md:m-0" src={item.img} alt="" />
                      <div className="col-6 max-md:w-auto flex max-md:justify-start ml-[10px] max-md:m-0 text-wrap">{item.name}</div>
                    </div>

                    <div className="col-3 flex text-wrap justify-center max-md:w-auto max-md:justify-start">
                      <del className="pr-[12px]">{item.d_price}</del>
                      <span>{item.price}-20%</span>
                    </div>

                    <div className="col-2 items-center flex justify-center text-wrap max-md:w-auto max-md:justify-start">
                      {date.toDateString()}
                    </div>

                    <button className=" col-3 hover:-translate-y-[10px] duration-300 ease-in-out max-md:w-[100%] flex justify-center text-white py-[12px] px-[30px] bg-black text-[17px]  max-lg:py-[5px] checkout hover:border-2 hover:border-black" onClick={() => ADDcart(item)}>
                      Add To Cart
                    </button>

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
