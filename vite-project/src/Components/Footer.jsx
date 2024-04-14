import React from 'react'

function Footer() {
  return (
    <>

    <div >
       <h3 className='font-bold-xl justify-center items-center flex text-2xl p-5'>Subscribe newsletter</h3>
         <h3 className='text-gray-500 justify-center items-center flex p-5'> subscribe Now and get more offers
</h3>
  <div className=''>
   
    <input type='text'
    placeholder='Your email address...'
    className='text-gray-800 sm:w-72  w-full sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5 outline-none bg-gray-100'/>
     <button className='bg-black  text-white duration-300 px-5 py-2.5 md:w-auto w-full'> Subscribe Now</button>
  </div>
    </div>
    </>
  )
}

export default Footer


 