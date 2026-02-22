import blogHero from "../../../assets/images/blogHeroImg.png";
import blogHeroMob from "../../../assets/images/blogHeroMob.png";
import story1 from "../../../assets/svg/story1.svg";
import story3 from "../../../assets/svg/story3.svg";
import { useEffect } from "react";
import { AddNav } from "../../../components/navbar/AddNav";
export const BlogHero = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="w-full ">
      <AddNav />
      <div className="w-[90%] mx-auto md:w-full  md:pl-[5%] pb-10">
        <div className="md:flex justify-between gap-5 bg-[#FFFFFFB2]">
          <div className="w-full md:w-1/2 ">
            <h1 className="font-bold text-2xl md:text-6xl md:leading-[75px] pt-5 pb-5 md:pb-0 md:pt-16">
              HOSPITALITY NUGGETS WITH JUSTINA OVAT
            </h1>

            <div className="hidden md:flex  justify-between items-center gap-5 pt-28">
              <div className="flex flex-col items-center">
                <div>
                  <img
                    src={story1}
                    alt="icon"
                    className="w-4 h-4"
                    loading="lazy"
                  />
                </div>
                <p className="pt-4 text-sm font-semibold text-gray-700">
                  Life Stories
                </p>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-4 h-4 bg-gray-600 rounded-full"></div>
                <p className="pt-4 text-sm font-semibold text-gray-700">
                  Reflections
                </p>
              </div>

              <div className="flex flex-col items-center">
                <div>
                  <img
                    src={story3}
                    alt="icon"
                    className="w-4 h-4"
                    loading="lazy"
                  />
                </div>
                <p className="pt-4 text-sm font-semibold text-gray-700">
                  Realms of Ideas
                </p>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 hidden md:block">
            <img
              src={blogHero}
              alt="blog_img"
              className="w-full"
              loading="lazy"
            />
          </div>

          <div className="w-full md:w-1/2 block md:hidden">
            <img
              src={blogHeroMob}
              alt="blog_img"
              className="w-full"
              loading="lazy"
            />
          </div>

          <div className="flex  md:hidden justify-between items-center gap-5 pt-5">
            <div className="flex flex-col items-center">
              <div>
                <img
                  src={story1}
                  alt="icon"
                  className="w-4 h-4"
                  loading="lazy"
                />
              </div>
              <p className="pt-4 text-sm font-semibold text-gray-700">
                Life Stories
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-4 h-4 bg-gray-600 rounded-full"></div>
              <p className="pt-4 text-sm font-semibold text-gray-700">
                Reflections
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div>
                <img
                  src={story3}
                  alt="icon"
                  className="w-4 h-4"
                  loading="lazy"
                />
              </div>
              <p className="pt-4 text-sm font-semibold text-gray-700">
                Realms of Ideas
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
