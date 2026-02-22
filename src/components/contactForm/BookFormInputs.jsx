import { Button } from "../button/Button";

export const BookFormInputs = () => {
  return (
    <div className="w-full md:w-1/2">
      <form>
        <div className="space-y-5">
          <div>
            <label htmlFor="name" className="text-sm pb-2 block font-medium">
              Full Name <span className="text-red-700">*</span>
            </label>
            <input
              type="text"
              className="border outline-0 text-black bg-white w-full rounded-md px-4 py-3"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="text-sm  pb-2 block font-medium">
              Email <span className="text-red-700">*</span>
            </label>
            <input
              type="email"
              className="border outline-0 text-black bg-white w-full rounded-md px-4 py-3"
              required
            />
          </div>

          <div>
            <label htmlFor="number" className="text-sm  pb-2 block font-medium">
              Phone Number
            </label>
            <input
              type="number"
              className="border outline-0 text-black bg-white w-full rounded-md px-4 py-3"
            />
          </div>
          <div>
            <label htmlFor="number" className="text-sm  pb-2 block font-medium">
              Name of Your Organization/Conference/Event
              <span className="text-red-700">*</span>
            </label>
            <input
              type="text"
              className="border outline-0  text-black bg-white w-full rounded-md px-4 py-3"
              required
            />
          </div>

          <div>
            <p className="text-white font-medium text-base">
              What role are you looking for me to fulfill at your event?{" "}
              <span className="text-red-700">*</span>
            </p>

            <div className="flex gap-5 text-sm flex-wrap pt-4 ">
              <div>
                <input type="checkbox" id="keynote" />
                <label htmlFor="keynote" className=" pl-3">
                  Keynote Speaking
                </label>
              </div>

              <div>
                <input type="checkbox" id="panelist" />
                <label htmlFor="panelist" className=" pl-3">
                  Panelist
                </label>
              </div>

              <div>
                <input type="checkbox" id="workshop" />
                <label htmlFor="workshop" className=" pl-3">
                  Workshop Facilitator/Host
                </label>
              </div>

              <div>
                <input type="checkbox" id="other" />
                <label htmlFor="other" className=" pl-3">
                  Other
                </label>
              </div>
            </div>
          </div>

          <div>
            <label htmlFor="message" className="text-sm block pb-2 font-medium">
              What is your speakers’ budget?
            </label>
            <textarea
              name="message"
              id="message"
              cols="20"
              rows="2"
              className="border outline-0 text-black bg-white w-full rounded-md px-4 py-3"
            ></textarea>
          </div>
          <div>
            <label htmlFor="message" className="text-sm block pb-2 font-medium">
              Are there additional details that I should know about your event?
            </label>
            <textarea
              name="message"
              id="message"
              cols="20"
              rows="5"
              className="border outline-0 text-black bg-white w-full rounded-md px-4 py-3"
            ></textarea>
          </div>

          <p className="text-white font-medium text-base">
            By submitting this form, you consent to receiving emails from
            Justina Ovat
          </p>

          <div className="flex justify-center">
            <Button
              label="SUBMIT"
              className="py-2 px-10 border-4 bg-white text-black border-[#4B4949] hover:bg-black hover:text-white duration-500 transition-all ease-in-out"
            />
          </div>
        </div>
      </form>
    </div>
  );
};
