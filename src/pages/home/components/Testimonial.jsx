import test1 from "../../../assets/images/test1.png";
// import test2 from "../../../assets/images/test2.png";
import test3 from "../../../assets/images/test3.png";
import test4 from "../../../assets/images/test4.png";
import test5 from "../../../assets/images/test5.png";
import test6 from "../../../assets/images/test6.png";

export const Testimonial = () => {
  return (
    <section className="w-full bg-black text-white py-10">
      <h1 className="text-center font-bold text-2xl md:text-4xl">
        Viewpoints About Justina’s Influence
      </h1>

      <div className=" bg-testimonialBg  bg-center  bg-no-repeat md:h-[700px] w-full mt-10">
        <div className="grid grid-cols-3 space-y-32  w-[70%] mx-auto pt-20 ">
          <div className="col-span-3 flex justify-center">
            <div className="relative group">
              <img src={test1} alt="img" className="" loading="lazy" />
              <div className="absolute w-[300px] md:w-[500px] left-1/2  transform -translate-x-1/2  bg-gray-800  rounded-md bg-cover bg-no-repeat text-white opacity-90 transition-opacity duration-300  hidden group-hover:block p-5  backdrop-blur-xl z-10">
                <div>
                  <p className="font-semibold text-xs md:text-sm">
                    Justina&apos;s expertise in HR and customer service can be
                    described as an avant-garde. Her dedication to duty is
                    military precision and her focus is unwavering. I absolutely
                    would recommend her to organizations seeking optimum results
                  </p>

                  <div className="flex justify-end flex-col items-start gap-1 pt-5 text-xs md:text-sm font-medium ">
                    <p>Kunle Lawal</p>
                    <p>Executive Director, Electoral College Nigeria</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-3  flex justify-between">
            <div className="relative group">
              <img src={test6} alt="img" className="" loading="lazy" />
              <div className="absolute  w-[300px] md:w-[400px]  left-1/2 top-[-160px]  md:top-[100px] z-10  transform -translate-x-1/2  bg-gray-800  rounded-md bg-cover bg-no-repeat text-white opacity-90 transition-opacity duration-300  hidden group-hover:block p-5 backdrop-filter backdrop-blur-2xl ">
                <div>
                  <p className="font-semibold text-xs md:text-sm">
                    Justina is an invaluable asset that is innovative and
                    inspire a huge drive for success as a mindset and in
                    practice
                  </p>

                  <div className="flex justify-end  gap-1 flex-col  items-start pt-5 text-xs md:text-sm font-medium ">
                    <p>Nkechi Usani</p>
                    <p>Chief Registrar, Cross River State Judiciary</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative group">
              <img src={test3} alt="img" className="" loading="lazy" />
              <div className="absolute w-[300px] md:w-[500px] left-[-30px]  md:left-[10px] z-10 transform -translate-x-1/2  bg-gray-800  rounded-md bg-cover bg-no-repeat text-white opacity-90 transition-opacity duration-300  hidden group-hover:block p-5 backdrop-filter backdrop-blur-2xl ">
                <div>
                  <p className="font-semibold text-xs md:text-sm">
                    Justina Ovat is the epitome of excellent and life-long
                    memorable client experience in the hospitality industry; an
                    asset that every hospitality establishments need in their
                    corner!
                  </p>

                  <div className="flex justify-end flex-col  gap-1  items-start pt-5 text-xs md:text-sm font-medium ">
                    <p>Ndifreke Patrick</p>
                    <p>Co-Founder 7Ace Consult and Founder Arc Initiative</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-3 flex justify-between">
            <div className="relative group">
              <img src={test5} alt="img" className="" loading="lazy" />
              <div className="absolute w-[300px] md:w-[500px] left-[100px] md:left-[70px] z-10 transform -translate-x-1/2  bg-gray-800  rounded-md bg-cover bg-no-repeat text-white opacity-90 transition-opacity duration-300  hidden group-hover:block p-5 backdrop-filter backdrop-blur-2xl ">
                <div>
                  <p className="font-semibold text-xs md:text-sm">
                    Justina Ovat navigates complex projects with grace and
                    precision. She has got an unwavering dedication, exceptional
                    work ethic, and outstanding professional competence
                  </p>

                  <div className="flex justify-end  gap-1 flex-col items-start pt-5 text-xs md:text-sm font-medium ">
                    <p>Uchenna Achunine</p>
                    <p>
                      Director, Business Development and Communications,
                      Nigerian Conservation Foundation (NCF)
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative group">
              <img src={test4} alt="img" className="" loading="lazy" />
              <div className="absolute  w-[300px] md:w-[500px] left-[-30px] md:left-[10px] z-10 transform -translate-x-1/2  bg-gray-800  rounded-md bg-cover bg-no-repeat text-white opacity-90 transition-opacity duration-300  hidden group-hover:block p-5 backdrop-filter backdrop-blur-2xl ">
                <div>
                  <p className="font-semibold text-xs md:text-sm">
                    More than a Hospitality Professional, Justina Ovat is a
                    whirlwind of passion and expertise. Her depth of knowledge
                    is as awe-inspiring as her strategic vision. She delivers
                    results and ignites change, EVERYTIME!
                  </p>

                  <div className="flex justify-end  gap-1 flex-col  items-start pt-5 text-xs md:text-sm font-medium ">
                    <p>Mmanti Umoh</p>
                    <p>Senior Partner, The PurplePatch Consults</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
