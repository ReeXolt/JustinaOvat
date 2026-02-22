import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative w-full bg-calabarBgMob bg-no-repeat  md:bg-calabarBgMob bg-cover bg-center">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <div className="flex w-full h-[83dvh] bg-black/60 justify-center items-center p-4">
          <div className="max-w-[40rem] flex flex-col">
            <div className="gap-5 font-playfair flex flex-col">
              <h2 className="text-sm md:text-base border-2 border-white w-fit rounded-lg p-1 text-white font-bold">
                THE CALABAR CONCIERGE
              </h2>
              <h2 className="text-4xl md:text-5xl text-white">
                Trusted Local Access.
              </h2>
              <h2 className="text-4xl md:text-5xl text-white">
                Seamless Execution.
              </h2>
            </div>
            <span className="text-gray-400 mt-10 mb-5">
              We provide discreet, professionally managed coordination for
              executives, diaspora clients, and corporates in Calabar.
            </span>
            <div className="flex gap-4">
              <Link
                to="#consultation"
                className="bg-white text-black px-6 py-2 rounded-2xl hover:bg-[#6a7228] transition-colors"
              >
                Request Private Consultation
              </Link>
              <Link
                to="#services"
                className="border border-black text-white px-6 py-2 rounded-2xl hover:bg-white transition-colors ml-4"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
