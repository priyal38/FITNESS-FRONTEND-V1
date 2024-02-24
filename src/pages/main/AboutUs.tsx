import React from 'react'
import Header from '../../components/Header'
import img from '../../images/2290.jpg'

type Props = {}

const AboutUs = (props: Props) => {
  return (
    <div>
      <Header />
      <section className='text-white'>
        <h1 className='text-white text-3xl '> About us</h1>
        <div className='container flex justify-center items-center '>
          <div className='flex'>
            <img src={img} alt="123" className='w-1/2 h-1/2 ' />
          </div>
          <div>
            <p>
            Welcome to Flexfit
             where we're dedicated to helping you reach your fitness goals and live your best life. Our personalized workout plans, customized meal plans, and progress tracking tools make it easy to achieve lasting results. With expert guidance from our certified trainers and nutritionists, along with a supportive community of fellow fitness enthusiasts, you'll find the motivation and inspiration you need to succeed. Join us today and take the first step towards a healthier, happier you!
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutUs