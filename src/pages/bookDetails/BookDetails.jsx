import { Footer } from '../../components/footer/Footer';
import bookImg from '../../assets/images/bookHeroImg.png';
import handbookImg from '../../assets/images/handbookImg.png';
import { Reviews } from './Reviews';
import { VideoSection } from './VideoSection';
import { NewsLetter } from '../../components/newsletter/NewsLetter';
import { useEffect } from 'react';
import { AddNav } from '../../components/navbar/AddNav';
import { sponsors } from '../../utils/data';
import { Link, useLocation } from 'react-router-dom';

export const BookDetails = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      let elem = document.getElementById(location.hash.slice(1));
      if (elem) {
        elem.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
  }, [location]);
  return (
    <section className="w-full">
      <AddNav />
      <div className="w-[90%] mx-auto pb-10" id='my-hospitality'>
        <div className="md:flex gap-5 justify-between">
          <div className="pb-5 block md:hidden ">
            <h1 className="font-bold text-4xl text-black">
              My Hospitality
            </h1>
            <p className="leading-6 text-black font-medium text-base pt-5">
              Hallmarks of True Hospitality Thoughts and Lessons
            </p>
          </div>

          <div className="w-full md:w-1/2 ">
            <img src={bookImg} alt="img" loading="lazy" />
          </div>
          <div className="w-full md:w-1/2 py-5 md:px-10 ">
            <div className="hidden md:block">
              <h1 className="font-bold text-4xl text-black">
                My Hospitality
              </h1>
              <p className="leading-6 text-black font-medium text-base pt-5">
                Hallmarks of True Hospitality Thoughts and Lessons
              </p>
            </div>

            <div className="pt-5 md:pt-20">
              <p className="text-center font-medium text-base">
                ORDER YOUR COPY
              </p>
              <div className="grid grid-cols-3 gap-5 pt-0  md:pt-10">
                {sponsors.my_hospitality.map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-center items-center  py-2 px-5"
                  >
                    <Link to={item.link} target="_blank" rel="noreferrer">
                      <img src={item.img} alt="img" loading="lazy" />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[90%] mx-auto pb-10" id='the-service-innovators-handbook'>
        <div className="md:flex gap-5 justify-between">
          <div className="pb-5 block md:hidden ">
            <h1 className="font-bold text-4xl text-black">
              The Service Innovators Handbook
            </h1>
            <p className="leading-6 text-black font-medium text-base pt-5">
              Hallmarks of True Hospitality Thoughts and Lessons
            </p>
          </div>

          <div className="w-full md:w-1/2 ">
            <img src={handbookImg} alt="img" loading="lazy" />
          </div>
          <div className="w-full md:w-1/2 py-5 md:px-10 ">
            <div className="hidden md:block">
              <h1 className="font-bold text-4xl text-black">
                The Service Innovators Handbook
              </h1>
              <p className="leading-6 text-black font-medium text-base pt-5">
                10 Hacks For Service Enhancement For Service-Related Business
              </p>
            </div>

            <div className="pt-5 md:pt-20">
              <p className="text-center font-medium text-base">
                ORDER YOUR COPY
              </p>
              <div className="grid grid-cols-3 gap-5 pt-0  md:pt-10">
                {sponsors.the_Service_innovators_handbook.map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-center items-center  py-2 px-5"
                  >
                    <Link to={item.link} target="_blank" rel="noreferrer">
                      <img src={item.img} alt="img" loading="lazy" />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Reviews />
      <VideoSection />
      <NewsLetter />
      <Footer />
    </section>
  );
};
