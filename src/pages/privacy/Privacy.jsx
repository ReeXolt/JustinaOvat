import { useEffect } from "react";
import { Footer } from "../../components/footer/Footer";
import { NewsLetter } from "../../components/newsletter/NewsLetter";
import { Category1 } from "./components/Category1";
import { Category2 } from "./components/Category2";
import { Category3 } from "./components/Category3";

export const Privacy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section>
      <Category1 />
      <Category2 />
      <Category3 />
      <NewsLetter />
      <Footer />
    </section>
  );
};
