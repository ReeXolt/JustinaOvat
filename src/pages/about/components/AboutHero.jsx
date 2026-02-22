import { useEffect } from "react";
import aboutImg from "../../../assets/images/aboutImg.png";
import pattern from "../../../assets/images/aboutPattern.png";
import "./about.css";
export const AboutHero = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="w-[90%] mx-auto xl:flex gap-10 justify-between space-y-10 xl:space-y-0 items-center py-10">
      <div className="w-full xl:w-[30%] relative">
        <div className="z-10 relative">
          <img
            src={aboutImg}
            alt="Justina Ovat"
            className="w-full rounded-lg"
            loading="lazy"
          />
        </div>

        <div className="absolute xl:block hidden left-[-25%] md:top-[60%] top-[50%]  animate-zoom">
          <img
            src={pattern}
            alt="Justina Ovat"
            className="w-full"
            loading="lazy"
          />
        </div>
      </div>
      <div className="w-full xl:w-[60%]">
        <h1 className="custom-font font-normal text-5xl text-center xl:text-left md:text-7xl pb-5">
          Who is Justina Ovat
        </h1>
        <div className="text-sm font-normal space-y-2 text-justify">
          <p className="leading-6 ">
            Justina Ovat is a multi-award-winning hospitality professional! She
            is the Chief Executive Officer (CEO) of The Service Craft (TSC)
            Company - a full-service consulting firm that harnesses the
            potential of individuals, businesses, and brands to drive positive
            societal progress through expertise in service design, service
            performance enhancement, and quality assurance. Prior to TSC,
            Justina had founded Calabar Hospitality House (CHH) to help
            individuals and organizations change how they seek, acquire and
            leverage knowledge through continuous learning in line with job
            demands and the future of work. Justina transforms organizations by
            designing services that work for their business and their customers
            through planning, arranging people, infrastructure, communication
            and material components in order to improve its quality.
          </p>

          <p className="leading-6 ">
            Justina has over 15 years of experience coordinating, managing and
            providing operational support to various units of the tourism and
            hospitality industry. She has practical and professional experience
            in customer service, marketing, entrepreneurship, events management,
            training, instructional design, service design, enterprise design
            thinking, and customer relationship management. She is a certified
            Hospitality Trainer, certified Guest Service Professional with the
            American Hotel and Lodging Educational Institute, certified
            Hospitality Establishment Grading Assessor from South Africa’s
            Professional Services Company Proserv, certified Customer-Focused
            Team Leader with a Master Certificate in Hospitality Management:
            Focus on Hospitality Marketing from Cornell University’s School of
            Hotel Administration and also a licensed Service Designer from
            Service Design Academy, Berlin
          </p>

          <p className="leading-6 ">
            She has worked with TotalEnergies EP Nigeria for OML58 as Logistics
            Coordinator, Genesis Group Nigeria Limited as Assistant General
            Manager Quality Assurance and Capacity Building, Cross River State
            Tourism Bureau as Enforcement and Assessment Officer, Cross River
            State Government as Senior Special Assistant to the Governor on
            Hospitality, and Tinapa Lakeside Hotel Calabar as General Manager.
            Currently, among other “hats” that she wears, she is an Assistant
            Registrar at the University of Calabar.
          </p>

          <p className="leading-6 ">
            Justina is the author of the book My Hospitality, hallmarks of true
            hospitality thoughts and lessons.
          </p>
          <p className="leading-6 ">
            Justina lives in Calabar and is married with 3 children.
          </p>
        </div>
      </div>
    </div>
  );
};
