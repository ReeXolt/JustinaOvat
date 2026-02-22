import { useState } from "react";
import faqImg from "../../../assets/images/faqImg.png";
import { FaPlus } from "react-icons/fa6";
import { LiaTimesSolid } from "react-icons/lia";
import { CSSTransition } from "react-transition-group";

export const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Who is Justina Ovat",
      answer:
        "Justina Ovat is a seasoned professional known for her roles as a principal consultant, certified Hospitality Trainer, certified guest service professional, and licensed service designer. She also actively participates in events as a speaker (keynote, lead speaker, and panelist) and conducts event hosting.",
    },
    {
      question: "How can I engage Justina Ovat as a Principal Consultant?",
      answer:
        "To engage Justina Ovat as a Principal Consultant, please reach out through the provided contact channels, and our team will guide you through the process.",
    },
    {
      question:
        "What services does Justina Ovat offer as a Certified Hospitality Trainer?",
      answer:
        "Justina Ovat provides comprehensive training services in the hospitality industry, covering various aspects such as customer service, management, and industry best practices.",
    },
    {
      question:
        "How can I engage Justina Ovat as a speaker for an event or training session?",
      answer:
        "To engage Justina Ovat as a speaker or for a training session, please use the provided contact information on her official website or submit a booking form for inquiries regarding availability and details.",
    },
    {
      question:
        "Can I book Justina Ovat for a speaking engagement at our event?",
      answer:
        "Absolutely! Justina Ovat is available for speaking engagements, including keynotes, lead speaker roles, and participation as a panelist. Please contact us with event details to discuss further.",
    },
    {
      question:
        "How can I request Justina Ovat's services for a specific event?",
      answer:
        "To request Justina Ovat's services for a particular event, please use the provided contact information or submit a booking form available on our website.",
    },
    {
      question:
        "Are there any specific requirements for booking Justina Ovat's services?",
      answer:
        "Specific requirements may vary based on the type of service requested. Please refer to the booking form and provide necessary details. Our team will guide you through any additional requirements..",
    },
    {
      question:
        "How can I contact Justina Ovat for further inquiries or collaboration?",
      answer:
        "For further inquiries or collaboration, you can contact Justina Ovat through the provided contact details on her official website or use the designated channels for communication..",
    },
  ];

  return (
    <section className="w-full bg-white text-black py-10">
      <div className="w-[90%] mx-auto md:flex justify-between gap-10">
        <div className="w-full md:w-1/2 mb-5 md:mb-0">
          <p className="font-bold underline text-2xl pb-3">
            Frequently Asked Questions
          </p>
          <h1 className=" leading-normal md:leading-[66px] font-bold text-3xl  md:text-5xl pb-5">
            Need more specifics?Here are the answers.
          </h1>

          <div>
            <img src={faqImg} alt="img" />
          </div>
        </div>

        <div className="w-full md:w-1/2">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="mb-5"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <div className="inline-flex items-center w-full bg-black text-white rounded-t-lg p-8 ">
                {openIndex === index ? (
                  <LiaTimesSolid
                    className="inline-block h-5 w-5 text-current cursor-pointer"
                    style={{ minWidth: "20px", minHeight: "20px" }}
                  />
                ) : (
                  <FaPlus
                    className="inline-block h-5 w-5 cursor-pointer"
                    style={{ minWidth: "20px", minHeight: "20px" }}
                  />
                )}
                <p className="inline-block pl-5 md:font-medium text-lg font-bold md:text-2xl">
                  {faq.question}
                </p>
              </div>
              <CSSTransition
                in={openIndex === index}
                timeout={300}
                classNames="faq"
                unmountOnExit
              >
                <p className=" border rounded-b-lg p-5 text-sm md:text-base  shadow-md">
                  {faq.answer}
                </p>
              </CSSTransition>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
