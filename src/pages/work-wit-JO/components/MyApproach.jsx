import { assuranceCards } from '../../../utils/data';
import assurance from '../../../assets/images/assurance.png';
import { Button } from '../../../components/button/Button';
import { useNavigate } from 'react-router-dom';

export const MyApproach = () => {
  const navigate = useNavigate();
  return (
    <section className="w-full bg-white text-black py-10">
      <div className="w-[90%] mx-auto">
        <h1 className="font-bold text-center text-black text-3xl md:text-4xl pb-5">
          My Approach
        </h1>
        <div className="md:flex gap-5 justify-between pt-5 items-center">
          <div className="w-full md:w-1/2 mb-5 md:mb-0 ">
            <h1 className="text-xl font-bold  pb-4">
              I believe that learning in hospitality must be treated as a
              business system, not an HR activity. My consulting work is
              anchored on three principles:
            </h1>
            <ul className="leading-6 list-decimal space-y-2">
              <li>
                <span className="block font-bold">
                  Learning Must Be Leadership-Owned
                </span>
                <span>
                  When leaders do not own learning, performance remains
                  inconsistent.
                </span>
              </li>
              <li>
                <span className="block font-bold">
                  Capability Must Precede Promotion
                </span>
                <span>
                  Titles without capability weaken service, morale, and brand
                  standards.
                </span>
              </li>
              <li>
                <span className="block font-bold">
                  Culture Determines Whether Learning Sticks
                </span>
                <span>
                  Without the right environment, even the best training fails.
                </span>
              </li>
            </ul>

            <p className="mt-5 italic">
              To operationalise this, I use my proprietary{' '}
              <span className="font-bold">
                Hospitality Learning Culture Framework
              </span>
              , which diagnoses and strengthens learning across leadership,
              structure, capability, culture, and sustainability.
            </p>

            <div className="md:text-left text-center">
              <Button
                onClick={() => {
                  navigate('/contact');
                }}
                label="Book Justina"
                className="bg-black text-white text-base py-2 px-5  md:px-10 uppercase border-4 border-[#4B4949] font-medium rounded-2xl mt-10 mb-8 md:mb-0 hover:bg-white hover:text-black duration-500 transition-all ease-in-out"
              />
            </div>
          </div>

          <div className="w-full md:w-1/2">
            <img src={assurance} alt="img" />
          </div>
        </div>

        <div className="md:grid grid-cols-3 gap-5 pt-20">
          {assuranceCards.map((item, index) => (
            <div
              key={index}
              className="bg-black text-white relative p-5 rounded-lg my-16  md:my-10 "
            >
              <div className="absolute left-1/2 top-0 transform -translate-x-1/2 -translate-y-1/2">
                <img src={item.img} alt="icon" className="w-24" />
              </div>
              <div className="py-10">
                <h1 className=" text-center font-bold text-3xl w-[90%] mx-auto leading-[44px]">
                  {item.title}
                </h1>
                <p className="text-start font-medium text-sm leading-6 pt-5">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
