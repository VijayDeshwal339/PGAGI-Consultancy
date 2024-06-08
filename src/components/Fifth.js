import React from 'react'
import Security from '../assests/Security Shield.png'
import phone from '../assests/Vector.png'
import filter from '../assests/Filter and Sort.png'
import Scale from '../assests/Scales.png'
import Analyze from '../assests/Analyze.png'

const Fifth = () => {
  return (
    <div className='flex w-[310px]  flex-col gap-10 mx-auto my-[100px]'>
    <div className='flex flex-col items-center'>
    <img src={Security} alt='' />
    <p className='font-medium text-2xl text-center'>The highest standards of trust and safety.</p>
    </div>
    <p className='font-normal text-lg px-2'>We continue to actively restrict the calls we support, ensuring that our AI phone call technology continues to benefit consumers, businesses, and society as a whole.</p>

    <div className='flex   justify-between '>
        <div className='flex flex-col gap-5 items-center'>
        <div className='flex flex-col items-center'>
            <div className='h-[35px] w-[35px] rounded-full flex items-center justify-center bg-[#ED6705]'>
             <img src={phone} alt='' />
            </div>
            <p className='font-medium text-base'>Call Monitoring</p>
        </div>
        </div>

        <div className='flex flex-col gap-5 items-center'>
            
        </div>
     
        <div className='flex flex-col items-center'>
            <div className='h-[35px] w-[35px] rounded-full flex items-center justify-center bg-[#ED6705]'>
             <img src={filter} alt='' />
            </div>
            <p className='font-medium text-base'>Prompt Injection</p>
        </div>
        </div>
        <div className='flex  justify-between '>
        <div className='flex flex-col items-center'>
            <div className='h-[35px] w-[35px] rounded-full flex items-center justify-center bg-[#ED6705]'>
             <img src={Scale} alt='' />
            </div>
            <p className='font-medium text-base'>Rate Limits</p>
        </div>
        <div className='flex flex-col items-center'>
            <div className='h-[35px] w-[35px] rounded-full flex items-center justify-center bg-[#ED6705]'>
             <img src={Analyze} alt='' />
            </div>
            <p className='font-medium text-base'>Internal Hard Audits</p>
        </div>

    </div>
    </div>
  )
}

export default Fifth