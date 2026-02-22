import call from "../../assets/images/call.png";
import email from "../../assets/svg/emailIcon.svg";
import foundation from "../../assets/svg/foundationIcon.svg";

import { SocialIcons } from "../socialIcons/SocialIcons";
import propTypes from "prop-types";
import { BookFormInputs } from "./BookFormInputs";
import { useLocation } from "react-router-dom";
import { ContactFormInputs } from "./ContactFormInputs";
export const ContactForm = ({ header, subText }) => {
  const location = useLocation();

  return (
    <section className="bg-black w-full text-white py-10 ">
      <div className=" w-[90%] mx-auto items-center gap-5 md:flex justify-between">
        <div className="w-full md:w-1/2 pb-8">
          <div>
            <h1 className=" font-bold text-4xl">{header}</h1>
            <p className="font-normal text-base pt-5">{subText}</p>
          </div>

          <div className="space-y-4 py-8 md:py-16 text-sm font-medium">
            <div className="flex gap-3 items-center">
              <div>
                <img src={call} alt="icon" />
              </div>
              <p>+2348094435279</p>
            </div>

            {location.pathname === "/book" && (
              <div className="flex gap-3 items-center">
                <img src={email} alt="icon" />
                <p>booking@justinaovat.com</p>
              </div>
            )}

            {location.pathname === "/contact" && (
              <div className="flex gap-3 items-center">
                <p>@</p>
                <p>Info@justinaovat.com</p>
              </div>
            )}
          </div>

          <div className="space-y-3 pt-3 md:pt-5 text-sm font-medium">
            <h1 className="text-2xl font-bold">Address</h1>
            <p>Nigeria</p>
            <p>1A Prof Ivara Esu Street, Off Marian, Calabar.</p>
          </div>
          <div className="pt-10">
            <SocialIcons />
          </div>

          <div className=" py-5 text-sm font-medium space-y-4 pt-8">
            {location.pathname === "/contact" && (
              <div className="space-y-4">
                <h1 className="text-2xl font-bold">Justina Ovat Foundation</h1>

                <div className="flex gap-3 items-center">
                  <img src={foundation} alt="icon" />
                  <p> www.thejofoundation.org</p>
                </div>
                <div className="flex gap-3 items-center">
                  <img src={email} alt="icon" />
                  <p>contact@jofoundation.com.ng</p>
                </div>
                <div className="space-y-4 pt-4">
                  <h1 className="text-2xl font-bold ">Service Craft Company</h1>
                  <div className="flex gap-3 items-center">
                    <img src={foundation} alt="icon" />
                    <p> www.servicecraftcompany.com</p>
                  </div>
                  <div className="flex gap-3 items-center">
                    <img src={email} alt="icon" />
                    <p>contact@servicecraftcompany.com</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {location.pathname === "/contact" && <ContactFormInputs />}
        {location.pathname === "/book" && <BookFormInputs />}
      </div>
    </section>
  );
};

ContactForm.propTypes = {
  header: propTypes.string,
  subText: propTypes.string,
};
