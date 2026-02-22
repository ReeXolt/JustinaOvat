import { MdCheck } from 'react-icons/md';
import { framework } from '../../../utils/data';

export default function Framework() {
  return (
    <section className="bg-gray-100 py-10">
      <div className="w-[90%] lg:w-[80%] mx-auto flex flex-col gap-10">
        <h1 className="font-bold text-center text-4xl">
          Our Learning Experience Management Framework
        </h1>
        <p className="text-center">
          Our Learning Experience Management model operates across five
          integrated pillars
        </p>

        <div className="flex flex-col gap-5 md:gap-8">
          {framework.map((item, index) => (
            <div key={index} className={`${item.color.background} ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} justify-evenly shadow-md flex gap-5 flex-col p-5 rounded-lg`}>
              <img
                src={item.image}
                alt={item.title}
                className="max-h-[14rem]"
              />
              <div key={index} className="">
                <div
                  className={`
                        
                          flex flex-col gap-2
                          transition-all duration-300
                        `}
                >
                  <div className='flex gap-3 items-center'>
                    <div className={`p-3 ${item.color.textbg} text-white w-fit rounded-lg`}>
                    {item.icon}
                  </div>

                  {/* Overlay */}
                  <h2 className={`${item.color.text} font-bold text-2xl`}>
                    {item.title}
                  </h2>
                  </div>
                  <p className="text-[#4A4D2F] text-sm md:text-base mt-2 leading-relaxed">
                    {item.text}
                  </p>
                  <ul className="">
                    {item.subtext.map((point, idx) => (
                      <li
                        key={idx}
                        className="text-[#4A4D2F] text-sm md:text-base mt-1 leading-relaxed flex items-center gap-2"
                      >
                        <MdCheck className="text-[#4A4D2F]" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
