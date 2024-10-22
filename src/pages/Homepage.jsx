import React from 'react'
import Hero from '../components/Hero'
import Statistics from '../components/Statistics'
import Stats from '../components/Stats'
import Service from '../components/Service'
import { MdArrowOutward } from 'react-icons/md'

export default function Homepage() {
  return (
    <div>
        <Hero/>
        <Statistics/>

        <div className='flex justify-between items-center mt-4 '>
            <h3 className='text-2xl font-extrabold font-[lato] ml-4'>Our Services</h3>
            <button className='  hover:text-white mr-4 flex gap-2 items-center rounded bg-[#37CA2A] px-2 py-2 shaodow'>
              View All 
              <MdArrowOutward />

            </button>
           </div>
           <div className='services'>

           <Service/>
           <Service/>
           <Service/>

           </div>
        
       
    </div>
  )
}
