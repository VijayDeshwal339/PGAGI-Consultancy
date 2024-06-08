import React from 'react'
import Gpt from '../assests/image 12.png'

const Second = () => {
  return (
    <div className='w-[340px] flex flex-col gap-3 mx-auto p-5 bg-[#FFF6E8] rounded-lg my-[100px]'>
        <img src={Gpt} alt='' className='px-4' />
        <p className='font-medium text-2xl px-14'>Explore TOINGG in <span className='text-[#FC6B01]'>GPT</span> Store</p>
        <li className='text-base font-normal text-start'>Interactive Communication: Engage in single or batch calls using TOINGG GPT.</li>
        <li className='text-base font-normal'>Advanced Features: Leverage GPT for real-time sentiment analysis during calls.</li>
        <li className='text-base font-normal'>Data Export: Conveniently export call logs to CSV.</li>
        <li className='text-base font-normal'>Enhanced Usability: Tailored for users familiar with CSV functionalities.</li>
        <button className='self-center text-wrap text-white font-medium text-base px-4 py-3' style={{background: 'linear-gradient(92.29deg, #FC9850 1.92%, #AD4C06 96.57%)'}}>Explore more</button>
    </div>
  )
}

export default Second