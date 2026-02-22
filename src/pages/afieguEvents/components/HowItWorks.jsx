import { howitworks } from '../../../utils/data';
import bellimg from '../../../assets/images/bellimg.png';

export default function HowItWorks() {
  return (
    <div
      className="bg-white mx-auto w-[90%] flex flex-col gap-4 md:flex-row py-14 md:py-14"
      id="services"
    >
      <div className="flex flex-col justify-between">
        <h1 className="text-3xl text-center mt-12 text-[#111111] font-cormorant md:text-5xl font-bold">
          How It Works
        </h1>
        <ul className="flex flex-col gap-5">
          {howitworks.map((item, index) => (
            <li className="flex gap-5" key={index}>
              <span className="min-w-10 h-10 flex items-center justify-center text-white rounded-full bg-black">
                {index + 1}
              </span>
              <div>
                <span className="block text-2xl lg:text-4xl font-bold font-cormorant">
                  {item.title}
                </span>
                <span className="text-black">{item.text}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="rounded-lg lg:w-[50%]">
        <img
          src={bellimg}
          alt="joimg"
          loading="lazy"
          className="w-full h-full max-h-[27rem] rounded-xl object-cover object-center"
        />
      </div>
    </div>
  );
}
