import { motion } from 'framer-motion';
import outcome1 from '../../../assets/images/outcome1.png';
import outcome2 from '../../../assets/images/outcome2.png';
import { outcomeArr  } from '../../../utils/data';

export default function TheOutcome() {
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
        className="mx-auto w-[90%] gap-10 py-10 flex flex-col"
      >
        <div className="flex flex-col w-full text-center gap-3 ">
          <h2 className="text-3xl md:text-4xl font-bold text-black">
            The Outcome
          </h2>
          <p className="text-black">
            Organizations working with The ServiceCraft Company gain:
          </p>
        </div>
  <div className="flex flex-col md:flex-row w-full gap-6 lg:gap-12 xl:gap-20">
  <div className="w-full lg:w-1/2 overflow-hidden rounded-2xl">
    <img
      src={outcome1}
      alt="Outcome 1"
      loading="lazy"
      className="w-full h-auto object-cover max-w-full"  // ← key fixes
    />
  </div>

  <div className="w-full lg:w-1/2 overflow-hidden rounded-2xl">
    <img
      src={outcome2}
      alt="Outcome 2"
      loading="lazy"
      className="w-full h-auto object-cover max-w-full"
    />
  </div>
</div>
        <div className="grid gap-6 lg:gap-12  md:grid-cols-2 lg:grid-cols-5 ">
          {outcomeArr.map((item, index) => (
            <div
              key={index}
              className={`bg-[#F8F9FA] text-black shadow-lg p-6 rounded-lg justify-center items-center text-center flex flex-col gap-2`}
            >
              <div
                className={` p-2 rounded-md w-8 h-8 flex items-center justify-center`}
              >
                {item.icon}
              </div>
              <h3 className="text-sm font-bold">{item.title}</h3>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
