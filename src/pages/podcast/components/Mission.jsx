import mic2 from '../../../assets/images/mic2.png';

export default function Mission() {
  return (
    <div className="bg-[linear-gradient(65deg,#000_30%,#FDECF7_80%,#000_100%)] pb-[14rem] md:pb-[0] py-10 relative">
      <img
        src={mic2}
        alt="joimg"
        loading="lazy"
        className="w-full flex justify-self-center md:justify-self-end md:mr-[2%] max-w-[24rem] md:max-w-[40rem] lg:max-w-[45rem] object-cover object-top"
      />
      <div className="flex absolute w-full flex-col gap-4 md:gap-10 lg:max-w-[40rem] xl:max-w-[53rem] top-28 py-10 px-5 md:px-10 xl:mr-[3%] text-white bg-black/40 backdrop-blur-sm justify-self-center lg:justify-self-start lg:bg-transparent lg:backdrop-blur-none">
        <h4 className="md:text-lg lg:text-3xl md:mb-1 text-center">
          OUR MISSION IS SIMPLE
        </h4>
        <ul className="list-disc list-inside grid gap-y-3  lg:text-xl">
          <li className="lg:marker:text-3xl marker:text-[#BC1BB1]">
            To redefine service as a growth engine, not a side function.
          </li>
          <li className="lg:marker:text-3xl marker:text-[#BC1BB1]">
            To spotlight service leaders whose work is shaping Africa’s future.
          </li>
          <li className="lg:marker:text-3xl marker:text-[#BC1BB1]">
            To equip professionals with tools and lessons to raise their own
            standards of service.
          </li>
        </ul>
        <p className="italic leading-10 max-w-[50rem] font-bold lg:text-xl text-center">
          Whether you’re a business leader, an emerging professional, or simply
          passionate about excellence, this podcast is for you.
        </p>
      </div>
    </div>
  );
}
//#BC1BB1]"
