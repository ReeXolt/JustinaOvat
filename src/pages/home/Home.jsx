import { Footer } from "../../components/footer/Footer";
import { BookSection } from "./components/BookSection";
import { Featured } from "./components/Featured";
import { Hero } from "./components/Hero";
import { JustOne } from "./components/JustOne";
import { Meet } from "./components/Meet";
import { Stats } from "./components/Stats";
import { Testimonial } from "./components/Testimonial";
import { NewsLetter } from "../../components/newsletter/NewsLetter";
export const Home = () => {
  return (
    <div>
      <Hero />
      <Featured />
      <Stats />
      <Meet />
      <JustOne />
      <Testimonial />
      <BookSection />
      <NewsLetter />
      <Footer />
    </div>
  );
};
