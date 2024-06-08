import React from 'react'
import img1 from '../assests/Mask group (1).png';
import img2 from '../assests/Mask group (2).png';
import img3 from '../assests/Mask group (3).png';
import img4 from '../assests/Mask group (4).png';
import img5 from '../assests/Mask group (1).png';

const VideoComponent = () => {
  return (
    <div className='flex flex-col items-center text-center gap-10 w-[327px] mx-auto mb-[50px]'>

      <p className='font-medium text-lg text-[#797979]'>Automate your agent with 5000+ integrations like</p>

      <div className='flex gap-5 items-center'>
        <img src={img1} alt='' />
        <img src={img2} alt='' />
        <img src={img3} alt='' />
        <img src={img4} alt='' />
        <img src={img5} alt='' />
      </div>

       <div className='h-[412px] w-[100%] text-white bg-black flex justify-center items-center mt-[50px]'>
        <p className='font-medium text-5xl'>Video</p>
       </div>
    </div>
  )
}

export default VideoComponent