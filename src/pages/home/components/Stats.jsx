import circleDot from "../../../assets/images/circleDot.png";
import circleDot3 from "../../../assets/images/circleDot3.png";
import CountUp from "react-countup";
export const Stats = () => {
  return (
    <section className="bg-black text-white pt-0 pb-10 md:py-10 relative">
      <div className="md:grid grid-cols-4  w-[90%] mx-auto">
        <div className="text-center pb-2 py-2">
          <h1 className="font-bold text-2xl md:text-4xl ">
            <CountUp end={100} duration={10} />+
          </h1>
          <p className="font-medium text-sm pt-3 md:pt-5">COMPANIES SERVED</p>
        </div>
        <div className="md:border-x-2 border-y-2 md:border-y-0 py-2 text-center">
          <h1 className="font-bold text-2xl md:text-4xl">
            {" "}
            <CountUp end={10} duration={10} />
            k+
          </h1>
          <p className="font-medium text-sm pt-3 md:pt-5">
            CLIENT SERVICE OPTIMIZED
          </p>
        </div>
        <div className="md:border-r-2 border-b-2 md:border-b-0 py-2 text-center">
          <h1 className="font-bold text-2xl md:text-4xl ">
            {" "}
            <CountUp end={20} duration={10} />
            k+
          </h1>
          <p className="font-medium text-sm pt-3 md:pt-5">IMPACT REACHED</p>
        </div>
        <div className="text-center py-2">
          <h1 className="font-bold text-2xl md:text-4xl ">
            {" "}
            <CountUp end={50} duration={10} />
            k+
          </h1>
          <p className="font-medium text-sm pt-3 md:pt-5">SPEAKING AUDIENCE</p>
        </div>
      </div>
      <div className="absolute xl:block hidden  xl:left-0 xl:bottom-0 ">
        <img src={circleDot} alt="img" loading="lazy" />
      </div>
      <div className="absolute block xl:hidden left-0 bottom-0 ">
        <img src={circleDot3} alt="img" loading="lazy" />
      </div>
    </section>
  );
};
