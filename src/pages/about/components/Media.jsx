import { Button } from "../../../components/button/Button";

export const Media = () => {
  return (
    <section className="w-full bg-mediaBg bg-cover bg-center bg-no-repeat ">
      <div className=" mx-auto flex justify-center items-center py-10">
        <div className=" bg-black bg-opacity-70  py-5 md:py-8 px-5 md:px-16 w-full md:w-[80%]  xl:w-[50%] rounded-md">
          <div className="relative">
            <h1 className="text-white text-2xl md:text-3xl font-bold pb-5">
              Press & Media Request
            </h1>

            <form className="grid grid-cols-2 gap-5 space-2 md:space-y-3">
              <div className="col-span-2 ">
                <label htmlFor="name" className="block pb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  className="bg-white px-4 py-2 rounded-md w-full text-black outline-0 border"
                  required
                />
              </div>

              <div className="col-span-2">
                <label htmlFor="name" className="block pb-2">
                  Primary Email
                </label>
                <input
                  type="email"
                  className="bg-white px-4 py-2 rounded-md w-full outline-0  text-black border"
                  required
                />
              </div>

              <div className="col-span-1">
                <label htmlFor="name" className="block pb-2">
                  Phone Number
                </label>
                <input
                  type="text"
                  className="bg-white px-4 py-2 rounded-md w-full outline-0 text-black border"
                  required
                />
              </div>

              <div className="col-span-1">
                <label htmlFor="name" className="block pb-2">
                  Country
                </label>
                <input
                  type="text"
                  className="bg-white px-4 py-2 rounded-md w-full outline-0 text-black border"
                  required
                />
              </div>

              <div className="col-span-2">
                <label htmlFor="name" className="block pb-2">
                  Subject of Request
                </label>
                <input
                  type="text"
                  className="bg-white px-4 py-2 rounded-md w-full outline-0 text-black border"
                  required
                />
              </div>

              <div className="col-span-2">
                <label htmlFor="name" className="block pb-2">
                  Request
                </label>
                <textarea
                  name="Request"
                  id=""
                  cols="30"
                  rows="5"
                  className="bg-white px-4 py-2 rounded-md w-full outline-0 text-black border"
                  required
                ></textarea>
              </div>

              <p className=" col-span-2 text-sm font-medium">
                By submitting this form, you consent to receiving emails from
                Justina Ovat
              </p>

              <div className="col-span-2 flex justify-center">
                <Button
                  label="SUBMIT"
                  className="py-2 px-8 border-4 border-[#4B4949] bg-black text-white  hover:bg-white hover:text-black duration-500 transition-all ease-in-out "
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
