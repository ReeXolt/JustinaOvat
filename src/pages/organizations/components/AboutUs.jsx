import aboutcraft from '../../../assets/images/aboutcraft.png';

export default function AboutUs() {
  return (
    <section className="w-full h-auto py-10">
      <div className="mx-[5%] flex flex-col gap-5">
        <h2 className="text-center text-3xl font-bold">About Us</h2>
        <div className="flex flex-col lg:flex-row-reverse gap-10">
          <div className="flex flex-col justify-evenly gap-4">
            <h2 className="font-bold text-2xl lg:text-3xl">
              Building Learning Cultures That Elevate Hospitality Performance
            </h2>

            <p className="text-lg text-gray-700 max-w-[34rem]">
              In Hospitality, service quality is delivered by people, yet most
              organizations manage learning as an HR activity rather than a
              business system.
            </p>
            <p className="text-lg text-gray-700 max-w-[34rem]">
              This creates inconsistency, leadership gaps, and high attrition.
              Our work focuses on designing learning cultures where leadership
              owns learning, capability precedes promotion, and development is
              embedded into daily operations.
            </p>
            
          </div>
          <div className="border lg:w-[50%]">
            <img
              src={aboutcraft}
              alt="joimg"
              loading="lazy"
              className="w-full rounded-lg h-full object-cover object-top"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
