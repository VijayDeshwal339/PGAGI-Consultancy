import React from 'react'


const First = () => {
  return (
    <div className='flex flex-col gap-8 p-10 mb-[50px]'>
      <div className='flex flex-col px-4 text-center gap-3'>
        <p className='font-medium text-5xl text-[#6F6E6E]'>Build AI Calling Agent that can do</p>
        <p className='font-bold text-5xl'>Sales Call</p>
      </div>

      <div className='flex flex-col px-4 items-center gap-3'>
        <button className='px-12 py-4 rounded-lg text-white font-semibold text-lg' style={{background: 'linear-gradient(94.93deg, #FFA96B 32.4%, #995B2E 208.58%)'}}>Build your own voice agent<br></br>
            <span className='text-black'>‘It’s free!’</span>
        </button>
        <button className='border border-[#787878] px-8 py-3 rounded-lg'>Hear it in action</button>
      </div>

     
    </div>
  )
}

export default First