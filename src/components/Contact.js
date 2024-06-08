import React from 'react'
import phone from '../assests/Vector.png'

const Contact = () => {
  return (
    <div className='flex flex-col gap-10 rounded-lg mx-[10%] my-[100px] px-5' style={{background: 'linear-gradient(335.33deg, #FFFFFF 2.31%, #FFD3B4 116.03%)'}}>

     <div className='mt-24'>
        <p className='font-bold text-3xl'>Try now</p>
        <p className='font-medium text-base text-[#989898]'>Get a call from Toingg</p>
     </div>

     <input type='text' placeholder='Name' className='p-3 rounded-lg border border-[#000000]'/>
     <input type='text' placeholder='Name' className='p-3 rounded-lg border border-[#000000]'/>
     <input type='text' placeholder='Name' className='p-3 rounded-lg border border-[#000000]'/>

     <div className='w-[50px] h-[50px] flex items-center justify-center rounded-full bg-[#FF9345B0] self-center my-10' style={{}}>
      <img src={phone} alt='' />
    </div>
    </div>
  )
}

export default Contact