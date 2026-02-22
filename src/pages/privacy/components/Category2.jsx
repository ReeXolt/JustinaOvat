export const Category2 = () => {
  return (
    <section className="w-full bg-black text-white py-10">
      <div className="w-[90%] mx-auto ">
        <div className="bg-no-repeat text-center h-[100px] md:h-[180px]  bg-contain bg-privacyMobBg2 md:bg-privacyBg2 flex flex-col py-5 md:py-16 ">
          <h1 className="text-xl md:text-4xl font-bold text-black pb-0 md:pb-5 uppercase">
            CATEGORIES OF PERSONAL INFORMATION
          </h1>
        </div>

        <div className="pt-8">
          <h1 className="text-center md:text-left text-xl md:text-2xl font-bold pb-5">
            CONTACT INFORMATION AND BASIC PERSONAL DETAILS
          </h1>
          <p className="font-normal text-sm md:text-base pb-5 ">
            For example: your full name, phone number, e-mail address.
          </p>
          <p className="text-sm md:text-base">
            How we use it. We use this information to:
          </p>
          <ul className="list-disc pl-5 text-sm md:text-base">
            <li>
              communicate with you, including sending statements and invoices,
              communications, news, alerts and marketing communications;
            </li>
            <li>
              deal with enquiries and complaints made by or about you relating
              to the Services; and
            </li>
            <li> authentication purposes.</li>
          </ul>
        </div>

        <div className="py-5">
          <h1 className="text-center md:text-left text-xl md:text-2xl font-bold pb-5">
            WEBSITES, BUSINESS AND MARKETING INFORMATION
          </h1>
          <p className="font-normal text-sm md:text-base pb-5 ">
            For example: company websites, IP address, current email list size,
            email marketing software, product usage information, demographic
            data, data about customer’s 3rd party services, other business
            information (Facebook ad spend, status of business, industry,
            business goals).
          </p>
          <p className="text-sm md:text-base">
            How we use it. We use this information to:
          </p>
          <ul className="list-disc pl-5 text-sm md:text-base">
            <li>
              operate, maintain and provide to you the features and
              functionality of the Services;
            </li>
            <li>
              provide you with Services to deal with any requests or inquiries
              you may have and to carry out our obligations arising from any
              contracts it has entered into with you;
            </li>
            <li>
              ensure that content is presented in the most effective manner; and
            </li>
            <li>determine relevant advertising / marketing activities.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};
