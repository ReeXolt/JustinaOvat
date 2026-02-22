import { SocialIcons } from "../socialIcons/SocialIcons";

export const UpperNav = () => {
  return (
    <div className="w-full  bg-gradient-to-r from-[rgba(31,28,28,0.5)] to-[rgba(53,46,46,0.5)] ">
      <nav className="w-[90%] mx-auto py-3">
        <div className="upper-nav flex justify-between  items-center ">
          <div className="flex flex-col md:flex-row items-start md:gap-3 gap-0  text-base font-medium text-white">
            <div className="flex items-center text-xs md:text-base md:gap-3 gap-1">
              <p>+2348094435279</p>
              <p className="rounded-full bg-white h-2 w-2"></p>
            </div>
            <p className="text-xs md:text-base ">bookings@justinaovat.com</p>
          </div>
          <SocialIcons />
        </div>
      </nav>
    </div>
  );
};
