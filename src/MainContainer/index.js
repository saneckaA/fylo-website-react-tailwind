import React from 'react'
import Header from '../Header';
import MainSection from '../MainSection';
import FeaturesSection from '../FeaturesSection';
import ProductiveSection from '../ProductiveSection';
import TestimonialsSection from '../TestimonilasSection';
import EarlySection from '../EarlySection';
import Footer from '../Footer';

const MainContainer = () => {
  return (
    <div>
        <Header />
        <MainSection />
        <FeaturesSection />
        <ProductiveSection />
        <TestimonialsSection />
        <EarlySection />
        <Footer />
    </div>
  )
}

export default MainContainer;