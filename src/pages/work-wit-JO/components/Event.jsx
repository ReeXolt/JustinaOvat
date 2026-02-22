import { useNavigate } from 'react-router-dom';
import event1 from '../../../assets/images/event1.png';
import event2 from '../../../assets/images/event2.png';
import event3 from '../../../assets/images/event3.png';
import { Button } from '../../../components/button/Button';
export const Event = () => {
  const navigate = useNavigate();
  return (
    <section className="w-full bg-black text-white py-10">
      <div className="w-[90%] mx-auto">
        <div className=" text-center">
          <h1 className="font-bold text-3xl md:text-4xl pb-3">
            Event Content Curation
          </h1>
          <p className="font-semibold text-lg w-[90%] mx-auto">
            We understand that every event is a unique opportunity to create
            lasting impressions, share valuable insights, and engage your
            audience. Our Event Content Curation services are meticulously
            designed to elevate your events, ensuring that every message is not
            just heard but remembered.
          </p>
        </div>
        <h1 className="pt-16 pb-3 text-4xl text-center md:text-left font-bold wavy">
          What Sets Us Apart
        </h1>
        <div className="grid gap-10 items-center">
          <div className="flex flex-col-reverse  md:flex-row justify-between items-center gap-10 ">
            <div className="w-full md:w-1/2">
              <img src={event1} alt="img" />
            </div>
            <div className="w-full md:w-1/2">
              <h1 className="font-bold text-3xl pb-5">
                How I Work With Clients
              </h1>
              <p className="text-base mb-4 leading-6">
                My engagements typically follow a clear, phased approach:
              </p>
              <ul className="list-inside list-disc space-y-2">
                <li>
                  <span className="font-bold">Learning Culture Audit</span>
                  <span className="block pl-[22px]">
                    Diagnosing learning maturity, capability gaps, and
                    performance risks.
                  </span>
                </li>
                <li>
                  <span className="font-bold">Learning System Design</span>
                  <span className="block pl-[22px]">
                    Developing competency frameworks, learning pathways, and
                    governance structures.
                  </span>
                </li>
                <li>
                  <span className="font-bold">Enablement & Embedding</span>
                  <span className="block pl-[22px]">
                    Equipping leaders and supervisors, and integrating learning
                    into daily operations.
                  </span>
                </li>
              </ul>
              <p className="mt-5 italic">
                This ensures learning delivers{' '}
                <span className="font-bold">measurable impact</span>, not
                activity.
              </p>
            </div>
          </div>

          <div className="flex flex-col  md:flex-row justify-between items-center gap-10 ">
            <div className="w-full md:w-1/2 flex flex-col gap-2">
              <h1 className="font-bold text-3xl md:text-[30px]">What I Do</h1>
              <p className="text-base leading-6">
                I help hospitality organisations move from ad-hoc training
                activities to intentional learning cultures where learning is
                owned by leadership, embedded into operations, and directly
                linked to business outcomes
              </p>
              <span className="mt-3">My work focuses on:</span>
              <ul className="list-disc list-inside leading-6">
                <li>Service consistency and brand standards</li>
                <li>Supervisor and first-time manager capability</li>
                <li>Leadership pipeline development</li>
                <li>Sustainable learning systems that outlast consultants</li>
              </ul>
            </div>
            <div className="w-full md:w-1/2">
              <img src={event2} alt="img" />
            </div>
          </div>

          <div className="flex flex-col-reverse  md:flex-row justify-between items-center gap-10 ">
            <div className="w-full md:w-1/2">
              <img src={event3} alt="img" />
            </div>
            <div className="w-full md:w-1/2">
              <h1 className="font-bold text-3xl  md:text-[30px] pb-3">
                Diverse Content Types
              </h1>
              <p className="text-base leading-6">
                Whether it’s captivating presentations, engaging scripts, or
                promotional materials that grab attention, we offer a diverse
                range of content types. Our team specializes in creating content
                for various formats, ensuring that each element contributes to
                the success of your event.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Button
            onClick={() => {
              navigate('/contact');
            }}
            label="Book Justina"
            className="bg-white text-black text-base py-2 px-3  md:px-10 uppercase border-4 border-[#4B4949] font-medium rounded-2xl mt-10 hover:bg-black hover:text-white duration-500 transition-all ease-in-out"
          />
        </div>
      </div>
    </section>
  );
};
