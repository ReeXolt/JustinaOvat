import { Footer } from '../../components/footer/Footer';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { AddNav } from '../../components/navbar/AddNav';
import Hero from './components/Hero';
import WhoWeServe from './components/WhoWeServe';
import OurServices from './components/OurServices';
import SecondService from './components/HowItWorks';
import OurCommitment from './components/OurCommitment';
import Inquiries from './components/Inquiries';

export const AfieguEvents = () => {
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
      <WhoWeServe />
      <OurServices />
      <SecondService />
      <OurCommitment />
      <Inquiries />
      <Footer />
    </section>
  );
};
