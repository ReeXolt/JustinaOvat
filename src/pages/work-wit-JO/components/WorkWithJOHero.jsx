import { useEffect } from 'react';
import { Navbar } from '../../../components/navbar/Navbar';

export const WorkWithJOHero = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="w-full">
      <div className="w-full bg-workBgMob md:bg-workBg bg-no-repeat bg-cover lg:bg-center pb-10 xl:h-[120vh]">
        <Navbar />
        <div className="flex flex-col w-[90%] mx-auto items-center h-[70vh] justify-between">
          <h1 className="text-xl md:text-3xl xl:text-4xl font-bold text-center pt-16 md:pt-10 leading-[44px] text-white">
            Hospitality Learning Culture Consultant | Learning Experience
            Strategist /hero
          </h1>
          <div className='mt-10 lg:text-xl flex flex-col gap-10 max-w-[90%] lg:max-w-[80%] lg:flex-row'>
            <p className=" text-white">
              I work with hotels, hospitality groups, and service-driven
              organisations to design and embed learning cultures that drive
              performance, leadership effectiveness, and workforce retention.
            </p>
            <p className="text-white">
              Most hospitality businesses invest in training. Few build learning
              systems that actually translate into consistent service and
              capable leadership.
            </p>
          </div>
          <p className="text-white font-bold italic">That gap is where I work.</p>
        </div>
      </div>
    </section>
  );
};
