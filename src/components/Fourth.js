import React from 'react'
import Tune from '../assests/Tune.png'

const Fourth = () => {
  return (
    <div className='flex flex-col items-center w-[310px] mx-auto p-5 border border-[#ED6705] gap-5'>
      <img src={Tune} alt='' />   
      <p className='font-semibold text-2xl'>Fine tuning</p>
      <p className='font-normal text-lg my-5 '>Train an AI phone agent on existing phone calls to improve call performance, and build guardrails against hallucination.</p>
      
    </div>
  )
}

export default Fourth