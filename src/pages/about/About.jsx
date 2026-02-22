import { Navbar } from "../../components/navbar/Navbar";
import { Honours } from "./components/Honours";
import { AboutHero } from "./components/AboutHero";
import { Press } from "./components/Press";
import { Footer } from "../../components/footer/Footer";
import { Media } from "./components/Media";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import ProfessionalBackground from "./components/ProfessionalBackground";
export const About = () => {
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
    <section className="w-full bg-black text-white ">
      <Navbar
        bgColor="bg-transparent"
        textColor="text-[#FFFFFFB2]"
        hoverText="text-white"
      />
      <AboutHero />
      <ProfessionalBackground />
      <div id="honours">
        <Honours />
      </div>
      <div id="press">
        <Press />
      </div>
      <Media />
      <Footer />
    </section>
  );
};
