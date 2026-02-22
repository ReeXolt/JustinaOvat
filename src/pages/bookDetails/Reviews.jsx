import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export const Reviews = () => {
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
  return (
    <section className="w-full py-10 bg-reviewBg bg-cover bg-center bg-no-repeat ">
      <div className="w-[90%] mx-auto">
        <div className="md:grid hidden  grid-cols-3 gap-5">
          <div className="space-y-5">
            <div className="rounded-lg bg-white p-5 shadow-md">
              <p className="text-xs font-normal leading-5 pb-5">
                Essentially, hospitality welcome(s) a group of people and ensure
                they are all well taken care of
              </p>
              <div className="flex gap-5 items-center">
                <div>
                  <p className="text-sm font-semibold">
                    Francois Ojuwku-Booyse
                  </p>
                  <p className="text-xs font-medium">
                    Seasoned Hospitality General Manager
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-lg bg-white p-5 shadow-md">
              <p className="text-xs font-normal leading-5 pb-5">
                Hospitality is a way of Life. Hospitality is Life
              </p>
              <div className="flex gap-5 items-center">
                <div>
                  <p className="text-sm font-semibold">Excel Opuaru</p>
                  <p className="text-xs font-medium">
                    Managing Director, XcellenciO Hospitality
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-lg bg-white p-5 shadow-md">
              <p className="text-xs font-normal leading-5 pb-5">
                Hospitality is an act of kindness that elicits a profound
                positive moment of magic in the emotional bank of the guest,
                visitor or stranger.
              </p>
              <div className="flex gap-5 items-center">
                <div>
                  <p className="text-sm font-semibold">Michael Idawko</p>
                  <p className="text-xs font-medium">
                    Author, The ABC of Customer Service
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-5 md:py-10 py-5">
            <div className="rounded-lg bg-white p-5 shadow-md">
              <p className="text-xs font-normal leading-5 pb-5">
                My hospitality is a culture where the service experience is
                unforgettable for both you and the consumer.
              </p>
              <div className="flex gap-5 items-center">
                <div>
                  <p className="text-sm font-semibold">Amaka Amatokwu-Ndekwu</p>
                  <p className="text-xs font-medium">
                    Founder Women in Hospitality of Nigeria (WIHN) & AAWTH
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-lg bg-white p-5 shadow-md">
              <p className="text-xs font-normal leading-5 pb-5">
                Welcoming with goodwill, generosity and friendliness is the
                backbone of hospitality.
              </p>
              <div className="flex gap-5 items-center">
                <div>
                  <p className="text-sm font-semibold">Didier Bayeye</p>
                  <p className="text-xs font-medium">
                    MD of Global Travel Worlds of Experts Service
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-lg bg-white p-5 shadow-md ">
              <p className="text-xs font-normal leading-5 pb-5">
                Your guest must feel welcome and pampered. The host has to
                anticipate any wish your guest may have. Service to your guest
                must be a pleasure for you and not a duty. Vincenzo F. Orlandini
                Managing Director of Leisure Wings and Cruise Services LTD.
              </p>
              <div className="flex gap-5 items-center">
                <div>
                  <p className="text-sm font-semibold">Vincenzo F. Orlandini</p>
                  <p className="text-xs font-medium">
                    Managing Director of Leisure Wings and Cruise Services LTD.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-5">
            <div className="rounded-lg bg-white p-5 shadow-md">
              <p className="text-xs font-normal leading-5 pb-5">
                Anyone involved in act of looking after or taking care of
                another can be said to be in the hospitality business.
              </p>
              <div className="flex gap-5 items-center">
                <div>
                  <p className="text-sm font-semibold">Wasiu Babalola</p>
                  <p className="text-xs font-medium">
                    Honourary Chairman, International Branch of Commitee of the
                    Institute of Hospitality (IoH), UK-Nigeria International
                    Branch
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-lg bg-white p-5 shadow-md">
              <p className="text-xs font-normal leading-5 pb-5">
                Hospitality is loving people enough to create a memorable
                experience while serving and connecting with them.
              </p>
              <div className="flex gap-5 items-center">
                <div>
                  <p className="text-sm font-semibold">Ntewak Umoh</p>
                  <p className="text-xs font-medium">
                    Founder, Hotel agency Room
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-lg bg-white p-5 shadow-md">
              <p className="text-xs font-normal leading-5 pb-5">
                Hospitality is showing empathy and care to every guest; it goes
                beyond reciting the lines in the company’s SOP.
              </p>
              <div className="flex gap-5 items-center">
                <div>
                  <p className="text-sm font-semibold">Brian Efa</p>
                  <p className="text-xs font-medium">
                    Founder/President of Nigerian Hotel and Tourism and
                    Investment Conference
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-5  block md:hidden px-3">
          <Slider {...settings}>
            <div className="rounded-lg bg-white p-5 shadow-md h-44">
              <p className="text-xs font-normal leading-5 pb-5">
                Essentially, hospitality welcome(s) a group of people and ensure
                they are all well taken care of
              </p>

              <div>
                <p className="text-sm font-semibold">Francois Ojuwku-Booyse</p>
                <p className="text-xs font-medium">
                  {" "}
                  Seasoned Hospitality General Manager
                </p>
              </div>
            </div>

            <div className="rounded-lg bg-white p-5 shadow-md h-44">
              <p className="text-xs font-normal leading-5 pb-5">
                Hospitality is a way of Life. Hospitality is Life
              </p>

              <div>
                <p className="text-sm font-semibold">Excel Opuaru</p>
                <p className="text-xs font-medium">
                  Managing Director, XcellenciO Hospitality
                </p>
              </div>
            </div>

            <div className="rounded-lg bg-white p-5 shadow-md h-44">
              <p className="text-xs font-normal leading-5 pb-5">
                Hospitality is an act of kindness that elicits a profound
                positive moment of magic in the emotional bank of the guest,
                visitor or stranger.
              </p>
              <div className="flex gap-5 items-center">
                <div>
                  <p className="text-sm font-semibold">Michael Idawko</p>
                  <p className="text-xs font-medium">
                    Author, The ABC of Customer Service
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-lg bg-white p-5 shadow-md h-44">
              <p className="text-xs font-normal leading-5 pb-5">
                My hospitality is a culture where the service experience is
                unforgettable for both you and the consumer.
              </p>
              <div className="flex gap-5 items-center">
                <div>
                  <p className="text-sm font-semibold">
                    Amaka Amatokwu-Ndekwus
                  </p>
                  <p className="text-xs font-medium">
                    Founder Women in Hospitality of Nigeria (WIHN) & AAWTH
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-lg bg-white p-5 shadow-md h-44">
              <p className="text-xs font-normal leading-5 pb-5">
                Welcoming with goodwill, generosity and friendliness is the
                backbone of hospitality.
              </p>
              <div className="flex gap-5 items-center">
                <div>
                  <p className="text-sm font-semibold">Didier Bayeyes</p>
                  <p className="text-xs font-medium">
                    MD of Global Travel Worlds of Experts Service
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-lg bg-white p-5 shadow-md h-44">
              <p className="text-xs font-normal leading-5 pb-5">
                Your guest must feel welcome and pampered. The host has to
                anticipate any wish your guest may have. Service to your guest
                must be a pleasure for you and not a duty.
              </p>
              <div className="flex gap-5 items-center">
                <div>
                  <p className="text-sm font-semibold">Vincenzo F. Orlandini</p>
                  <p className="text-xs font-medium">
                    Managing Director of Leisure Wings and Cruise Services LTD.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-lg bg-white p-5 shadow-md h-44">
              <p className="text-xs font-normal leading-5 pb-5">
                Anyone involved in act of looking after or taking care of
                another can be said to be in the hospitality business.
              </p>
              <div className="flex gap-5 items-center">
                <div>
                  <p className="text-sm font-semibold">Wasiu Babalola</p>
                  <p className="text-xs font-medium">
                    Honourary Chairman, International Branch of Commitee of the
                    Institute of Hospitality (IoH), UK-Nigeria International
                    Branch
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-lg bg-white p-5 shadow-md h-44">
              <p className="text-xs font-normal leading-5 pb-5">
                Hospitality is loving people enough to create a memorable
                experience while serving and connecting with them.
              </p>
              <div className="flex gap-5 items-center">
                <div>
                  <p className="text-sm font-semibold">Ntewak Umoh</p>
                  <p className="text-xs font-medium">
                    Founder, Hotel agency Room
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-lg bg-white p-5 shadow-md h-44">
              <p className="text-xs font-normal leading-5 pb-5">
                Hospitality is showing empathy and care to every guest; it goes
                beyond reciting the lines in the company’s SOP.
              </p>
              <div className="flex gap-5 items-center">
                <div>
                  <p className="text-sm font-semibold">Brian Efa</p>
                  <p className="text-xs font-medium">
                    Founder/President of Nigerian Hotel and Tourism and
                    Investment Conference
                  </p>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};
