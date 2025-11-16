import React from 'react'
import Hero from '../components/Hero'
import HowItWorks from '../components/HowItWorks'
import ServicesWrok from '../components/ServicesWrok'
import Brands from '../components/Brands'
import ServiceFeatures from '../components/ServiceFeatures'
import Merchant from '../components/Merchant'
import Reviews from '../components/Reviews'
import FAQ from '../components/FAQ'



const reviewsPromise = fetch('/reviews.json').then(res => res.json())

const Home = () => {
  return (
    <div className='mt-6 md:mt-8'>
      <Hero />
      <HowItWorks />
      <ServicesWrok />
      <Brands />
      <ServiceFeatures />
      <Merchant />
      <Reviews reviewsPromise={reviewsPromise} />
      <FAQ />
    </div>
  )
}

export default Home
