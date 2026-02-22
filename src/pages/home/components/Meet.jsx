import meetImg2 from '../../../assets/images/meetImg2.png';
import { motion } from 'framer-motion';
export const Meet = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5 }}
      variants={{
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 },
      }}
      className="w-full bg-black text-white py-10 relative z-20"
    >
      <div className="w-[90%] mx-auto xl:grid grid-cols-2 gap-4 space-y-5 xl:space-y-0">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 2 }}
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <img
            src={meetImg2}
            alt="img"
            className="w-full h-full"
            loading="lazy"
          />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 2 }}
          variants={{
            hidden: { opacity: 0, y: -50 },
            visible: { opacity: 1, y: 0 },
          }}
          className=" bg-meetGradient h-auto p-4 md:p-10   rounded-2xl"
        >
          <h1 className="font-bold text-2xl  md:text-4xl text-center md:text-left leading-7 pb-5 md:pb-10">
            Meet Justina Ovat
          </h1>
          <div className="text-justify text-base 2xl:text-3xl font-normal leading-6 space-y-2">
            <p>
              {' '}
              Justina Ovat is a Hospitality Learning Culture Consultant who
              works with hotels and service-driven organisations to build
              learning systems that drive performance, leadership effectiveness,
              and workforce retention.
            </p>
            <p>
              With over a decade of experience across hospitality, tourism, and
              academic environments, Justina helps organisations move beyond
              ad-hoc training to intentional learning cultures, where learning
              is leadership-owned, embedded into operations, and directly linked
              to business outcomes.
            </p>
            <p>
              {' '}
              Her work focuses on strengthening supervisors and first-time
              managers, improving service consistency, and creating sustainable
              learning systems that support long-term growth.
            </p>
            <p>
              {' '}
              Justina has worked with hospitality businesses, institutions, and
              industry platforms across Africa.
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};
