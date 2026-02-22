import { useLocation } from "react-router-dom";
import { Training } from "./components/Training";
import { WorkWithJOHero } from "./components/WorkWithJOHero";
import { useEffect } from "react";
import { AwardWining } from "./components/AwardWining";
import { MyApproach } from "./components/MyApproach";
import { Event } from "./components/Event";
import { Faq } from "./components/Faq";
import { NewsLetter } from "../../components/newsletter/NewsLetter";
import { Footer } from "../../components/footer/Footer";
import { Speaking } from "./components/Speaking";

export const WorkWithJoPage = () => {
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
    <section>
      <WorkWithJOHero />
      <div id="speaking">
        <Speaking />
      </div>
      <div id="training">
        <Training />
      </div>
      <div id="award">
        <AwardWining />
      </div>
      <div id="myApproach">
        <MyApproach />
      </div>
      <div id="event">
        <Event />
      </div>
      <div>
        <Faq />
      </div>
      <NewsLetter />
      <Footer />
    </section>
  );
};
