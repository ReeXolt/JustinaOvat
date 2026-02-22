// import React from 'react'

import { useEffect } from 'react';
import { Navbar } from '../../components/navbar/Navbar';
import Hero from './components/Hero';
import Welcome from './components/Welcome';
import Mission from './components/Mission';
import { Footer } from '../../components/footer/Footer';

export default function Podcast() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="w-full flex flex-col gap-1">
      <div className="w-full bg-podcastBgMob md:bg-podcastBgMob bg-no-repeat bg-cover bg-[center_top_20%] pb-10 xl:h-[120vh]">
        <Navbar />
        <Hero />
      </div>
      <Welcome />
      <Mission />
      <Footer />
    </section>
  );
}
