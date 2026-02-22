import mic1 from '../../../assets/images/mic1.png';

export default function Welcome() {
  return (
    <div className="bg-black py-10 relative min-h-[]">
      <img
        src={mic1}
        alt="joimg"
        loading="lazy"
        className="w-full absolute md:left-[5%] max-w-[24rem] md:max-w-[40rem] lg:max-w-[45rem] object-cover object-top"
      />
      <div className='flex flex-col text-center justify-self-center lg:justify-self-end gap-4 md:gap-10 lg:max-w-[40rem] xl:max-w-[53rem] top-28 py-10 md:my-20 px-5 md:px-10 xl:mr-[3%] text-white bg-black/40 backdrop-blur-sm lg:bg-transparent lg:backdrop-blur-none'>
        <h4 className='md:text-lg lg:text-2xl md:mb-10'>WELCOME TO THE PODCAST</h4>
        <h1 className='text-2xl md:text-4xl lg:text-5xl tracking-wide lg:leading-[4rem]'>Celebrating <span className="font-allura text-[#BC1BB1]">Service Leadership</span> Across Africa</h1>

        <p className='xl:text-xl'>The Art of Service is a podcast that celebrates and elevates service leadership across Africa. Through insightful conversations with business leaders, innovators, disruptors, and change-makers, the show explores how service excellence drives industries, strengthens economies, and transforms lives.</p>
        <p className='xl:text-xl'>Hosted by <span className='text-xl md:text-3xl text-[#7E0D55]'>Justina Ovat</span>, a respected voice in hospitality and service leadership, the podcast blends storytelling with strategy, offering listeners both inspiration and actionable insights.</p>
      </div>
    </div>
  );
}
