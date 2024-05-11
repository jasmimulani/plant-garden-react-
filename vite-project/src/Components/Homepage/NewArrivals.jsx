import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import heart from '../../assets/heart.svg'
import Cart from '../../assets/Cart.svg'
import Eyes from '../../assets/Eyes.svg'



const NewArrivals = () => {
    return (
        <div className='continer flex justify-center py-[50px] max-xl:p-0'>
            <Container>
                <div className='flex justify-start'>
                    <div>
                        <h1 className='text-[42px] font-normal max-md:text-[30px]'>New arrivals</h1>
                    </div>
                </div>

                <section className='max-md:block max-md:w-[100%] max-md:p-0 my-[30px] '>
                    <div className='flex row justify-between max-2xl:flex-wrap m-auto col-xs-block'>
                        <div className='col-6 col-lg-3 relative '>
                            <div className='absolute right-5  p-3 z-10'>
                                <span className='text-white bg-black px-2 '>-33%</span>
                            </div>
                            
                            <div className='p-[10%] absolute left-2 shop-icon z-10'>
                                    <div className='p-[7px] bg-white rounded-full mb-2 flex justify-center icon-1'>
                                        <a href="" className=''>
                                            <img src={heart} alt="" height={20} width={20} />

                                        </a>
                                    </div>
                                    <div className='p-[7px] bg-white rounded-full mb-2 flex justify-center icon-1'>
                                        <a href="">
                                            <img src={Eyes} alt="" height={20} width={20} />                </a>
                                    </div>
                                    <div className='p-[7px] flex justify-center bg-white rounded-full icon-1'>
                                        <a href="">
                                            <img src={Cart} alt="" height={12} width={16} />
                                        </a>
                                    </div>
                                </div>
                            <div className='overflow-hidden'>
                            <img decoding="async" loading="lazy" alt="custom-image" className="primary-img" src="https://emart.wpthemedemos.com/plant-garden/wp-content/uploads/sites/10/2022/12/Birds-Nest-Leslie-Fern.webp"/>
                            </div>
                            <div className='text-center leading-10 p-4 max-md:px-1'>
                                <h5>Bird's nest leslie</h5>
                                <p className='text-muted '>
                                    <del className='pr-[8px]'>$45</del>
                                    <span>$30</span>
                                </p>
                            </div>
                        </div>
                        <div className='col-6 col-lg-3 relative '>
                            <div className='absolute right-5  p-3 z-10'>
                                <span className='text-white bg-black px-2 '>-20%</span>
                            </div>
                            
                            <div className='p-[10%] absolute left-2 shop-icon z-10'>
                                    <div className='p-[7px] bg-white rounded-full mb-2 flex justify-center icon-1'>
                                        <a href="" className=''>
                                            <img src={heart} alt="" height={20} width={20} />

                                        </a>
                                    </div>
                                    <div className='p-[7px] bg-white rounded-full mb-2 flex justify-center icon-1'>
                                        <a href="">
                                            <img src={Eyes} alt="" height={20} width={20} />                </a>
                                    </div>
                                    <div className='p-[7px] flex justify-center bg-white rounded-full icon-1'>
                                        <a href="">
                                            <img src={Cart} alt="" height={12} width={16} />
                                        </a>
                                    </div>
                                </div>
                            <div className='overflow-hidden'>
                                <img decoding="async" alt="custom-image" className="primary-img" src="https://emart.wpthemedemos.com/plant-garden/wp-content/uploads/sites/10/2022/12/Monstera.webp" />
                            </div>
                            <div className='text-center leading-10 p-4 max-md:p-1'>
                                <h5>Monstera plant</h5>
                                <p className='text-muted '>
                                    <del className='pr-[8px]'>$60</del>
                                    <span>$48</span>
                                </p>
                            </div>
                        </div>
                        <div className='col-6 col-lg-3 relative '>
                            <div className='absolute right-5  p-3 z-10'>
                                <span className='text-white bg-black px-2 '>-20%</span>
                            </div>
                            
                            <div className='p-[10%] absolute left-2 shop-icon z-10'>
                                    <div className='p-[7px] bg-white rounded-full mb-2 flex justify-center icon-1'>
                                        <a href="" className=''>
                                            <img src={heart} alt="" height={20} width={20} />

                                        </a>
                                    </div>
                                    <div className='p-[7px] bg-white rounded-full mb-2 flex justify-center icon-1'>
                                        <a href="">
                                            <img src={Eyes} alt="" height={20} width={20} />                </a>
                                    </div>
                                    <div className='p-[7px] flex justify-center bg-white rounded-full icon-1'>
                                        <a href="">
                                            <img src={Cart} alt="" height={12} width={16} />
                                        </a>
                                    </div>
                                </div>
                            <div className='overflow-hidden'>
                                <img decoding="async" alt="custom-image" className="primary-img" src="https://emart.wpthemedemos.com/plant-garden/wp-content/uploads/sites/10/2022/12/Haworthia.webp" />
                            </div>
                            <div className='text-center leading-10 p-4 max-md:p-1'>
                                <h5>Haworthia</h5>
                                <p className='text-muted '>
                                    <del className='pr-[8px]'>$87</del>
                                    <span>$70</span>
                                </p>
                            </div>
                        </div>
                        <div className='col-6 col-lg-3 relative '>
                        <div className='p-[10%] absolute left-2 shop-icon z-10'>
                                    <div className='p-[7px] bg-white rounded-full mb-2 flex justify-center icon-1'>
                                        <a href="" className=''>
                                            <img src={heart} alt="" height={20} width={20} />

                                        </a>
                                    </div>
                                    <div className='p-[7px] bg-white rounded-full mb-2 flex justify-center icon-1'>
                                        <a href="">
                                            <img src={Eyes} alt="" height={20} width={20} />                </a>
                                    </div>
                                    <div className='p-[7px] flex justify-center bg-white rounded-full icon-1'>
                                        <a href="">
                                            <img src={Cart} alt="" height={12} width={16} />
                                        </a>
                                    </div>
                                </div>

                            <div className='overflow-hidden'>
                                <img decoding="async" alt="custom-image" className="primary-img" src="https://emart.wpthemedemos.com/plant-garden/wp-content/uploads/sites/10/2022/12/Monstera.webp" />
                            </div>
                            <div className='text-center leading-10 p-4 max-md:p-1'>
                                <h5>Monstera plant</h5>
                                <p className='text-muted '>
                                    <span>$60.00</span>
                                </p>
                            </div>
                        </div>
                        <div className='max-lg:justify-start max-lg:flex'>
                        <div className='col-6 col-lg-3 relative   '>
                            <div className='absolute right-5  p-3 z-10'>
                                <span className='text-white bg-black px-2 '>-21%</span>
                            </div>
                            
                            <div className='p-[10%] absolute left-2 shop-icon z-10'>
                                    <div className='p-[7px] bg-white rounded-full mb-2 flex justify-center icon-1'>
                                        <a href="" className=''>
                                            <img src={heart} alt="" height={20} width={20} />

                                        </a>
                                    </div>
                                    <div className='p-[7px] bg-white rounded-full mb-2 flex justify-center icon-1'>
                                        <a href="">
                                            <img src={Eyes} alt="" height={20} width={20} />                </a>
                                    </div>
                                    <div className='p-[7px] flex justify-center bg-white rounded-full icon-1'>
                                        <a href="">
                                            <img src={Cart} alt="" height={12} width={16} />
                                        </a>
                                    </div>
                                </div>
                            <div className='overflow-hidden'>
                            <img decoding="async" loading="lazy" alt="custom-image" className="primary-img" src="https://emart.wpthemedemos.com/plant-garden/wp-content/uploads/sites/10/2022/12/Birds-nest-fern-01.webp"/>
                            </div>
                            <div className='text-center leading-10 p-4 max-md:p-0'>
                                <h5>Bird's nest fera</h5>
                                <p className='text-muted '>
                                <del className='pr-[8px]'>$68</del>
                                    <span>$54</span>
                                </p>
                            </div>
                        </div>
                        </div>
                    </div>

                </section>
            </Container>
        </div>
    )
}

export default NewArrivals
