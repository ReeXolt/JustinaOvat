import ctaButton from "../../assets/images/rightCtaButton.png";

export const NewsLetter = () => {
  return (
    <div className="bg-black text-white w-full py-10">
      <div className="w-[90%] mx-auto  md:flex justify-between items-center  pb-5 pt-10">
        <div className="md:w-[70%]">
          <h1 className="md:text-4xl text-3xl font-bold">
            Get Inspired And Take Bold Actions
          </h1>
          <p className="text-sm md:text-base font-normal pt-2 text-[#FFFFFFCC]">
            Subscribe to our newsletter for latest guides, tips and much more
          </p>
        </div>

        <div className="md:w-[30%] pt-5 md:pt-0">
          <form>
            <div className="relative">
              <input
                type="text"
                placeholder="Enter email"
                className="border outline-0 border-white bg-transparent w-full rounded-full  px-4 py-3"
              />

              <button className="absolute right-2 top-1/2 transform -translate-y-1/2">
                <img src={ctaButton} alt="icon" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
