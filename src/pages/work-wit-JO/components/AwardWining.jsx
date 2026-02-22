import tutor from '../../../assets/images/tutorImg.png';
import award from '../../../assets/images/awardLogo.png';
import { Button } from '../../../components/button/Button';
import { useNavigate } from 'react-router-dom';

export const AwardWining = () => {
  const navigate = useNavigate();
  return (
    <section className=" bg-black py-10 text-white h-full">
      <div className="bg-gradient3 bg-no-repeat bg-cover p-5 md:p-10 w-[90%] mx-auto flex flex-col md:flex-row gap-5 lg:gap-10">
        <div className="w-full lg:max-w-[450px] relative">
          <img src={tutor} alt="img" className='rounded-lg w-full h-full object-cover object-top' />
          <div className="absolute top-[-30px] right-[-30px] hidden lg:block">
            <img src={award} alt="icon" />
          </div>
        </div>
        <div className="w-full flex flex-col justify-between">
          <h1 className="font-bold text-3xl mb-3">Beyond Consulting</h1>
          <p className="leading-6">
            I am deeply invested in advancing learning and professional
            standards within hospitality and tourism across Africa. My work
            extends into curriculum development, executive learning forums,
            industry conferences, and institutional advisory roles. Learning
            cultures, when done right, do more than improve performance, they
            <span className="font-bold"> shape industries</span>.
          </p>

          <h4 className="font-bold my-3 text-3xl">
            Let’s Talk <span className="text-sm"> If you are ready to:</span>
          </h4>
          <ul className="list-disc list-inside leading-6">
            <li>Reduce service inconsistency</li>
            <li>Build capable supervisors and leaders</li>
            <li>Create learning systems that actually work</li>
          </ul>

          <h4 className="font-bold my-3 italic text-xl">
            Then the right place to start is a Learning Culture conversation.
          </h4>

          
            <Button
              onClick={() => {
                navigate('/contact');
              }}
              label="Schedule a Discovery Call"
              className="bg-white text-black text-base py-2 px-5  md:px-10 uppercase border-4 border-[#4B4949] font-medium rounded-2xl my-3 hover:bg-black hover:text-white duration-500 transition-all ease-in-out"
            />
        
        </div>
      </div>
    </section>
  );
};
