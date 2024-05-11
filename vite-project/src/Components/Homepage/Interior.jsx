import React from 'react'
import { Container } from 'react-bootstrap'
import heart from '../../assets/heart.svg'
import Cart from '../../assets/Cart.svg'
import Eyes from '../../assets/Eyes.svg'


const Interior = () => {
    return (
        <div className='container flex justify-center py-[50px] max-xl:p-0'>
            <Container>
                <div className=' flex justify-center'>
                    <div className='text-center'>
                        <h1 className='font-medium text-[42px] max-md:text-[30px]'>Best Interior Plants </h1>
                        <p className='pt-4 text-muted'>
                            Rectangle follower library hand ellips device strikethrough.
                        </p>
                    </div>
                </div>
                <section className='py-[50px] flex max-md:block max-sm:py-[30px] overflow-hidden'>
                    <section className='w-[43%] max-md:w-[100%] max-md:mb-[20px] interior-img '>
                        <img decoding='async' src='https://emart.wpthemedemos.com/plant-garden/wp-content/uploads/sites/10/2022/12/plant-gallery-left-img.webp' alt='plant-gallery-left-img' loading='lazy' className="hover:-ms-[15px] duration-300 ease-in-out" />
                    </section>
                    <section className='w-[57%] pl-4 max-md:block max-md:w-[100%] max-md:p-0'>
                        <div className='flex flex-wrap row'>

                            <div className='col-6 col-md-4 px-2 col-xs-6 relative'>
                                <div className='absolute right-2 p-2 z-10'>
                                    <span className='text-white bg-black px-2'>-20%</span>
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
                                    <img decoding='async' alt='custom-image' className="primary-img" src='https://emart.wpthemedemos.com/plant-garden/wp-content/uploads/sites/10/2022/12/Monstera.webp' />
                                </div>
                                <div className='text-center leading-10 p-4 max-md:p-1 text-xl'>
                                    <h1>Momstera Plant</h1>
                                    <p className='text-muted '>
                                        <del className='pr-[8px]'>$60</del>
                                        <span>$48</span>
                                    </p>
                                </div>
                            </div>
                            <div className='col-6 col-md-4 px-2 col-xs-6 relative'>
                                <div className='absolute right-2 p-2 z-10'>
                                    <span className='text-white bg-black px-2'>-20%</span>
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
                                    <img decoding='async' alt='custom-image' className="primary-img" src='https://emart.wpthemedemos.com/plant-garden/wp-content/uploads/sites/10/2022/12/Haworthia.webp' />
                                </div>
                                <div className='text-center leading-10 p-4 max-md:p-1 text-xl'>
                                    <h1>Haworthia</h1>
                                    <p className='text-muted'>
                                        <del className='pr-[8px]'>$87</del>
                                        <span>$70</span>
                                    </p>
                                </div>
                            </div>
                            <div className='col-6 col-md-4 px-2 col-xs-6 relative'>
                                <div className='absolute right-2 p-2 z-10'>
                                    <span className='text-white bg-black px-2'>-21%</span>
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
                                    <img decoding='async' alt='custom-image' className="primary-img" src='https://emart.wpthemedemos.com/plant-garden/wp-content/uploads/sites/10/2022/12/Birds-nest-fern-01.webp' />
                                </div>
                                <div className='text-center leading-10 p-4 max-md:p-1 text-xl'>
                                    <h1>Bird's nest fern</h1>
                                    <p className='text-muted'>
                                        <del className='pr-[8px]'>$68</del>
                                        <span>$54</span>
                                    </p>
                                </div>
                            </div>
                            <div className='col-6 col-md-4 px-2 col-xs-6 relative'>
                                <div className='absolute right-2 p-2 z-10'>
                                    <span className='text-white bg-black px-2'>-11%</span>
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
                                    <img decoding='async' alt='custom-image' className="primary-img" src='https://emart.wpthemedemos.com/plant-garden/wp-content/uploads/sites/10/2022/12/peace-lily-02.webp' />
                                </div>
                                <div className='text-center leading-10 p-4 max-md:p-1 text-xl'>
                                    <h1>Peace lily</h1>
                                    <p className='text-muted'>
                                        <del className='pr-[8px]'>$72</del>
                                        <span>$64</span>
                                    </p>
                                </div>
                            </div>
                            <div className='col-6 col-md-4 px-2 col-xs-6 relative'>
                                
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
                                    <img decoding='async' alt='custom-image' className="primary-img" src='https://emart.wpthemedemos.com/plant-garden/wp-content/uploads/sites/10/2022/12/barrel-cactus-01.webp' />
                                </div>
                                <div className='text-center leading-10 p-4 max-md:p-1 text-xl'>
                                    <h1>Barrel cactus</h1>
                                    <p className='text-muted '>
                                        <span>$67.00</span>
                                    </p>
                                </div>
                            </div>
                            <div className='col-6 col-md-4 px-2 col-xs-6 relative'>
                                <div className='absolute right-2 p-2 z-10'>
                                    <span className='text-white bg-black px-2'>-26%</span>
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
                                    <img decoding='async' alt='custom-image' className="primary-img" src='https://emart.wpthemedemos.com/plant-garden/wp-content/uploads/sites/10/2022/12/Snake-Plant.webp' />
                                </div>
                                <div className='text-center leading-10 p-4 max-md:p-1 text-xl'>
                                    <h1>Snake Plant</h1>
                                    <p className='text-muted '>
                                        <del className='pr-[8px]'>$60</del>
                                        <span>$48</span>

                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                </section>

            </Container>
        </div>
    )
}

export default Interior
