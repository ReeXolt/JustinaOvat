import { Footer } from '../../components/footer/Footer';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { AddNav } from '../../components/navbar/AddNav';
import Hero from './components/Hero';
import Wehelpclients from './components/Wehelpclients';
import HowWeWork from './components/HowWeWork';
import WhoWeWorkWith from './components/WhoWeWorkWith';
import AboutUs from './components/AboutUs';
import Learning from './components/Learning';
import WhatWeDo from './components/WhatWeDo';
import Framework from './components/Framework';
import ServiceApps from './components/ServiceApps';
import StakeHolder from './components/StakeHolder';
import OurDifferentiator from './components/OurDifferentiator';
import EngangementModel from './components/EngangementModel';
import TheOutcome from './components/TheOutcome';

export const Organizations = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      let elem = document.getElementById(location.hash.slice(1));
      if (elem) {
        elem.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }
  }, [location]);
  return (
    <section>
      <AddNav />
      <Hero />
      <AboutUs />
      <Wehelpclients />
      <HowWeWork />
      <WhoWeWorkWith />
      <Learning />
      <WhatWeDo />
      <Framework />
      <ServiceApps />
      <StakeHolder />
      <OurDifferentiator />
      <EngangementModel />
      <TheOutcome />
      <Footer />
    </section>
  );
};
