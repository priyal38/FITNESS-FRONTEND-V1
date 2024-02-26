import React from 'react';
import { Carousel } from 'flowbite-react';
import { SliderData } from '../utils/SliderData'; 
type Props = {};

const Hero = (props: Props) => {
  return (
    <div className="md:h-[90vh]  sm:h-[70vh] xs:h-[70vh] overflow-hidden ">
      <div className="md:h-[90vh] sm:h-[70vh] xs:h-[70vh] w-full">
        <Carousel>
          {SliderData.map((item) => (
            <div key={item.id} className="relative md:h-[90vh] sm:h-[70vh] xs:h-[70vh]">
              <img src={item.bgImg} className='object-cover w-full h-full opacity-30' alt="..." />
              <div className="absolute inset-0 flex flex-col justify-center items-center">
                <h1 className="text-white  md:text-6xl sm:text-4xl xs:text-3xl pb-1 font-bold text-center">{item.slogan}</h1>
                <h1 className="text-white md:text-6xl sm:text-5xl xs:text-3xl pb-4 font-bold text-center">{item.title}</h1>
                <p className="text-white md:text-2xl sm:text-xl xs:text-lg text-center">{item.desc}</p>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Hero;
