import React, { useState } from 'react';
import Menu from '../assests/Menu.png';
import { FaArrowRight } from 'react-icons/fa';

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <>
      <div className='flex justify-between items-center px-3 cursor-pointer p-5'>
        <p className='font-semibold text-base'>Toingg</p>
        <img src={Menu} alt='Menu' className='' onClick={toggleDrawer} />
      </div>

      {isDrawerOpen && (
        <div
          className='fixed inset-0 z-50 flex flex-col items-start p-8'
          style={{ background: 'linear-gradient(180deg, #FEECDF 0%, #D38751 100%)' }}
        >
          <button onClick={toggleDrawer} className='self-end mb-4 text-xl'>X</button>
          <div className='w-full'>
            <div className='flex justify-between items-center w-full py-4  cursor-pointer'>
              <p>Contact</p>
              <FaArrowRight />
            </div>
            <div className='flex justify-between items-center w-full py-4  cursor-pointer'>
              <p>Pricing</p>
              <FaArrowRight />
            </div>
            <div className='flex justify-between items-center w-full py-4  cursor-pointer'>
              <p>Documentation</p>
              <FaArrowRight />
            </div>
            <div className='flex justify-between items-center w-full py-4 cursor-pointer'>
              <p>Join our community</p>
              <FaArrowRight />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
