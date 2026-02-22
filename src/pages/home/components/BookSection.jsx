import { Button } from '../../../components/button/Button';
import book1 from '../../../assets/images/book.png';
import book2 from '../../../assets/images/book2.png';
import { useNavigate } from 'react-router-dom';
export const BookSection = () => {
  const navigate = useNavigate();
  return (
    <section className="w-full bg-black py-10">
      <div className="w-[90%] mx-auto ">
        <div className="bg-white flex flex-col-reverse xl:flex-row  xl:flex justify-between rounded-2xl">
          <div className="w-full xl:w-1/2 px-10 py-5 xl:py-16 ">
            <h1 className="text-3xl xl:text-4xl font-bold w-full md:w-[90%]  xl:leading-[50px]">
              Hallmarks of True Hospitality Thoughts and Lessons
            </h1>
            <p className="text-sm md:text-base font-normal py-6  xl:py-10">
              Every interaction is an opportunity to reinforce standards,
              develop capability, and protect the guest experience. My approach
              combines a deep understanding of hospitality operations with
              intentional learning design, ensuring leaders are equipped, teams
              are engaged, and performance is consistently delivered.
            </p>

            <Button
              onClick={() => navigate('/book-details')}
              label="Read Book"
              className="border-4 border-[#4B4949] px-4 py-2 uppercase bg-black  text-white hover:text-black hover:bg-white duration-500 transition-all ease-in-out"
            />
          </div>
          <div className="w-full xl:w-1/2 flex  gap-5 py-10 px-10 ">
            <div className="w-1/2">
              <img src={book1} alt="img" className="w-full" loading="lazy" />
            </div>
            <div className="xl:pt-16 w-1/2">
              <img src={book2} alt="img" className="w-full" loading="lazy" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
