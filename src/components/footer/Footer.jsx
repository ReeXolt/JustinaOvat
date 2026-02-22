import { Link, useLocation } from 'react-router-dom';
import { SocialIcons } from '../socialIcons/SocialIcons';
import { useState } from 'react';
import { TermsModal } from '../termsOfUse/TermsModal';
import { useLogo } from '../../hooks/useLogo';
import servicecraf1tLogo from '../../assets/images/scraft1.png';
import afiegulogowhite from '../../assets/images/afiegulogowhite.jpg';


export const Footer = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const location = useLocation();

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const logo = useLogo();
  //
  return (
    <section
      className={`w-full border-t border-gray-700 text-white ${location.pathname === '/organizations' ? 'bg-[#4E0233]' : location.pathname === '/afiegu' ? 'bg-[#411002f3]' : 'bg-black'}`}
    >
      <footer className="w-[90%] mx-auto grid grid-cols-4 xl:grid-cols-6 gap-5 py-10">
        <div className="col-span-4 md:col-span-6 xl:col-span-2 pb-5 md:pb-0">
          <div>
            {location.pathname === '/organizations' ? (
              <img src={servicecraf1tLogo} alt="logo" className="w-20" />
            ) : (
              location.pathname === '/afiegu' ?<img src={afiegulogowhite} alt="logo" className="w-20" /> : <img src={logo} alt="logo" className="w-20" />
            )}
          </div>

          <div className="py-8">
            <p className="text-[#FFFFFFCC] text-base font-bold">The Just One</p>
            <p className="text-sm md:text-base  text-[#FFFFFFCC] font-normal ">
              Speaker, Author, Entrepreneur, Innovator and Tutor
            </p>
          </div>
          <SocialIcons />
        </div>

        <div className="col-span-2 xl:col-span-1">
          <p className="font-bold text-xs md:text-lg uppercase">Quick Links</p>
          <ul className="py-5 text-sm 2xl:text-base text-[#FFFFFFCC] space-y-5">
            <li className="">
              <Link to="/about">About Justina</Link>
            </li>
            <li className="">
              <Link to="/work-with-jo">Speaking</Link>
            </li>
            <li className="">
              <Link to="https://staging3.beetcore.com.ng">
                Service Craft Company
              </Link>
            </li>
            <li className="">
              <Link to="https://thejofoundation.org">Foundation</Link>
            </li>
          </ul>
        </div>

        <div className="col-span-1 xl:col-span-1">
          <p className="font-bold text-xs md:text-lg uppercase">RESOURCES</p>
          <ul className="py-5  text-sm 2xl:text-base text-[#FFFFFFCC] space-y-5">
            <li className="">
              <Link to="/about">Press</Link>
            </li>
            <li className="">
              <Link to="/blog">Blog</Link>
            </li>
          </ul>
        </div>

        <div className="col-span-2 xl:col-span-1">
          <p className="font-bold text-xs md:text-lg uppercase">INFORMATION</p>
          <ul className="py-5 text-sm 2xl:text-base text-[#FFFFFFCC] space-y-5">
            <li className="">
              <button onClick={openModal}>Terms of Use</button>
            </li>
            <li className="">
              <Link to="/privacy">Privacy Policy</Link>
            </li>
          </ul>
        </div>

        <div className="col-span-1 xl:col-span-1">
          <p className="font-bold text-xs md:text-lg uppercase">CONTACT</p>
          <ul className="py-5 text-sm 2xl:text-base text-[#FFFFFFCC] space-y-5">
            <li className="">
              <a href="mailto:example@example.com">info@justinaovat.com</a>
            </li>
            <li className="">
              <p>+2348094435279</p>
            </li>
          </ul>
        </div>
      </footer>
      <div className=" border-t border-gray-700 text-[#FFFFFFCC] text-sm  w-full">
        <div className="flex md:flex-row text-xs  flex-col items-center md:gap-5 gap-2 justify-center py-3">
          <p>
            Copyright&copy;{' '}
            <span> Justina Ovat {new Date().getFullYear()}. </span> All Rights
            Reserved.{' '}
          </p>
          <p>Created by Reexolt Technology.</p>
        </div>
      </div>
      <TermsModal isOpen={modalIsOpen} closeModal={closeModal} />
    </section>
  );
};
