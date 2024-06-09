import React from 'react';
import Slider from 'react-slick';
import Light from '../assests/Lightning Bolt.png';
import Private from '../assests/Private.png';
import Brain from '../assests/Brain.png';
import Planned from '../assests/Planned Path.png';
import Key from '../assests/Key.png';
import Scale from '../assests/Scale Up.png';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Third = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    centerMode: true,
    centerPadding: "0px",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: '0px'
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: '0px'
        }
      }
    ]
  };

  const features = [
    {
      img: Light,
      title: "Ultra-Fast Response",
      description: "Experience lightning-quick interactions with an impressive 500 ms response time, ensuring seamless conversations."
    },
    {
      img: Private,
      title: "Smart Interruption Management",
      description: "Our system adeptly handles interruptions, ensuring smooth, natural dialogues just like human conversations."
    },
    {
      img: Brain,
      title: "Advanced Memory Recall",
      description: "Remembering context and details from earlier in the conversation, our AI provides a personalized and coherent interaction."
    },
    {
      img: Planned,
      title: "Dynamic Conversational Flows",
      description: "Navigate through complex conversations with ease, thanks to our AI's ability to understand and adapt to various conversational pathways."
    },
    {
      img: Key,
      title: "Custom AI Solutions",
      description: "Leverage our proprietary AI models tailored to your specific business needs for unparalleled efficiency and effectiveness."
    },
    {
      img: Scale,
      title: "Scalability at Your Fingertips",
      description: "From one-on-one conversations to managing 10,000 concurrent calls, our platform scales effortlessly with your business."
    }
  ];

  return (
    
      <div className='w-full max-w-[340px] mx-auto my-[100px]'>
        <Slider {...settings}>
          {features.map((feature, index) => (
            <div key={index} >
            <div className='flex flex-col items-center p-5 border border-[#ED6705] gap-5 '>
              <img src={feature.img} alt={feature.title} />   
              <p className='font-semibold text-2xl text-center'>{feature.title}</p>
              <p className='font-normal text-lg my-5 text-center'>{feature.description}</p>
              <button className='self-center px-10 py-3 bg-[#FF9345] rounded-lg mb-5'>Try now</button>
            </div>
            </div>
          ))}
        </Slider>
      </div>
    
  );
};

export default Third;
