import React from 'react'
import video from "./solar.mp4"
import { Link } from 'react-router-dom'
function Hero() {
  return (
    <div className='Hero'>

        <video  src={video} muted autoPlay loop className='video' />
        <div className='bg-overlay'></div>
        <div className='display  mt-[150px]'>
            <h1 className='font-bold text-[#37CA2A] 
            text-5xl font-[lato] mb-3'>
                Our Vision</h1>
            <h1 className='font-bold text-[#ffffff] text-2xl font-[lato] mb-1'>            
            Providing Affordable and Innovative Solar Energy Solutions.</h1>
            <h4 className='p-[3px] bg-[#37CA2A] w-[160px] rounded-full'></h4>
            <p className='font-bold text-white text-lg font-[lato] mb-2 mt-5' >
            To provide affordable and innovative solar energy solutions to empower organizations and individuals 
            through the use of renewable energy.
                </p>
            <p className='font-bold text-white text-lg font-[lato] mb-1'>Your assets are safe,your returns are maximised ,and your satisfaction 
                is <br></br>
            guaranteed.
            </p>
            <div className='flex gap-3 mt-5'>
            <Link to="About-Us">
         <button className="bg-[#37CA2A]  rounded-md 
           font-[lato] px-6 py-2 text-black shadow-lg hover:bg-[#37CA3A]
            duration-500">Learn More</button>
           </Link>
         
         <a href="https://wa.me/+2348036808184"> 
         <button className="bg-white  rounded-md 
           font-[lato] px-6 py-2 text-black shadow-lg hover:bg-[#37CA3A] duration-500">Book Now</button>
         </a>
            </div>


        </div>
    </div>
  )
}

export default Hero