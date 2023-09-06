import React from 'react'
import TopHeading from './TopHeading'
import Products from './Products'

export default function FeaturedSection() {
  return (
  <div className="max-w-7xl mx-auto">
    <div className='p-3 px-1 flex flex-col gap-10'>
      <TopHeading/>
      <Products/>
    </div>
  </div>
  )
}
