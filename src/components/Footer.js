import React from 'react'
import LindkedIn from '../assests/LinkedIn 2.png'
import Instagram from '../assests/Instagram.png'
import Twitter from '../assests/X.png'
import Dont from '../assests/image 11.svg'
import Mask from '../assests/Mask group.png'

const Footer = () => {
  return (
    <div className='flex flex-col  p-10  gap-11' style={{background:'linear-gradient(180deg, #FFD6B8 0%, rgba(153, 145, 139, 0) 100%)'}}>

      <div className='flex flex-col px-[10%] text-center'>
      <p className='font-semibold text-5xl'>TOINGG</p>
      <p className='font-medium text-2xl text-white '>We are here to grow your business</p>
      </div>

      <div className='text-center flex flex-col gap-3'>
        <p className='font-normal text-lg'>Terms and conditions</p>
        <p className='font-normal text-lg'>Privacy policy</p>
        <p className='font-normal text-lg'>Help center</p>
        <p className='font-normal text-lg'>API docs</p>
        <p className='font-normal text-lg'>Careers</p>
      </div>
     
     <div className='items-center justify-center flex  gap-3'>
        <img src={LindkedIn} alt='LindkedIn' />
        <img src={Instagram} alt='Instagram' />
        <img src={Twitter} alt='Twitter' />
        <img src={Dont} alt='Dont' />
     </div>

     <div className='flex flex-col px-[10%] text-start gap-5'>
    
      <p className='font-medium text-base'>Copyright © 2024 Toingg <br></br>Inc. All rights reserved.</p>
     
      <div className='flex items-center gap-2'>
      <p className='font-medium text-base'>Inc. All rights reserved.</p>
      <img src={Mask} alt='' />
      </div>
     </div>
     
    </div>
  )
}

export default Footer

