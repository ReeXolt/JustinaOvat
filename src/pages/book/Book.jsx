import { ContactForm } from '../../components/contactForm/ContactForm';
import { Footer } from '../../components/footer/Footer';
import { Navbar } from '../../components/navbar/Navbar';
import bookOvat from '../../assets/images/bookOvat.png';
import { useEffect } from 'react';
import './test.css';
export const Book = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="bg-bookOvatMobImg md:bg-bookHero h-[100dvh] bg-no-repeat bg-cover bg-center ">
      <Navbar />
      <div className="w-[90%] mx-auto flex flex-col-reverse gap-10  md:items-end md:justify-between md:flex-row relative h-[85dvh] pb-20">
        <h1 className="uppercase text-white font-bold md:text-6xl text-4xl">
          Book Justina
        </h1>

        <div className="">
          <div className="relative group">
            <img src={bookOvat} alt="img" className="mb-2" loading="lazy" />
            <div className="test w-[320px] lg:w-[500px] bg-gray-800 rounded-md bg-cover bg-no-repeat text-white opacity-80  block p-5">
              <div>
                <p className="font-medium relative text-white text-base">
                  Booking Justina means engaging a consultant who delivers
                  clarity, not clichés. She brings deep subject-matter expertise
                  in hospitality performance and learning cultures, offering
                  practical insights that challenge assumptions, strengthen
                  leadership thinking, and equip audiences to lead meaningful
                  change.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ContactForm
        header="Book Justina Now"
        subText="Justina Ovat brings expertise across customer service, service design, human resources, hospitality, and tourism, delivering insights that drive performance and learning."
      />

      <Footer />
    </section>
  );
};
