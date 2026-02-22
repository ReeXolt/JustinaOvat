import { serviceApps } from '../../../utils/data';

export default function ServiceApps() {
  return (
    <section className="w-full h-auto bg-[#3B0226] py-10">
      <div className="mx-[5%] flex flex-col gap-5">
        <h2 className="text-center text-white text-3xl font-bold">Service Applications</h2>
        <span className="text-center text-white text-md">
          Our LxM service is deployed across:
        </span>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 ">
          {serviceApps.map((item, index) => (
            <div key={index} className={`bg-white p-6 rounded-lg shadow-md flex flex-col gap-2`}>
              <div className="bg-[#3B0226] text-white p-2 rounded-md w-8 h-8 flex items-center justify-center">
                {item.icon}
              </div>
              <h3 className="text-md font-bold">{item.text}</h3>
              <p className="text-gray-500 text-sm">{item.subtext}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
