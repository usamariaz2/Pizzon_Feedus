import React from 'react'

export default function Contact() {
  return (
	<div className='sm:w-1/2 lg:w-1/2  sm:p-2 lg:p-2 max-w-7xl mx-auto'>
		<p className='bold text-center text-3xl font-bold tracking-wide uppercase my-4'>Book a table</p>
		<form action="" className='flex flex-col gap-y-6'>
		<input type="text" placeholder='Name' className='border border-[#FF6600]/60 rounded placeholder-gray-600 py-4 px-3' />
		<input type="email" placeholder='Email' className='border border-[#FF6600]/60 rounded placeholder-gray-600 py-4 px-3' />
		<input type="number" placeholder='How Many Person ?' className='border border-[#FF6600]/60 rounded placeholder-gray-600 py-4 px-3' />
		<input type='text' placeholder='Choose Date' className='border border-[#FF6600]/60 rounded placeholder-gray-600 py-4 px-3 w-full' />
			<button type='submit' className='self-center bg-[#FF6600] text-white rounded-full py-2 px-6 w-36 text-center'>Submit</button>
		</form>
	</div>
  )
}
