import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

function OffcanvasExample() {
  const result = useSelector((state) => state.reducer);
  console.warn("headrcalled",result);

  return (
    <>
      {['xl'].map((expand) => (
        <Navbar key={expand} expand={expand} className="mb-3">
          <Container fluid>
            <Navbar.Brand href="#" className='max-xl:order-2'>
              <img alt="logo" src="https://emart.wpthemedemos.com/plant-garden/wp-content/uploads/sites/10/2022/12/emart-011.webp" width="140" height="31" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="start"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>

                {/* demo  */}
                <Nav className="justify-content-center flex-grow-1 pe-3">
                  <NavDropdown
                    title={
                      <div className='flex justify-between items-center font-semibold'>
                        Demo<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg>
                      </div>
                    }
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <section className='flex max:xl:justify-center item-center max-xl:border-b-[1px]
                     w-screen'>
                      <div className='flex  max-xl:block py-[50px] max-xl:py-0 pl-[50px] justify-center'>

                        <div className='max-xl:hidden max-xl:ml-0'>
                          <div className='py-[50px] max-xl:p-0'>
                            <img src="https://emart.wpthemedemos.com/plant-garden/wp-content/uploads/sites/10/2023/01/Plant-and-garden-menu.webp" alt="" loading="lazy" />
                          </div>
                          <div>
                            <p className='text-[22px] pt-[10px] mb-[8px] pb-[4px]'>New Product on the Market</p>
                            <p className='text-muted text-[15px] font-bold text-muted add'>
                              <NavLink to='/ShopNow'>
                              Shop Now
                              </NavLink>
                              </p>
                          </div>
                        </div>

                        <div className='leading-8 max-xl:leading-6 py-[60px] pl-[120px] pr-2 max-xl:m-0 max-xl:my-0 gmax-xl:border-0 max-xl:p-0 max-xl:pl-0'>

                          <NavDropdown.Item href="#action3" className='text-muted py-[8px] text-[18px] animated-text'>
                            linFashion Hub
                            </NavDropdown.Item>



                          <NavDropdown.Item href="#action4" className='text-muted py-[8px] text-[18px] animated-text'>Kid's wear</NavDropdown.Item>
                          <NavDropdown.Item href="#action5" className='text-muted py-[8px] text-[18px] animated-text'>Women fashion</NavDropdown.Item>
                          <NavDropdown.Item href="#action5" className='text-muted py-[8px] text-[18px] animated-text'>Big fashion</NavDropdown.Item>
                          <NavDropdown.Item href="#action5" className='text-muted py-[8px] text-[18px] animated-text'>Handicraft</NavDropdown.Item>
                          <NavDropdown.Item href="#action5" className='text-muted py-[8px] text-[18px] animated-text'>Interior</NavDropdown.Item>
                        </div>

                        <div className='bg-[#c7c8cb] w-[1px] -mt-[23px] -mb-[16px] ml-10 max-xl:hidden'></div>
                        <div className='py-[50px] pl-[100px] max-xl:p-0 leading-8 max-xl:leading-6 pr-[1px] max-xl:pl-0'>


                          <NavDropdown.Item href="#action3" className='text-muted py-[8px] text-[18px] animated-text'>
                           <NavLink to='/'>
                            Plant garden
                           </NavLink>
                            </NavDropdown.Item>




                          <NavDropdown.Item href="#action4" className='text-muted py-[8px] text-[18px] animated-text'>Kid's Toys</NavDropdown.Item>
                          <NavDropdown.Item href="#action5" className='text-muted py-[8px] text-[18px] animated-text'>Electroinc Gadget</NavDropdown.Item>
                          <NavDropdown.Item href="#action5" className='text-muted py-[8px] text-[18px] animated-text'>Bathroom</NavDropdown.Item>
                          <NavDropdown.Item href="#action5" className='text-muted py-[8px] text-[18px] animated-text'>Bicycle</NavDropdown.Item>
                          <NavDropdown.Item href="#action5" className='text-muted py-[8px] text-[18px] animated-text'>Shoes</NavDropdown.Item>
                          <NavDropdown.Item href="#action5" className='text-muted py-[8px] text-[18px] animated-text'>Bags</NavDropdown.Item>
                        </div>

                        <div className='bg-[#c7c8cb] w-[1px] -mt-[23px] -mb-[16px] ml-10 max-xl:hidden'></div>
                        <div className='py-[50px] pl-[100px] max-xl:p-0 leading-8 max-xl:leading-6'>
                          <NavDropdown.Item href="#action3" className='text-muted py-[8px] text-[18px] animated-text'>Soap</NavDropdown.Item>
                          <NavDropdown.Item href="#action4" className='text-muted py-[8px] text-[18px] animated-text'>Skin Care</NavDropdown.Item>
                          <NavDropdown.Item href="#action5" className='text-muted py-[8px] text-[18px] animated-text'>Grocery Outlet</NavDropdown.Item>
                          <NavDropdown.Item href="#action5" className='text-muted py-[8px] text-[18px] animated-text'>Hiking Heaven<span className='text-white bg-red-500 px-2 py-0.3 rounded-full font-medium text-xs ml-[6px]'>New</span></NavDropdown.Item>
                          <NavDropdown.Item href="#action5" className='text-muted py-[8px] text-[18px] animated-text'>Handicarft<span className='text-white bg-red-500 px-2 py-0.3 rounded-full font-medium text-xs ml-[6px]'>New</span></NavDropdown.Item>
                          <NavDropdown.Item href="#action5" className='text-muted py-[8px] text-[18px] animated-text'>Exotic Fragrances<span className='text-white bg-red-500 px-2  py-0.3 rounded-full font-medium text-xs ml-[6px]'>New</span></NavDropdown.Item>
                        </div>
                      </div>
                    </section>
                    <div className='h-[1px] bg-[#c7c8cb]  max-xl:hidden'></div>
                    <section className=' max-xl:hidden'>
                      <div className='flex  items-center justify-center py-[15px] pl-[800px]'>
                        <p className='text-danger flex'>Summer Sale 65% Off
                          <span>
                            <a href="#" className='text-muted ml-2 add'>Shop Now</a>
                          </span>
                        </p>
                      </div>
                    </section>
                    <div className='h-[1px] bg-[#c7c8cb]  max-xl:hidden'></div>
                  </NavDropdown>

                  {/* product */}
                  <NavDropdown
                    title={
                      <div className='flex justify-between items-center font-semibold icon max-xl:border-b-[1px] max-xl:px-0'>
                        Product<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg>
                      </div>
                    }
                    id={`offcanvasNavbarDropdown-expand-${expand}`}>


                    <section className='flex w-screen max-xl:block items-center justify-center max-xl:m-0 max-xl:w-auto fleading-8 max-xl:leading-6 m-auto max-xl:bordr-b-[1px]'>

                      <div className='flex max-xl:block'>
                        <div className='max-xl:hidden'>
                          <div className='py-[50px]  pr-[10px] '>
                            <img width="250px" height="350px" src="https://emart.wpthemedemos.com/plant-garden/wp-content/uploads/sites/10/2022/12/hover-image-3rd.webp" alt="" loading="lazy" />
                            <div className='pt-[20px] leading-6'>
                              <p className='text-base'>Each product has a number for <br /> Easy indentification.</p>
                            </div>
                          </div>
                        </div>
                        <div className='max-xl:hidden'>
                          <div className='py-[50px]  pr-[20px] pl-[20px]'>
                            <img width="250px" height="350px" src="https://emart.wpthemedemos.com/plant-garden/wp-content/uploads/sites/10/2022/12/peace-lily-02.webp" alt="peace-lily-02" loading="lazy" />
                            <div className='pt-[20px] leading-6'>
                              <p className='text-base'>It's just a product of your fevered <br /> imagination!</p>
                            </div>
                          </div>
                        </div>

                        <div className='py-[60px] pl-[60px] pr-[30px] max-xl:p-0'>
                          <div className='pt-1 pb-8 ml-2 max-xl:hidden'>
                            <img width="45" height="45" src="https://emart.wpthemedemos.com/plant-garden/wp-content/uploads/sites/10/2023/03/dress-02.png" alt="" loading="lazy" />
                          </div>
                          <NavDropdown.Item href="#action3" className='font-bold py-[8px] text-[19px] '>Product Styles</NavDropdown.Item>
                          <NavDropdown.Item href="#action4" className='text-muted py-[8px] text-[18px] animated-text'>
                            <NavLink to='/StyleOne'>
                            Style One
                            </NavLink>
                            </NavDropdown.Item>
                          <NavDropdown.Item href="#action5" className='text-muted py-[8px] text-[18px] animated-text'>Style Two</NavDropdown.Item>
                          <NavDropdown.Item href="#action5" className='text-muted py-[8px] text-[18px] animated-text'>Style Three</NavDropdown.Item>
                          <NavDropdown.Item href="#action5" className='text-muted py-[8px] text-[18px] animated-text'>
                            <NavLink to='/StyleFour'>
                            Style four
                            </NavLink>
                            </NavDropdown.Item>
                        </div>
                        <div className='bg-[#c7c8cb] w-[1px] -mt-[8px] ml-10 max-xl:hidden'></div>

                        <div className='py-[50px] pl-[60px] pr-[20px] max-xl:p-0'>
                          <div className='pt-1 pb-7 ml-2 max-xl:hidden'>
                            <img width="42" height="42" src="https://emart.wpthemedemos.com/plant-garden/wp-content/uploads/sites/10/2023/03/school-bag.png" alt="" loading="lazy" />
                          </div>
                          <NavDropdown.Item href="#action3" className='font-bold py-[8px] text-[19px] '>Product Gallery</NavDropdown.Item>
                          <NavDropdown.Item href="#action4" className='text-muted py-[8px] text-[18px] animated-text'>Vertical carousel</NavDropdown.Item>
                          <NavDropdown.Item href="#action5" className='text-muted py-[8px] text-[18px] animated-text'>Carousal</NavDropdown.Item>
                          <NavDropdown.Item href="#action5" className='text-muted py-[8px] text-[18px] animated-text'>Horizontal style</NavDropdown.Item>
                          <NavDropdown.Item href="#action5" className='text-muted py-[8px] text-[18px] animated-text'>Grid style</NavDropdown.Item>
                        </div>

                        <div className='bg-[#c7c8cb] w-[1px] -mt-[8px] ml-10 max-xl:hidden'></div>

                        <div className='py-[50px] pl-[60px]  pr-20 max-xl:p-0'>
                          <div className='pt-1 pb-7 ml-2 max-xl:hidden'>
                            <img width="42" height="42" src="https://emart.wpthemedemos.com/plant-garden/wp-content/uploads/sites/10/2023/03/chair-1.png" alt="" loading="lazy" />
                          </div>
                          <NavDropdown.Item href="#action3" className='font-bold py-[8px] text-[19px] '>Product Style</NavDropdown.Item>
                          <NavDropdown.Item href="#action4" className='text-muted py-[8px] text-[18px] animated-text'>Simple Style</NavDropdown.Item>
                          <NavDropdown.Item href="#action" className='text-muted py-[8px] text-[18px] animated-text'>Varialbe Product</NavDropdown.Item>

                        </div>
                      </div>
                    </section>
                    <div className='h-[1px] bg-[#c7c8cb]  max-xl:hidden'></div>
                    <section className=' max-xl:hidden'>
                      <div className='flex  items-center justify-center py-[15px] pl-[800px]'>
                        <p className='text-danger flex'>Summer Sale 65% Off
                          <span>
                            <a href="#" className='text-muted ml-2 add'>Shop Now</a>
                          </span>
                        </p>
                      </div>
                    </section>
                    <div className='h-[1px] bg-[#c7c8cb]  max-xl:hidden'></div>
                  </NavDropdown>

                  {/* Shop */}
                  <NavDropdown
                    title={
                      <div className='flex justify-between items-center drop font-semibold icon max-xl:border-b-[1px]'>
                        Shop<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg>
                      </div>
                    }
                    id={`offcanvasNavbarDropdown-expand-${expand}`}>

                    <section className='flex max:xl:justify-center items-center w-screen h-[500px] max-xl:ml-0 max-xl:w-block max-xl:h-auto m-auto max-xl:border-b-[1px]  '>
                      <div className='flex max-xl:block  max-xl:py-0 '>

                        <div className='max-xl:ml-0  py-[60px] max-xl:p-0 pr-[60px] pl-[40px]'>

                          <NavDropdown.Item href="#action33" className='font-bold py-[8px] text-[19px] '> Listing Layouts </NavDropdown.Item>
                          <NavDropdown.Item href="#action34" className='text-muted py-[8px] text-[18px] animated-text'>  4 Column</NavDropdown.Item>
                          <NavDropdown.Item href="#action35" className='text-muted py-[8px] text-[18px] animated-text'>   4 Column + Side bar </NavDropdown.Item>
                          <NavDropdown.Item href="#action36" className='text-muted py-[8px] text-[18px] animated-text'>   5 Column </NavDropdown.Item>
                          <NavDropdown.Item href="#action37" className='text-muted py-[8px] text-[18px] animated-text'>   5 Column + Side bar</NavDropdown.Item>

                          <div className='mt-[20px]'>

                            <NavDropdown.Item href="#action38" className='font-bold py-[8px] text-[19px] '> Shop Pages </NavDropdown.Item>
                            <NavDropdown.Item href="#action39" className='text-muted py-[8px] text-[18px] animated-text'>
                              <NavLink to='/WishList'>
                                Wishlist
                              </NavLink>
                              </NavDropdown.Item>
                            <NavDropdown.Item href="#action40" className='text-muted py-[8px] text-[18px] animated-text'>
                              <NavLink to='/Cart'>
                               Cart
                              </NavLink>
                               </NavDropdown.Item>
                            <NavDropdown.Item href="#action41" className='text-muted py-[8px] text-[18px] animated-text'>
                               Checkout   </NavDropdown.Item>
                          </div>
                        </div>

                        <div className='bg-[#c7c8cb] w-[1px] mt-[28px] mb-[37px] ml-10 max-xl:hidden'></div>

                        <div className='pl-[40px] py-[60px] max-xl:p-0 pr-[60px]'>
                          <NavDropdown.Item href="#action42" className='font-bold py-[8px] text-[19px]'> Sidebar Widgets </NavDropdown.Item>
                          <NavDropdown.Item href="#action43" className='text-muted py-[8px] text-[18px] animated-text'>  Product Filter at Top</NavDropdown.Item>
                          <NavDropdown.Item href="#action44" className='text-muted py-[8px] text-[18px] animated-text'>  Product Filter at Left</NavDropdown.Item>
                          <NavDropdown.Item href="#action45" className='text-muted py-[8px] text-[18px] animated-text'> Product Filter at Right</NavDropdown.Item>
                        </div>

                        <div className='bg-[#c7c8cb] w-[1px] mt-[28px] mb-[37px] ml-10 max-xl:hidden'></div>
                        <div className='pl-[40px] py-[60px] max-xl:p-0 pr-[60px]'>
                          <NavDropdown.Item href="#action46" className='font-bold py-[8px] text-[19px]'> Shop Box styles</NavDropdown.Item>
                          <NavDropdown.Item href="#action47" className='text-muted py-[8px] text-[18px] animated-text'>  Shop Style One</NavDropdown.Item>
                          <NavDropdown.Item href="#action48" className='text-muted py-[8px] text-[18px] animated-text'>  Shop Style Two</NavDropdown.Item>
                          <NavDropdown.Item href="#action49" className='text-muted py-[8px] text-[18px] animated-text'> Shop Style Three</NavDropdown.Item>
                          <NavDropdown.Item href="#action51" className='text-muted py-[8px] text-[18px] animated-text'> Shop Style Four</NavDropdown.Item>
                        </div>

                        <div className='bg-[#c7c8cb] w-[1px] mt-[28px] mb-[37px] ml-10 max-xl:hidden'></div>
                        <div className='max-xl:hidden ml-[80px] my-[60px]'>
                          <div className='relative'>
                            <img width="360px" height="450px" src="https://emart.wpthemedemos.com/plant-garden/wp-content/uploads/sites/10/2023/03/New-Project.webp" className="attachment-large size-large wp-image-279" alt="" loading="lazy" />
                            <div className='absolute text-xl text-white -my-[150px] ml-[40px] tracking-winder'>
                              <p>On The Weekend</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>

                    <section className=' max-xl:hidden'>
                      <div className='h-[1px] bg-[#e5e7eb]  bb  max-xl:hidden'></div>
                      <div className='flex  items-center justify-center py-[15px] '>
                        <p className='text-danger flex'>Summer Sale 65% Off
                          <span>
                            <a href="#" className='text-muted ml-2 '>Shop Now</a>
                          </span>
                        </p>
                      </div>
                      <div className='h-[1px] bg-[#e5e7eb]  max-xl:hidden'></div>
                    </section>
                  </NavDropdown>

                  {/*  blog */}
                  <NavDropdown
                    title={
                      <div className='flex justify-between drop items-center font-semibold icon max-xl:border-b-[1px]'>
                        Blog<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg>
                      </div>
                    }
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="#action3" className='text-muted py-[8px] text-[18px] animated-text'>Default Blog</NavDropdown.Item>
                    <NavDropdown.Item href="#action4" className='text-muted py-[8px] text-[18px] animated-text'>Blog One</NavDropdown.Item>
                    <NavDropdown.Item href="#action5" className='text-muted py-[8px] text-[18px] animated-text'>Blog Two</NavDropdown.Item>
                    <NavDropdown.Item href="#action5" className='text-muted py-[8px] text-[18px] animated-text'>
                      <NavLink to='/BlogThree'>
                        Blog Three
                        </NavLink>
                    </NavDropdown.Item>
                  </NavDropdown>

                  {/* contact */}
                  <NavDropdown
                    title={
                      <div className='flex justify-between items-center font-semibold max-xl:border-b-[1px]'>
                        Contact<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg>
                      </div>
                    }
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >

                    <NavDropdown.Item href="#action3" className='text-muted py-[8px] text-[18px] animated-text'>Contact One</NavDropdown.Item>
                    <NavDropdown.Item href="#action4" className='text-muted py-[8px] text-[18px] animated-text'>
                      <NavLink to='/Contact'>

                      Contact Two
                      </NavLink>
                      </NavDropdown.Item>

                  </NavDropdown>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>

            <Nav className='flex items-center pr-[10px] order-3'>
              <div className='flex justify-between'>
                <div className='max-xl:hidden max-xl:pr-0 pr-2 '>
                  <a href="" className='flex'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 26 26" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                  </a>
                </div>

                <div className='max-xl:pr-0 ml-2  pr-2'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 26 26" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-user"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                </div>

                <div className='max-xl:hidden ml-2 flex  max-xl:pr-0 pr-2 '>
                  <a href="" className='flex '>
                    <span className="wishlist_products_counter_text"><img src="https://emart.wpthemedemos.com/plant-garden/wp-content/uploads/sites/10/2022/12/heart-wishlist-icon.svg" alt="Wishlist-logo" /> </span>
                    <span className='-mt-4 font-semibold'>1</span>
                  </a>
                </div>

                  <div className='flex max-md:-mr-2 ml-2 max-xl:pr-0 pr-2'>
                    <NavLink to='/Cart'>
                      <span className='flex'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 26 26" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-shopping-bag"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
                <span className='-mt-4 font-semibold'>{result.length}</span>
                      </span>

                    </NavLink>

                  </div>

              </div>
            </Nav>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default OffcanvasExample;
