import { motion } from 'framer-motion';
// import service1 from '../../../assets/images/service1.png';
// import service2 from '../../../assets/images/service2.png';
// import service3 from '../../../assets/images/service3.png';
import learning from '../../../assets/images/learning.png';
import { Link } from 'react-router-dom';

export default function Learning() {
  return (
    <section className="bg-[#faeffa] py-10">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
        className="mx-auto w-[90%] flex flex-col md:flex-row"
      >
        <div className="flex flex-col lg:flex-row-reverse w-full justify-around gap-10">
          <div className="flex w-full lg:max-w-[32rem] flex-col">
            <img src={learning} alt="joimg" loading="lazy" className="w-full" />
          </div>
          <div className="flex flex-col justify-evenly gap-4">
            <span className="lg:block font-bold text-4xl lg:text-5xl">
              Learning Experiment Management
            </span>

            <p className="text-lg text-gray-700 max-w-[34rem]">
              We design, manage, and optimize structured learning ecosystems
              that align directly with organizational strategy, performance
              outcomes, and capability development.{' '}
            </p>
            <div className="flex text-[10px] sm:text-base gap-6">
              <Link
                target="blank"
                to="https://staging3.beetcore.com.ng/contact-us/"
                className="bg-[#592559] text-white px-6 py-2 rounded-full mt-4 hover:bg-gray-800 text-center transition-colors duration-300"
              >
                SCHEDULE CONSULTATION
              </Link>
              <Link
                target="blank"
                to="https://staging3.beetcore.com.ng/our-services/"
                className="border-2 border-[#592559] text-[#592559] font-bold px-6 py-2 rounded-full mt-4 hover:text-white hover:bg-gray-800 text-center transition-colors duration-300"
              >
                VIEW OUR APPROACH
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
