import { motion } from 'framer-motion';
import stakeholder from '../../../assets/images/stakeholders.png';
import { stakeholders } from '../../../utils/data';
import { GoDotFill } from 'react-icons/go';
import { FaCircleCheck } from "react-icons/fa6";

export default function StakeHolder() {
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
        <div className="flex flex-col md:flex-row-reverse w-full justify-center gap-10">
          <div className="flex w-full lg:max-w-[32rem] flex-col">
            <img
              src={stakeholder}
              alt="joimg"
              loading="lazy"
              className="w-full object-cover h-full rounded-2xl"
            />
          </div>
          <div className="flex flex-col justify-center text-[#090F3A] gap-4">
            <span className="lg:block font-bold text-2xl md:text-3xl lg:text-4xl">
              Stakeholder Value
            </span>

            <p className="text-lg max-w-[34rem]">
              Delivering measurable Impact across your Organizations and
              partners.
            </p>
            <div className="border p-4 rounded-lg shadow-sm">
              <div className="flex gap-1 items-center">
                <GoDotFill className="text-5xl" />
                <span className="text-lg font-bold md:text-2xl">For Organizations</span>
              </div>
              <ul className="pl-3">
                {stakeholders.organizations.map((point, idx) => (
                  <li
                    key={idx}
                    className="text-sm md:text-base mt-1 leading-relaxed flex items-center gap-2"
                  >
                    <FaCircleCheck className="mr-4" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="border p-4 rounded-lg shadow-sm">
              <div className="flex gap-1 items-center">
                <GoDotFill className="text-5xl" />
                <span className="text-lg font-bold md:text-2xl">For Hospitality & Destination Partners</span>
              </div>
              <ul className="pl-3">
                {stakeholders.partners.map((point, idx) => (
                  <li
                    key={idx}
                    className=" text-sm md:text-base mt-1 leading-relaxed flex items-center gap-2"
                  >
                    <FaCircleCheck className="mr-4" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
