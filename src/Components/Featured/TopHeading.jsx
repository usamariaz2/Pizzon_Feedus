import React from 'react'

export default function TopHeading() {
  return (
    <div className='flex py-2 flex-col gap-6 items-left'>
    <h1 className='font-semibold font-[font-serif] text-5xl'>Our <br />Featured<span className='text-[#FF6600]'> Food</span></h1>
    <p className='sm:text-left lg:text-left text-gray-600/70 w-[40ch] mx-auto sm:mx-0 text-sm sm:w-2/5'>Lorem ipsum dolor sit amet consectetur, Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque, earum. adipisicing elit. Error, similique.</p>
      <hr className='sm:w-18 lg:w-18 sm:mx-0 lg:mx-0 w-40 mx-auto  border-[#FF6600] border-2 '/>
</div>
  )
}
