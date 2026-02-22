import { Link, useParams } from "react-router-dom";
import { allblogs } from "../../../utils/data";
import { BlogCard } from "./BlogCard";
import { Footer } from "../../../components/footer/Footer";
import { AddNav } from "../../../components/navbar/AddNav";
import { NewsLetter } from "../../../components/newsletter/NewsLetter";
export const BlogDetails = () => {
  const { id } = useParams();
  const item = allblogs.find((item) => item.id === Number(id));
  const itemsToDisplay = allblogs.slice(0, 3);
  console.log(item);
  return (
    <section className="bg-white w-full  text-black">
      <AddNav />
      <div className="w-[90%] mx-auto">
        <div>
          <button className="pt-3 pb-5 text-base font-medium">
            <Link to="/blog">Go Back</Link>
          </button>
          <h1 className="text-3xl md:text-3xl pb-3 font-bold">{item.title}</h1>
          <div className="md:flex  gap-8 justify-between items-center pb-3">
            <div className="w-full md:w-[40%]">
              <img
                src={item.img}
                alt={item.title}
                className="w-full"
                loading="lazy"
              />
            </div>
            <div className="w-full md:w-[60%]">
              <p className=" text-sm font-normal text-justify leading-[22px] ">
                {item.text}
              </p>
            </div>
          </div>
          <p className="font-normal text-sm text-justify leading-[22px]">
            {item.addText}
          </p>
        </div>

        <div className="py-20">
          <h1 className="font-bold text-xl pb-5">Related Blog Posts</h1>
          <div className="md:grid grid-cols-3 gap-5 space-y-5 md:space-y-0">
            {itemsToDisplay.map((item) => (
              <BlogCard
                key={item.id}
                {...item}
                bgColor="bg-black"
                textColor="text-white"
              />
            ))}
          </div>
        </div>
      </div>
      <NewsLetter />
      <Footer />
    </section>
  );
};
