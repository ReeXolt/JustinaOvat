import reviewImg from "../../assets/images/reviewImg.png";
export const VideoSection = () => {
  return (
    <section className="w-full py-10">
      <div className=" w-[90%] mx-auto">
        <iframe
          className="rounded-2xl"
          width="100%"
          height="480"
          src="https://drive.google.com/file/d/1m8LH2KlgO2UXvibXseZcpW7kqkaSHpdw/preview"
          allow="autoplay"
        ></iframe>

        <div className="md:grid grid-cols-2 gap-5 pt-10 space-y-5 md:space-y-0">
          <div>
            <img src={reviewImg} alt="img" className="w-full h-full" />
          </div>

          <div className="bg-meetGradient bg-no-repeat bg-cover rounded-2xl text-white p-5 md:p-10 text-left md:text-justify ">
            <p className="text-base font-normal pt-5 leading-6">
              <span className="font-bold text-4xl">Justina Ovat </span> is the
              author of the book My Hospitality, hallmarks of true hospitality
              thoughts and lessons. A multi-award-winning tourism and
              hospitality consultant with practical and professional experience.
            </p>
            <p className="py-5 leading-6">
              Her career has spanned roles where she has not only witnessed but
              actively contributed to the evolution of the industry.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
