import React from 'react'
import Hero from '../components/Hero'
import HowItWorks from '../components/HowItWorks'
import ServicesWrok from '../components/ServicesWrok'

const Home = () => {
  return (
    <div className='mt-6 md:mt-8'>
      <Hero />
      <HowItWorks />
      <ServicesWrok />
    </div>
  )
}

export default Home
