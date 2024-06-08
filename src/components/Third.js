import React from 'react'
import Light from '../assests/Lightning Bolt.png'

const Third = () => {
  return (
    <div className='flex flex-col items-center w-[310px] mx-auto p-5 border border-[#ED6705] gap-5 my-[100px]'>
      <img src={Light} alt='' />   
      <p className='font-semibold text-2xl'>Ultra-Fast Response</p>
      <p className='font-normal text-lg my-5 '>Experience lightning-quick interactions with an impressive 500 ms response time, ensuring seamless conversations.</p>
      <button className='self-center px-10 py-3 bg-[#FF9345] rounded-lg my-5'>Try now</button>
    </div>
  )
}

export default Third