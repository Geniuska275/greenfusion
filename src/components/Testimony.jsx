import React from 'react'

function Testimony({data}) {
  return (
    <div className=' w-[300px] h-[370px] p-[20px] mb-3 mt-2'>
        <h1 className='font-extrabold font-[lato] mb-3'>{data.product}</h1>

        <p className='font-bold font-[lato] text-[#4A4E55] m-auto'><i>
            {data.testimony}
            </i>
            </p>
            <p className='font-bold font-[lato] text-[#4A4E55] text-right mr-3'><i>
            -{data.name}
            </i>
            </p>
    </div>
  )
}

export default Testimony