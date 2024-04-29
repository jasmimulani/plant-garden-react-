 import React from 'react'

const Contactfooter = () => {
  return (
    <div>
      <footer className='bg-gray-200  text-black-200'>
        <div className='mx-auto py-14 px-10'>
            <div className='grid md:grid-cols-12 grid-cols-1 gap-7'>
              <div className='lg:col-span-4 col-span-12'>
                <div className='h-12'>
                <img alt="logo" src="https://emart.wpthemedemos.com/plant-garden/wp-content/uploads/sites/10/2022/12/emart-011.webp" width="140" height="31" />
                </div>
              <p> Molestie vitae massa felis, aliquam lectus at. Ultricies et,    quis sit fermentum.</p>
              </div>

              <div className='lg:col-span-2 md:col-span-4 col-span-12 px-10'>
                   <h5 className='tracking-wind text-black-100 font-semibold'>Quick Link</h5>
                   <ul className='list-none mt-6 space-y-2'>
                    <li className='text-muted py-[8px] text-[17px] animated-text'> About </li>
                    <li className='text-muted py-[8px] text-[17px] animated-text'> Product </li>
                    <li className='text-muted py-[8px] text-[17px] animated-text'> Responsibility</li>
                    <li className='text-muted py-[8px] text-[17px] animated-text'> Career</li>
                   </ul>
              </div>

              <div className='lg:col-span-2 md:col-span-4 col-span-12'>
                   <h5 className='tracking-wind text-black-100 font-semibold'>Services</h5>
                   <ul className='list-none mt-6 space-y-2'>
                    <li className='text-muted py-[8px] text-[17px] animated-text'> My Account </li>
                    <li className='text-muted py-[8px] text-[17px] animated-text'> Chekout Page</li>
                    <li className='text-muted py-[8px] text-[17px] animated-text'>Help Center</li>
                    <li className='text-muted py-[8px] text-[17px] animated-text'>Terms & Condition</li>
                   </ul>
              </div>

              <div className='lg:col-span-2 md:col-span-4 col-span-12'>
                   <h5 className='tracking-wind text-black-100 font-semibold'>More</h5>
                   <ul className='list-none mt-6 space-y-2'>
                    <li className='text-muted py-[8px] text-[17px] animated-text'> Gift Card</li>
                    <li className='text-muted py-[8px] text-[17px] animated-text'> Lookbook</li>
                    <li className='text-muted py-[8px] text-[17px] animated-text'>Rewards Program</li>
                    <li className='text-muted py-[8px] text-[17px] animated-text'> Career</li>
                   </ul>
              </div>
            </div>

            <hr/> 

        <h2 className=' text-sm text-gray-400  flex justify-end sm:mr-14 lg:mr-auto text-'> Designed by:<b className='text-md text-gray-600'> Wpingnite</b> </h2>

        </div>
      </footer>
    </div> 
  )
}

export default Contactfooter
