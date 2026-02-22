import just1 from '../../../assets/images/just1.png';
import just2 from '../../../assets/images/just2.png';
import just3 from '../../../assets/images/just3.png';
import just4 from '../../../assets/images/just4.png';
import just5 from '../../../assets/images/just5.png';
import mob1 from '../../../assets/images/mob1.png';
import mob2 from '../../../assets/images/mob2.png';

import './featured.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useState } from 'react';
export const JustOne = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="w-full bg-black py-10">
      <div className="w-[90%] mx-auto">
        <h1 className="font-bold text-2xl md:text-4xl leading-10 text-white pb-10">
          The Just One
        </h1>
        <div className="md:grid hidden grid-cols-6  gap-5 space-y-5 md:space-y-0">
          <div
            className="relative col-span-2"
            onMouseEnter={() => setHoveredIndex(1)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <img
              src={just1}
              alt="img"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            {hoveredIndex === 1 && (
              <div className="overlay">
                <h2 className="text-white font-bold text-2xl xl:text-4xl leading-9">
                  Building Hospitality Learning Cultures
                </h2>
                <p className="text-white text-xs xl:leading-8 leading-5  xl:text-base font-normal">
                  Justina Ovat helps hotels and hospitality organisations move
                  beyond training to build learning cultures that drive
                  consistent service, strong leadership, and measurable
                  performance outcomes
                </p>
              </div>
            )}
          </div>

          <div
            className="relative col-span-2"
            onMouseEnter={() => setHoveredIndex(2)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <img
              src={just2}
              alt="img"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            {hoveredIndex === 2 && (
              <div className="overlay">
                <h2 className="text-white font-bold text-2xl xl:text-4xl leading-9">
                  Learning Becomes Everyday Performance
                </h2>
                <p className="text-white text-xs xl:text-base font-normal leading-6 xl:leading-9">
                  {' '}
                  Justina partners with hospitality leaders to embed learning
                  into daily operations—enabling managers to coach, teams to
                  grow, and organisations to deliver exceptional guest
                  experiences.
                </p>
              </div>
            )}
          </div>

          <div
            className="relative col-span-2"
            onMouseEnter={() => setHoveredIndex(3)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <img
              src={just3}
              alt="img"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            {hoveredIndex === 3 && (
              <div className="overlay">
                <h2 className="text-white font-bold text-2xl xl:text-4xl leading-9">
                  Hospitality Meets Learning Strategy
                </h2>
                <p className="text-white text-xs xl:text-base font-normal leading-6 xl:leading-9">
                  With over a decade of experience across hotels, academia, and
                  professional development, Justina designs learning systems
                  that align people capability with operational and business
                  goals.
                </p>
              </div>
            )}
          </div>

          <div
            className="relative col-span-3"
            onMouseEnter={() => setHoveredIndex(4)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <img
              src={just4}
              alt="img"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            {hoveredIndex === 4 && (
              <div className="overlay">
                <h2 className="text-white font-bold text-2xl xl:text-4xl leading-9">
                  Elite <br />
                  Speaker
                </h2>
                <p className="text-white text-xs xl:text-base font-normal leading-6 xl:leading-9">
                  An exclusively exceptional speaker who articulates ideas with
                  clarity, precision and charisma; inspires actions beyond
                  motivation for major transformations, and a wealth of
                  experience that brings life to every concept and theory;
                  leaving a lasting impact
                </p>
              </div>
            )}
          </div>

          <div
            className="relative col-span-3"
            onMouseEnter={() => setHoveredIndex(5)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <img
              src={just5}
              alt="img"
              className=" w-full h-full object-cover"
              loading="lazy"
            />
            {hoveredIndex === 5 && (
              <div className="overlay">
                <h2 className="text-white font-bold text-2xl md:text-4xl leading-9">
                  Author <br />
                  Extraordinaire
                </h2>
                <p className="text-white text-xs xl:text-base font-normal leading-6 xl:leading-9">
                  Possess the touch of the most impressive authors who
                  communicate ideas and infuse their writing with a rich and
                  vivid style on a profound level. A glean at her recent book on
                  hospitality is evident of this fact and reveals a window to
                  her mind when translating truths, thoughts, ideas, and
                  practices of such transformational nature!
                </p>
              </div>
            )}
          </div>
        </div>

        <div className="block md:hidden px-3">
          <Slider {...settings}>
            <div
              className="relative col-span-2"
              onMouseEnter={() => setHoveredIndex(1)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <img
                src={just1}
                alt="img"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              {hoveredIndex === 1 && (
                <div className="overlay">
                  <h2 className="text-white font-bold text-2xl xl:text-4xl leading-9">
                    Building Hospitality Learning Cultures
                  </h2>
                  <p className="text-white text-xs xl:leading-8 leading-5  xl:text-base font-normal">
                    Justina Ovat helps hotels and hospitality organisations move
                    beyond training to build learning cultures that drive
                    consistent service, strong leadership, and measurable
                    performance outcomes.
                  </p>
                </div>
              )}
            </div>

            <div
              className="relative col-span-2"
              onMouseEnter={() => setHoveredIndex(2)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <img
                src={just2}
                alt="img"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              {hoveredIndex === 2 && (
                <div className="overlay">
                  <h2 className="text-white font-bold text-2xl xl:text-4xl leading-9">
                    Learning Becomes Everyday Performance
                  </h2>
                  <p className="text-white text-xs xl:text-base font-normal leading-6 xl:leading-9">
                    Justina partners with hospitality leaders to embed learning
                    into daily operations—enabling managers to coach, teams to
                    grow, and organisations to deliver exceptional guest
                    experiences.
                  </p>
                </div>
              )}
            </div>

            <div
              className="relative col-span-2"
              onMouseEnter={() => setHoveredIndex(3)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <img
                src={just3}
                alt="img"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              {hoveredIndex === 3 && (
                <div className="overlay">
                  <h2 className="text-white font-bold text-2xl xl:text-4xl leading-9">
                    Hospitality Meets Learning Strategy
                  </h2>
                  <p className="text-white text-xs xl:text-base font-normal leading-6 xl:leading-9">
                    With over a decade of experience across hotels, academia,
                    and professional development, Justina designs learning
                    systems that align people capability with operational and
                    business goals.
                  </p>
                </div>
              )}
            </div>

            <div
              className="relative col-span-3"
              onMouseEnter={() => setHoveredIndex(4)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <img
                src={mob2}
                alt="img"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              {hoveredIndex === 4 && (
                <div className="overlay">
                  <h2 className="text-white font-bold text-2xl xl:text-4xl leading-9">
                    Elite <br />
                    Speaker
                  </h2>
                  <p className="text-white text-xs xl:text-base font-normal leading-6 xl:leading-9">
                    An exclusively exceptional speaker who articulates ideas
                    with clarity, precision and charisma; inspires actions
                    beyond motivation for major transformations, and a wealth of
                    experience that brings life to every concept and theory;
                    leaving a lasting impact
                  </p>
                </div>
              )}
            </div>

            <div
              className="relative col-span-3"
              onMouseEnter={() => setHoveredIndex(5)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <img
                src={mob1}
                alt="img"
                className=" w-full h-full object-cover"
                loading="lazy"
              />
              {hoveredIndex === 5 && (
                <div className="overlay">
                  <h2 className="text-white font-bold text-2xl md:text-4xl leading-9">
                    Author <br />
                    Extraordinaire
                  </h2>
                  <p className="text-white text-xs xl:text-base font-normal leading-6 xl:leading-9">
                    Possess the touch of the most impressive authors who
                    communicate ideas and infuse their writing with a rich and
                    vivid style on a profound level. A glean at her recent book
                    on hospitality is evident of this fact and reveals a window
                    to her mind when translating truths, thoughts, ideas, and
                    practices of such transformational nature!
                  </p>
                </div>
              )}
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};
