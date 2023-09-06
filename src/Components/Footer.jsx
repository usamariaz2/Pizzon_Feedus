import React from 'react'

export default function Footer() {
  return (
        <footer className="py-6 mt-2 bg-slate-100 text-black">
	<div className="container px-6 mx-auto space-y-6 divide-y divide-gray-400 md:space-y-12 divide-opacity-50">
		<div className="grid grid-cols-12">
			<div className="pb-6 col-span-full md:pb-0 md:col-span-6">
				<a rel="noopener noreferrer" href="/" className="flex justify-center space-x-3 md:justify-start">
					<div className="flex items-center justify-center ">
						<img src='/logo.png' alt='logo' className="flex-shrink-0 w-16 rounded-full text-gray-900">
						</img>
					</div>
					<span className="self-center text-2xl font-semibold">Pizzon</span>
				</a>
			</div>
			<div className='flex flex-row sm:items-auto lg:items-auto gap-3'>
               <a target='blank' href="https://wa.me/+923421259606"><button className='border border-[#FF6600]/80 rounded-full py-1 px-4 hover:bg-[#FF6600]/80 transition duration-300 easeinout'>Whatsapp</button></a>
               <a target='blank' href="https://www.linkedin.com/in/usamariazur/"><button className='border border-[#FF6600]/80 rounded-full py-1 px-4 hover:bg-[#FF6600]/80 transition duration-300 easeinout'>Linkedin</button></a>
               <a target='blank' href="https://github.com/usamariaz2"><button className='border border-[#FF6600]/80 rounded-full py-1 px-4 hover:bg-[#FF6600]/80 transition duration-300 easeinout'>Github</button></a>
            </div>
		</div>
		<div className="grid justify-center pt-6 lg:justify-between">
			<div className="flex flex-col self-center text-sm text-center md:block lg:col-start-1 md:space-x-6">
				<span>©2023 All rights reserved</span>
				<a rel="noopener noreferrer" href="/">
					<span>Privacy policy</span>
				</a>
				<a rel="noopener noreferrer" href="/">
					<span>Terms of service</span>
				</a>
			</div>
			
		</div>
	</div>
</footer>
  )
}
