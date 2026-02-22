import { useState } from 'react';
import { workingClients } from '../../../utils/data';

export default function WhoWeWorkWith() {
  const [hoveredIndex, setHoveredIndex] = useState(-1);

  return (
    <section className="w-full h-auto bg-gray-100 py-10">
      <div className="mx-[5%] flex flex-col gap-5">
        <h2 className="text-center text-3xl font-bold">Who We Work With</h2>
        <span className="text-center text-md">
          We partner with hospitality organizations committed to service
          excellence
        </span>
        <div className="grid gap-5 md:gap-y-10 mt-5 md:grid-cols-2">
          {workingClients.map((item, index) => (
            <div
              key={index}
              className='flex md:justify-center transition-all duration-300 '
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(-1)}
            >
              <div className="h-[400px] w-full md:max-w-[508px] relative">
                <img
                  src={item.img}
                  alt="img"
                  loading="lazy"
                  className="w-full md:w-[508px] h-full object-cover rounded-lg"
                />
                
                <div
                  className={`absolute transition-opacity duration-300 z-10 bottom-0 flex gap-5 bg-white p-6 rounded-lg shadow-md
                ${hoveredIndex === index ? 'opacity-100 bg-[#2D300F]' : 'opacity-0 md:opacity-0'}
                `}
                >
                  <div className="bg-gray-200 p-2 rounded-full w-8 h-8 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <div className="flex flex-col md:gap-3">
                    <h4 className="text-md font-bold">{item.text}</h4>
                    <span className="text-xs leading-5 text-gray-600">
                      {item.subtext}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
