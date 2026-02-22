import { useState } from "react";
import { cardData } from "../../../utils/data";
import { AwardCard } from "./AwardCard";

export const Honours = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section id="hash" className="w-full bg-black text-white py-10">
      <div className="w-[90%] mx-auto">
        <h1 className="text-center font-bold text-4xl pb-8 md:pb-16">
          Recognitions and Achievements
        </h1>
        <div className="md:grid md:grid-cols-2  xl:grid-cols-3 gap-5 space-y-5 md:space-y-0">
          {cardData.map((item, index) => (
            <AwardCard
              key={index}
              {...item}
              isHovered={hoveredIndex === index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
