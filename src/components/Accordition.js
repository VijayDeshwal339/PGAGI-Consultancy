import React, { useState } from 'react';

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className='w-[340px] mx-auto my-[100px]'>
       
       <div className='w-full mb-12'>
        <p className='font-medium text-4xl'>Frequently asked questions</p>
       </div>

      {[
        { question: "What is Toingg’s pricing?", answer: "Toingg offers flexible pricing plans tailored to your needs. Contact our sales team for a quote." },
        { question: "How to use Material Tailwind?", answer: "Material Tailwind is easy to use. Just install the package and start using the pre-built components." },
        { question: "What can I do with Material Tailwind?", answer: "With Material Tailwind, you can quickly build beautiful, responsive websites with minimal effort." },
        { question: "Is there a free trial available?", answer: "Yes, we offer a 14-day free trial for you to explore our services and features." },
        { question: "How do I get support?", answer: "You can get support by contacting our support team via email or live chat." },
        { question: "Can I customize the components?", answer: "Absolutely! Material Tailwind is fully customizable to fit your project's needs." },
        { question: "What is the refund policy?", answer: "We offer a 30-day money-back guarantee if you're not satisfied with our product." }
      ].map((item, index) => (
        <div className="relative mb-3" key={index}>
          <h6 className="mb-0">
            <button
              className="relative flex items-center w-full p-4 font-semibold text-left transition-all ease-in border-b border-solid cursor-pointer border-[#6C6B6B] text-slate-700 rounded-t-1 group text-dark-500"
              onClick={() => toggleAccordion(index)}
            >
              <span className='text-[#6C6B6B] font-medium text-lg'>{item.question}</span>
              <i className={`absolute right-0 pt-1 text-xs fa ${openIndex === index ? 'fa-minus' : 'fa-plus'}`}></i>
            </button>
          </h6>
          <div
            className={`transition-all duration-300 ease-in-out overflow-hidden ${openIndex === index ? 'max-h-96' : 'max-h-0'}`}
          >
            <div className="p-4 text-sm leading-normal text-blue-gray-500/80">
              {item.answer}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
