import 'slick-carousel/slick/slick.css'; // ← required
import 'slick-carousel/slick/slick-theme.css'; // ← required
import { differentiators } from '../../../utils/data';

export default function OurDifferentiator() {

  return (
    <div className="bg-gradient-to-r from-[#EEE9EE] to-[#F8D2F8] py-14 md:py-14">
      <h1 className="text-md text-[#1F0D1F] md:text-xl font-bold text-center mb-3 md:mb-5">
        Our Differentiator
      </h1>

      <p className="text-center font-bold text-xl lg:text-3xl text-[#1F0D1F] mb-12">
        Beyond Traditional L&D
      </p>

      <div className="mx-auto flex flex-col gap-2 w-[90%] lg:max-w-[62rem] my-12 md:my-16 bg-white p-6 rounded-lg shadow-md">
        <div className="grid md:grid-cols-2 gap-2 my-6">
          <div className="flex flex-col text-left md:items-center gap-1">
            <div>
              <span>Traditional L&D firms focus on</span>
              <span className="block text-[#8A8A8A]">Content Delivery.</span>
            </div>
          </div>
          <div className="flex flex-col text-left md:items-center gap-1">
            <div>
              <span>Event managers focus on</span>
              <span className="block text-[#8A8A8A]">logistics.</span>
            </div>
          </div>
        </div>
        <hr />
        <p className='my-3'>We manage the entire learning experience lifecycle:</p>
        <div className="flex flex-wrap gap-2">
          {differentiators.map((item, index) => (
            <div key={index}>
              <div className="flex items-center">
                <span className={`px-3 py-1 rounded-lg bg-[#1F0D1F] text-white`}>
                  {item}
                </span>
                {index < differentiators.length - 1 && (
                  <span className="text-xl mx-4 font-light text-gray-500">→</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
