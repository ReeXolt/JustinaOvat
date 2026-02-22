import { MdCheck } from "react-icons/md";
export default function Inquiries() {
  return (
    <div id="consultation" className="bg-white mx-auto w-[90%] flex flex-col gap-4 py-14">
      <h1 className="text-2xl text-center uppercase text-[#111111] font-cormorant md:text-5xl font-bold">
        For private engagements and enquiries:
      </h1>
      <form className="flex flex-col justify-between">
        <div>
          <label htmlFor="email" className="text-sm  pb-2 block font-medium">
            Email Address <span className="text-red-700">*</span>
          </label>
          <input
            type="email"
            className="border border-[#A81100] outline-0 text-black bg-white w-full rounded-md px-4 py-3"
            required
          />
        </div>

        <div>
          <label htmlFor="number" className="text-sm  pb-2 block font-medium">
            Phone Number
          </label>
          <input
            type="number"
            className="border border-[#A81100] outline-0 text-black bg-white w-full rounded-md px-4 py-3"
          />
        </div>

        <div className="flex items-center gap-2 mt-4">
          <MdCheck className="text-green-600" />
          <p className="text-sm text-gray-700">Your data is encrypted and handled with absolute Confidentiality.</p>
        </div>

        <button type="submit" className="bg-[#411002] text-white px-6 py-3 rounded-md mt-4 hover:bg-gray-800 transition-colors duration-300">
          Send Enquiry
        </button>
      </form>
    </div>
  );
}
