import React, { useState } from 'react';




const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className='w-[340px] mx-auto my-[100px]'>
       
       <div className='w-[full] mb-12'>
        <p className='font-medium text-4xl'>Frequently asked questions</p>
       </div>

      <div className="relative mb-3">
        <h6 className="mb-0">
          <button
            className="relative flex items-center w-full p-4 font-semibold text-left transition-all ease-in border-b border-solid cursor-pointer border-[#6C6B6B] text-slate-700 rounded-t-1 group text-dark-500"
            onClick={() => toggleAccordion(1)}
          >
            <span className='text-[#6C6B6B] font-medium text-lg'>What is Toingg’s pricing?</span>
            <i className={`absolute right-0 pt-1 text-xs fa ${openIndex === 1 ? 'fa-minus' : 'fa-plus'}`}></i>
          </button>
        </h6>
        <div
          className={`transition-all duration-300 ease-in-out overflow-hidden ${openIndex === 1 ? 'max-h-96' : 'max-h-0'}`}
        >
          <div className="p-4 text-sm leading-normal text-blue-gray-500/80">
            We're not always in the position that we want to be at. We're constantly
            growing. We're constantly making mistakes. We're constantly trying to
            express ourselves and actualize our dreams.
          </div>
        </div>
      </div>

      <div className="relative mb-3">
        <h6 className="mb-0">
          <button
            className="relative flex items-center w-full p-4 font-semibold text-left transition-all ease-in border-b border-solid cursor-pointer border-[#6C6B6B] text-slate-700 rounded-t-1 group text-dark-500"
            onClick={() => toggleAccordion(2)}
          >
            <span className='text-[#6C6B6B] font-medium text-lg'>How to use Material Tailwind?</span>
            <i className={`absolute right-0 pt-1 text-xs fa ${openIndex === 2 ? 'fa-minus' : 'fa-plus'}`}></i>
          </button>
        </h6>
        <div
          className={`transition-all duration-300 ease-in-out overflow-hidden ${openIndex === 2 ? 'max-h-96' : 'max-h-0'}`}
        >
          <div className="p-4 text-sm leading-normal text-blue-gray-500/80">
            We're not always in the position that we want to be at. We're constantly
            growing. We're constantly making mistakes. We're constantly trying to
            express ourselves and actualize our dreams.
          </div>
        </div>
      </div>

      <div className="relative mb-3">
        <h6 className="mb-0">
          <button
            className="relative flex items-center w-full p-4 font-semibold text-left transition-all ease-in border-b border-solid cursor-pointer border-[#6C6B6B] text-slate-700 rounded-t-1 group text-dark-500"
            onClick={() => toggleAccordion(3)}
          >
            <span className='text-[#6C6B6B] font-medium text-lg'>What can I do with Material Tailwind?</span>
            <i className={`absolute right-0 pt-1 text-xs fa ${openIndex === 3 ? 'fa-minus' : 'fa-plus'}`}></i>
          </button>
        </h6>
        <div
          className={`transition-all duration-300 ease-in-out overflow-hidden ${openIndex === 3 ? 'max-h-96' : 'max-h-0'}`}
        >
          <div className="p-4 text-sm leading-normal text-blue-gray-500/80">
            We're not always in the position that we want to be at. We're constantly
            growing. We're constantly making mistakes. We're constantly trying to
            express ourselves and actualize our dreams.
          </div>
        </div>
      </div>

      <div className="relative mb-3">
        <h6 className="mb-0">
          <button
            className="relative flex items-center w-full p-4 font-semibold text-left transition-all ease-in border-b border-solid cursor-pointer border-[#6C6B6B] text-slate-700 rounded-t-1 group text-dark-500"
            onClick={() => toggleAccordion(4)}
          >
            <span className='text-[#6C6B6B] font-medium text-lg'>What can I do with Material Tailwind?</span>
            <i className={`absolute right-0 pt-1 text-xs fa ${openIndex === 4 ? 'fa-minus' : 'fa-plus'}`}></i>
          </button>
        </h6>
        <div
          className={`transition-all duration-300 ease-in-out overflow-hidden ${openIndex === 3 ? 'max-h-96' : 'max-h-0'}`}
        >
          <div className="p-4 text-sm leading-normal text-blue-gray-500/80">
            We're not always in the position that we want to be at. We're constantly
            growing. We're constantly making mistakes. We're constantly trying to
            express ourselves and actualize our dreams.
          </div>
        </div>
      </div>

      <div className="relative mb-3">
        <h6 className="mb-0">
          <button
            className="relative flex items-center w-full p-4 font-semibold text-left transition-all ease-in border-b border-solid cursor-pointer border-[#6C6B6B] text-slate-700 rounded-t-1 group text-dark-500"
            onClick={() => toggleAccordion(5)}
          >
            <span className='text-[#6C6B6B] font-medium text-lg'>What can I do with Material Tailwind?</span>
            <i className={`absolute right-0 pt-1 text-xs fa ${openIndex === 5 ? 'fa-minus' : 'fa-plus'}`}></i>
          </button>
        </h6>
        <div
          className={`transition-all duration-300 ease-in-out overflow-hidden ${openIndex === 3 ? 'max-h-96' : 'max-h-0'}`}
        >
          <div className="p-4 text-sm leading-normal text-blue-gray-500/80">
            We're not always in the position that we want to be at. We're constantly
            growing. We're constantly making mistakes. We're constantly trying to
            express ourselves and actualize our dreams.
          </div>
        </div>
      </div>

      <div className="relative mb-3">
        <h6 className="mb-0">
          <button
            className="relative flex items-center w-full p-4 font-semibold text-left transition-all ease-in border-b border-solid cursor-pointer border-[#6C6B6B] text-slate-700 rounded-t-1 group text-dark-500"
            onClick={() => toggleAccordion(6)}
          >
            <span className='text-[#6C6B6B] font-medium text-lg'>What can I do with Material Tailwind?</span>
            <i className={`absolute right-0 pt-1 text-xs fa ${openIndex === 6 ? 'fa-minus' : 'fa-plus'}`}></i>
          </button>
        </h6>
        <div
          className={`transition-all duration-300 ease-in-out overflow-hidden ${openIndex === 3 ? 'max-h-96' : 'max-h-0'}`}
        >
          <div className="p-4 text-sm leading-normal text-blue-gray-500/80">
            We're not always in the position that we want to be at. We're constantly
            growing. We're constantly making mistakes. We're constantly trying to
            express ourselves and actualize our dreams.
          </div>
        </div>
      </div>

      <div className="relative mb-3">
        <h6 className="mb-0">
          <button
            className="relative flex items-center w-full p-4 font-semibold text-left transition-all ease-in border-b border-solid cursor-pointer border-[#6C6B6B] text-slate-700 rounded-t-1 group text-dark-500"
            onClick={() => toggleAccordion(7)}
          >
            <span className='text-[#6C6B6B] font-medium text-lg'>What can I do with Material Tailwind?</span>
            <i className={`absolute right-0 pt-1 text-xs fa ${openIndex === 7 ? 'fa-minus' : 'fa-plus'}`}></i>
          </button>
        </h6>
        <div
          className={`transition-all duration-300 ease-in-out overflow-hidden ${openIndex === 3 ? 'max-h-96' : 'max-h-0'}`}
        >
          <div className="p-4 text-sm leading-normal text-blue-gray-500/80">
            We're not always in the position that we want to be at. We're constantly
            growing. We're constantly making mistakes. We're constantly trying to
            express ourselves and actualize our dreams.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
