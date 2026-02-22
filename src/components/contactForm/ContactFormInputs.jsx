import { useState } from "react";
import { Button } from "../button/Button";
import { MdKeyboardArrowDown } from "react-icons/md";

export const ContactFormInputs = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedOption2, setSelectedOption2] = useState(null);

  const toggling = () => setIsOpen(!isOpen);
  const toggling2 = () => setIsOpen2(!isOpen2);

  const onOptionClicked = (value) => () => {
    setSelectedOption(value);
    setIsOpen(false);
  };
  const onOptionClicked2 = (value) => () => {
    setSelectedOption2(value);
    setIsOpen2(false);
  };
  const options = [
    "",
    "Consulting",
    "Training",
    "Service Designing",
    "Event Speaking",
  ];

  const options2 = [
    "",
    "Google Search",
    "Social Media",
    "Conference",
    "Personal Referral",
  ];

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
              Email Address <span className="text-red-700">*</span>
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
            <label
              htmlFor="company"
              className="text-sm  pb-2 block font-medium"
            >
              Name of Company/Organization
            </label>
            <input
              type="text"
              className="border outline-0 text-black bg-white w-full rounded-md px-4 py-3"
            />
          </div>

          <div className="dropdown-container relative">
            <label htmlFor="message" className="text-sm block pb-2 font-medium">
              How can I help you?
              <span className="text-red-700">*</span>
            </label>
            <div
              className="dropdown-header cursor-pointer flex  items-center justify-between border outline-0  text-black bg-white w-full rounded-md px-4 py-3 "
              onClick={toggling}
            >
              {selectedOption || "Select an Option"}
              <MdKeyboardArrowDown
                className={`transition-transform duration-300 ease-in-out transform ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </div>
            {isOpen && (
              <div className="dropdown-list-container bg-white w-full rounded-md px-4  text-black">
                <ul className="dropdown-list">
                  {options.map((option) => (
                    <li
                      className="hover:text-black border-b  py-2 cursor-pointer hover:font-bold"
                      onClick={onOptionClicked(option)}
                      key={Math.random()}
                    >
                      {option}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div className="dropdown-container relative">
            <label htmlFor="message" className="text-sm block pb-2 font-medium">
              How did you hear about me?
            </label>
            <div
              className="dropdown-header cursor-pointer flex  items-center justify-between border outline-0  text-black bg-white w-full rounded-md px-4 py-3 "
              onClick={toggling2}
            >
              {selectedOption2 || "Select an Option"}
              <MdKeyboardArrowDown
                className={`transition-transform duration-300 ease-in-out transform ${
                  isOpen2 ? "rotate-180" : ""
                }`}
              />
            </div>
            {isOpen2 && (
              <div className="dropdown-list-container bg-white w-full rounded-md px-4  text-black">
                <ul className="dropdown-list">
                  {options2.map((option) => (
                    <li
                      className="hover:text-black border-b  py-2 cursor-pointer hover:font-bold"
                      onClick={onOptionClicked2(option)}
                      key={Math.random()}
                    >
                      {option}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div>
            <label htmlFor="message" className="text-sm block pb-2 font-medium">
              Message (Optional)
            </label>
            <textarea
              name="message"
              id="message"
              cols="20"
              rows="2"
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
