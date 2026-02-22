// import featured from "../../../assets/images/featured.png";
import circleDot from "../../../assets/images/circleDot1.png";
import circleDot2 from "../../../assets/images/circleDot2.png";

import { featuredLogo } from "../../../utils/data";
import "./featured.css";

export const Featured = () => {
  return (
    <div className="bg-black py-10 text-white relative">
      <div className="absolute xl:block hidden right-0 top-0 z-0">
        <img src={circleDot} alt="img" loading="lazy" />
      </div>
      <div className="absolute block xl:hidden right-0 top-0 z-0">
        <img src={circleDot2} alt="img" loading="lazy" />
      </div>
      <div className="text-center font-bold text-3xl pb-5">
        <p>Featured In</p>
      </div>
      <div className=" relative z-30 mx-10">
        <div className="w-full  pb-3  grid grid-cols-4  md:grid-cols-8  gap-5 ">
          {featuredLogo.map((item) => (
            <div key={item.id}>
              <img
                src={item.logo}
                alt="Logo"
                className=" w-full"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
