import React from 'react';
import { Carousel } from 'flowbite-react';
import { SliderData } from '../utils/SliderData'; 
type Props = {};

const Hero = (props: Props) => {
  return (
    <div className="h-screen overflow-hidden">
      <div className="h-96 w-full">
        <Carousel>
          {SliderData.map((item) => (
            <div key={item.id} className="relative h-96">
              <img src={item.bgImg} className='object-cover w-full h-full opacity-40' alt="..." />
              <div className="absolute inset-0 flex flex-col justify-center items-center">
                <h1 className="text-white text-4xl pb-1 font-bold text-center">{item.slogan}</h1>
                <h1 className="text-white text-4xl pb-4 font-bold text-center">{item.title}</h1>
                <p className="text-white text-lg text-center">{item.desc}</p>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Hero;
