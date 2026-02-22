import { Link, useParams } from "react-router-dom";
import { press } from "../../../utils/data";
import { PressCard } from "./PressCard";
import { NewsLetter } from "../../../components/newsletter/NewsLetter";
import { Footer } from "../../../components/footer/Footer";
import { AddNav } from "../../../components/navbar/AddNav";
export const PressDetails = () => {
  const { id } = useParams();
  const item = press.find((item) => item.id === Number(id));
  const itemsToDisplay = press.slice(0, 4);

  return (
    <section className="bg-white w-full  text-black">
      <AddNav />
      <div className="w-[90%] mx-auto">
        <div>
          <button className="pt-3 pb-5 text-base font-medium">
            <Link to="/about">Go Back</Link>
          </button>
          <h1 className="text-3xl md:text-3xl pb-2 font-bold">{item.title}</h1>
          <div className="md:flex  gap-5 justify-between items-center">
            <div className="w-full md:w-[40%]">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-[600px]"
                loading="lazy"
              />
            </div>
            <div className="w-full md:w-[60%]">
              <p className="py-5 text-base font-normal text-justify leading-6">
                {item.text}
              </p>
            </div>
          </div>
        </div>

        <div className="py-20">
          <h1 className="font-bold text-xl pb-5">Related Press & Media</h1>
          <div className="md:grid grid-cols-4 gap-5 space-y-5 md:space-y-0">
            {itemsToDisplay.map((item) => (
              <PressCard
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
