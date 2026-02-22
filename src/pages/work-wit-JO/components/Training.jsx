import { training1, training2 } from '../../../utils/data';
export const Training = () => {
  return (
    <section className="bg-black text-white py-10">
      <div className="pb-16">
        <h1 className="text-center font-bold text-3xl md:text-4xl pb-5">
          Training & Development
        </h1>

        <p className="text-base text-center font-normal leading-6 w-[90%] mx-auto">
          We believe in transforming the way your team perceive their roles and
          responsibilities. Our approach is grounded in breaking down
          hospitality concepts using the finest training methodologies and
          tools. We strive to instill a fresh perspective on long-standing
          challenges, guiding your staff to envision and achieve a future filled
          with endless possibilities for customer satisfaction and personal
          development.
        </p>
      </div>
      <div className="w-[90%] mx-auto md:flex justify-between gap-10 space-y-4 md:space-y-0 ">
        <div className="w-full md:w-1/2 bg-workwithjo1 bg-no-repeat bg-cover rounded-lg">
          <div className="border-b-2 py-5 px-4">
            <h2 className="text-3xl font-medium">Who I Work With</h2>
          </div>

          <ul className="space-y-3 px-8 pb-10 pt-5">
            <span>I work best with:</span>
            {training1.map((item, index) => (
              <li key={index} className="flex gap-2 items-center">
                <img src={item.icon} alt="icon" />
                <p className="font-medium text-base">{item.text}</p>
              </li>
            ))}
            <p className="italic text-sm mt-14">
              My clients value <span className='font-bold'>clarity, structure, and long-term impact</span> over
              quick fixes.
            </p>
          </ul>
        </div>

        <div className="w-full md:w-1/2 bg-workwithjo2 bg-no-repeat bg-cover rounded-lg">
          <div className="border-b-2 py-5 px-4">
            <h2 className="text-3xl font-medium">Why Clients Choose Me</h2>
          </div>

          <ul className="space-y-3 px-8 pb-10 pt-5">
            <span>Clients work with me because I:</span>
            {training2.map((item, index) => (
              <li key={index} className="flex gap-2 items-center">
                <img src={item.icon} alt="icon" loading="lazy" />
                <p className="font-medium text-base">{item.text}</p>
              </li>
            ))}
            <p className="italic text-sm mt-14">
              I challenge assumptions, simplify complexity, and focus relentlessly on outcomes.
            </p>
          </ul>
        </div>
      </div>
    </section>
  );
};
