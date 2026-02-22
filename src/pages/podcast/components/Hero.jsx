export default function Hero() {
  return (
    <div className="flex flex-col w-[90%] mx-auto h-[70vh]">
      <h1 className="font-playfair text-3xl md:text-6xl xl:text-8xl font-bold pt-16 md:pt-10 leading-[44px] text-white">
        The Art Of Service <span className="block">Podcast</span>
      </h1>
      <div className="mt-2">
        <p className="text-gray-300 xl:text-lg max-w-[28rem] xl:max-w-[35rem]">
          Join Justina Ovat for inspiring stories and actionable insights from
          Africa&apos;s service leaders
        </p>
        <p className="text-gray-300 my-10">WATCH AND LISTEN</p>
      </div>
      <div className="flex text-white text-sm md:text-lg gap-2 md:gap-5">
        <span className="border py-2 px-4 rounded-2xl border-[#4A4D2F]">
          Apple
        </span>
        <span className="border py-2 px-4 rounded-2xl border-[#4A4D2F]">
          Youtube
        </span>
        <span className="border py-2 px-4 rounded-2xl border-[#4A4D2F]">
          Spotify
        </span>
      </div>
    </div>
  );
}
