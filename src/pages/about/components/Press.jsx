import { press } from "../../../utils/data";
import { PressCard } from "./PressCard";

export const Press = () => {
  return (
    <section className="w-full bg-black text-white py-10">
      <div className="w-[90%] mx-auto ">
        <h1 className="text-center font-bold text-4xl pb-8 md:pb-16">
          Press & Media
        </h1>
        <div className="md:grid md:grid-cols-2 xl:grid-cols-3 gap-5 space-y-5 md:space-y-0">
          {press.map((item) => (
            <PressCard
              key={item.id}
              {...item}
              bgColor="bg-white"
              textColor="text-black"
            />
          ))}
        </div>

        <h1 className="text-3xl md:text-4xl font-bold py-8 md:py-16 leading-[55px]">
          IF YOU ARE A MAJOR MEDIA OUTLET LOOKING TO DO AN INTERVIEW WITH
          JUSTINA OVAT, GIVE DETAILS, AND WE WILL GET BACK TO YOU ASAP
        </h1>
      </div>
    </section>
  );
};
