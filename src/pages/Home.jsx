import React from 'react'
import Hero from '../components/Hero'
import HowItWorks from '../components/HowItWorks'
import ServicesWrok from '../components/ServicesWrok'
import Brands from '../components/Brands'
import ServiceFeatures from '../components/ServiceFeatures'

const Home = () => {
  return (
    <div className='mt-6 md:mt-8'>
      <Hero />
      <HowItWorks />
      <ServicesWrok />
      <Brands />
      <ServiceFeatures />
    </div>
  )
}

export default Home
