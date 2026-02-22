import { engageModel } from '../../../utils/data';

export default function EngangementModel() {
  return (
    <section className="w-full h-auto bg-[#3B0226] py-10">
      <div className="mx-[5%] flex flex-col gap-7">
        <h2 className="text-center text-white text-3xl font-bold">
          Engangement Model
        </h2>
        <span className="text-center text-white text-md">
          Our engagement structure is designed to ensure seamless collaboration,
          measurable
        </span>
        <span className="text-center block text-white text-md">
          outcomes, and sustained learning impact across every phase.
        </span>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5 ">
          {engageModel.map((item, index) => (
            <div
              key={index}
              className={`bg-[#3b122c] backdrop-blur-xl border border-white/10
              shadow-2xl shadow-black/30 text-[#DFDEDE] p-6 rounded-lg shadow-x-xl flex flex-col gap-2`}
            >
              <div
                className={`${item.color.background} ${item.color.text} p-2 rounded-md w-8 h-8 flex items-center justify-center`}
              >
                {item.icon}
              </div>
              <h3 className="font-bold">{item.text}</h3>
              <p className="text-sm">{item.subtext}</p>
            </div>
          ))}
        </div>
        <p className="text-center text-white">
          we offer project-based, retainer-based and academy development
          partnership
        </p>
      </div>
    </section>
  );
}
