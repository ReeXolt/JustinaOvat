import team from '../../../assets/images/team.png';
import { methodology } from '../../../utils/data';

export default function HowWeWork() {
  return (
    <section className="w-full bg-[#4E0233] h-auto py-10">
      <div className="mx-[5%] flex flex-col gap-5">
        <h2 className="text-center text-white text-3xl font-bold">
          How We Work (Our Methodology)
        </h2>
        <span className="text-center text-gray-400 text-md">
          Using the Hospitality Learning Culture Framework, we:
        </span>
        <div className="flex flex-col lg:flex-row-reverse gap-10">
          <div className="lg:w-[50%]">
            <img
              src={team}
              alt="joimg"
              loading="lazy"
              className="w-full rounded-lg h-full object-cover object-top"
            />
          </div>
          <div className="grid lg:w-[50%] gap-4">
            {methodology.map((item, index) => (
              <div key={index} className="flex gap-6">
                <div className="text-[#4E0233] bg-white rounded-full flex min-w-9 h-9 items-center justify-center">
                  {index + 1}
                </div>
                <div className="flex flex-col md:gap-3">
                  <h4 className="text-2xl text-white font-bold">{item.text}</h4>
                  <span className="text-sm text-gray-400">{item.subtext}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
