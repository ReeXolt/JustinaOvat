import { ContactForm } from "../../components/contactForm/ContactForm";
import { Footer } from "../../components/footer/Footer";
import { Navbar } from "../../components/navbar/Navbar";
import frame from "../../assets/images/frameImg.png";
import { useEffect } from "react";

export const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="bg-contactMob  md:bg-contactHero h-[100vh] bg-no-repeat bg-cover bg-center pb-10">
      <Navbar bgColor="bg-transparent" textColor="text-[#FFFFFFB2]" />
      <div className="w-[90%] mx-auto flex flex-col items-start justify-end h-[80vh] pb-20 relative">
        <h1 className="uppercase text-white font-bold md:text-6xl text-4xl">
          Contact Justina Ovat
        </h1>

        <div className="absolute top-[10%] hidden xl:block">
          <img src={frame} alt="img" className="w-full h-64" loading="lazy" />
        </div>
      </div>

      <div>
        <ContactForm
          header="Contact"
          subText="Let’s delve into a more personal conversation."
        />
      </div>

      <Footer />
    </section>
  );
};
