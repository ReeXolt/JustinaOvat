import { clienthelp } from '../../../utils/data';

export default function Wehelpclients() {
  return (
    <section className="w-full h-auto bg-gray-100 py-10">
      <div className="mx-[5%] flex flex-col gap-5">
        <h2 className="text-center text-3xl font-bold">We help clients</h2>
        <span className="text-center text-md">
          Strategic positions for hospitality excellence
        </span>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 ">
          {clienthelp.map((item, index) => (
            <div key={index} className={`bg-white p-6 rounded-lg shadow-md flex flex-col gap-3`}>
              <div className="bg-[#FFEDF8] text-[#7E0D55] p-2 rounded-full w-8 h-8 flex items-center justify-center">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold">{item.text}</h3>
              <p className="text-gray-500 text-sm">{item.subtext}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
