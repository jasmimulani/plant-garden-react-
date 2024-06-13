import React, { useEffect } from 'react'
import Container from 'react-bootstrap/esm/Container'
import heart from '../assets/heart.svg'
import Cart from '../assets/Cart.svg'
import Eyes from '../assets/Eyes.svg'
import { useDispatch, useSelector } from 'react-redux'
import { productData } from '../ProductData/ProdutRedux/ProductAction'
import { addTocart, addwishlist } from '../ProductData/Redux/Action'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const NewArrivals = () => {
    const dispatch = useDispatch()
    const data = useSelector((state) => state.productReducer);

      const CartData = (item) =>{
        dispatch(addTocart(item));
        toast.success("add  To cart successfull ",{
            position:"bottom-left",
             theme:"dark"
          });
      }

        const wishlistData =(item) =>{
            dispatch(addwishlist(item));
            toast.success("add wishlist successfull ",{
                position:"bottom-left",
                 theme:"dark"
              });

        }

    useEffect(() => {
        dispatch(productData())
    }, [])
    return (
        <div className='continer flex justify-center py-[50px] max-xl:p-0'>
            <Container>
                <div className='flex justify-start'>
                    <div>
                        <h1 className='text-[42px] font-normal max-md:text-[30px]'>New arrivals</h1>
                    </div>
                </div>
                <section className='max-md:block max-md:w-[100%] max-md:p-0 my-[30px] '>
                    <div className='flex  row justify-between max-2xl:flex-wrap m-auto col-xs-block'>
                        { data.flat().slice(6, 11).map((item) => {
                                return (
                                    <>
                                        <div className='col-6 col-lg-3 relative' key={item.id}>
                                            <div className='absolute right-5 top-3  max-md:hidden'>
                                                <span className='text-white bg-black px-2 '>{item.discount}</span>
                                            </div>

                                            <div className='relative primary-img'>
                                                <div className='overflow-hidden relative'>
                                                    <img decoding="async" loading="lazy" alt="custom-image" src={item.img} />
                                                </div>
                                                <div className='absolute left-0 top-0 shop-icon'>
                                                    <div className='p-4'>
                                                        <div className='p-[12px] bg-white rounded-full m-2 flex justify-center icon-1'>
                                                            <button onClick={() => wishlistData(item)}>
                                                                <img src={heart} alt="" height={16} width={16} />
                                                            </button>
                                                        </div>
                                                        <div className='p-[12px] bg-white rounded-full m-2 flex justify-center icon-1'>
                                                            <button>
                                                                <img src={Eyes} alt="" height={16} width={16} />
                                                            </button>
                                                        </div>
                                                        <div className='p-[12px] flex justify-center bg-white m-2  rounded-full icon-1'>
                                                            <button onClick={() => CartData(item)}>
                                                                <img src={Cart} alt="" height={8} width={12} />
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='text-center leading-10 px-[12px] py-[23px] max-md:px-0 max-sm:py-[15px]'>
                                                <h5>{item.name}</h5>
                                                <p className='text-muted '>
                                                    <del className='pr-[8px]'>${item.d_price}</del>
                                                    <span>${item.price}</span>
                                                </p>
                                            </div>
                                        </div>
                                    </>
                                )
                            })
                        }

                    </div>

                </section>

            </Container>
            <ToastContainer/>
        </div>
    )
}

export default NewArrivals
