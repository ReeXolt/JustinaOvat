import { BlogHero } from "./components/BlogHero";
import { Blog } from "./components/Blog";
import { AllBlogs } from "./components/AllBlogs";
import { Footer } from "../../components/footer/Footer";
import { NewsLetter } from "../../components/newsletter/NewsLetter";
export const BlogPage = () => {
  return (
    <section>
      <div>
        <BlogHero />
        <Blog />
        <AllBlogs />
        <NewsLetter />
        <Footer />
      </div>
    </section>
  );
};
