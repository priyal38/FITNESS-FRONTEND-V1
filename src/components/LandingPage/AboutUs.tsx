import React from "react";
import Image from "../../images/about.jpg"

const AboutUs = () => {
  return (
    <>
      <div id="about">
        <h2 className="text-3xl md:text-5xl font-bold text-center mt-6 bg-gradient-to-b from-violet-700 to-orange-500 bg-clip-text text-transparent  mb-4">
          About Us
        </h2>
      </div>
      <div className="flex flex-col md:flex-row-reverse  ">
        <div className="w-full md:w-1/2  xs:p-8 md:pt-3  md:pr-6 flex justify-end  ">
          <img
            src={Image}
            alt="About Us"
            className="w-[90vh] h-[50vh] object-cover rounded-xl "
          />
        </div>

        <div className="w-full md:w-1/2 xs:p-8 md:pt-8 md:pl-12 flex justify-center item-center">
          <div className="text-center  ">

            <p className="text-lg md:text-2xl text-white mb-4">"Welcome to Flexfit, your premier destination for achieving your fitness goals!"</p>
            <p className="text-lg md:text-lg text-white mb-8">

              At Flexfit, we're dedicated to helping you unlock your full potential through personalized workout plans, customized meal plans, and intuitive progress tracking tools. Whether you're aiming to lose weight, build muscle, or enhance your overall health.
              Join us today and take the first step towards a healthier, happier you with Flexfit!"
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;