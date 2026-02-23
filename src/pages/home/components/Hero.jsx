import { Navbar } from '../../../components/navbar/Navbar';

import { motion } from 'framer-motion';

export const Hero = () => {
  return (
    <section className="relative w-full bg-black bg-heroOverlayMob   bg-no-repeat  md:bg-heroOverlay  pb-20 h-[850px] md:h-auto">
      {' '}
      <Navbar />
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
        className=" w-[90%] mx-auto md:flex   md:justify-end  items-center z-20"
      >
        <div className="hidden md:block w-full md:w-1/2  text-white pt-20 pl-10">
          {' '}
          <h1 className="custom-font text-3xl md:text-6xl lg:text-[80px] 2xl:text-9xl font-normal md:leading-[65px]">
            Tutor. <br />
            Author. <br />
            Innovator. <br />
            Elite Speaker. <br />
            Entrepreneur.
          </h1>
          <p className="pt-5 leading-6 md:leading-8 text-base md:text-2xl">
            Justina is a Hospitality Learning Culture Consultant helping hotels
            build learning systems that drive performance, leadership, and
            retention.
          </p>
        </div>
        <div className="block md:hidden absolute top-[60%] w-[90%]  text-white ">
          {' '}
          <h1 className="custom-font text-3xl md:text-6xl lg:text-[80px] 2xl:text-9xl font-normal md:leading-[65px]">
            Tutor. <br />
            Author. <br />
            Innovator. <br />
            Elite Speaker. <br />
            Entrepreneur.
          </h1>
          <p className="pt-5  leading-6 md:leading-8 text-base md:text-2xl">
            Justina is a Hospitality Learning Culture Consultant helping hotels build learning systems that drive performance, leadership, and retention.
          </p>
        </div>
      </motion.div>
    </section>
  );
};
