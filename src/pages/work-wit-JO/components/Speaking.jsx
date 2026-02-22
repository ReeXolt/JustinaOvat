import { useState } from "react";
import radial from "../../../assets/images/radial.png";
import speaking1 from "../../../assets/images/speaking1.png";
import speak2 from "../../../assets/images/speak2.png";
import speak3 from "../../../assets/images/speak3.png";
import speak4 from "../../../assets/images/speak4.png";
import speak5 from "../../../assets/images/speak5.png";
import speak6 from "../../../assets/images/speak6.png";
import "./work.css";
import { Button } from "../../../components/button/Button";
import { useNavigate } from "react-router-dom";
export const Speaking = () => {
  const topics = [
    {
      sidebarTitle: "Hospitality",
      title: "Hospitality",
      content:
        "She delves into the intricacies of the hospitality industry where every interaction becomes an opportunity to create lasting impressions, gain insights into elevating customer experiences and optimizing service delivery",
      images: [speaking1, speak2],
      alt: "Topic 1",
    },
    {
      sidebarTitle: "Service Design",
      title: "Service Design",
      content:
        " An industry she has recently taken interest in where creativity meets functionality. She talks about how to craft seamless, user centric- experiences that make a lasting impact",
      images: [speak3, speak4],
      alt: "Topic 2",
    },
    {
      sidebarTitle: "Leadership",
      title: "Leadership",
      content:
        "Leadership is not just a title; it’s a journey. Justina loves to explore the principles of effective leadership, how she hones her skills to inspire and guide teams toward success",
      images: [speak5, speak6],
      alt: "Topic 3",
    },
  ];

  const [currentTopic, setCurrentTopic] = useState(topics[0]);
  const [activeTab, setActiveTab] = useState(0);
  const navigate = useNavigate();

  return (
    <section className="relative bg-speakBgMob md:bg-speakBg bg-cover bg-no-repeat text-black pt-10 h-[900px]  md:pb-[300px]">
      <div className="text-center">
        <h1 className=" font-bold text-2xl md:text-4xl pb-3">
          Top Speaking Appearances
        </h1>
        <p className="w-[90%] md:w-2/3 mx-auto text-sm md:text-base">
          Delivered tranformational speeches and conversations across sectors
          and themes such as hospitality, customer service, service design,
          leadership, women empowerment, entrepreneurship, youth development,
          employability and enterprise Development.
        </p>
      </div>
      <div className="md:relative w-[90%] mx-auto xl:flex justify-between gap-10 space-y-4 xl:space-y-0 z-20  mt-5 xl:mt-20">
        <div className="radial   no-click hidden xl:block">
          <img src={radial} alt="img" />
        </div>

        <div className="xl:hidden  w-full flex items-center justify-center gap-5 font-medium text-sm ">
          {topics.map((topic, index) => (
            <div key={index}>
              <button
                onClick={() => {
                  setCurrentTopic(topic);
                  setActiveTab(index);
                }}
                className={index === activeTab ? "active font-bold  " : ""}
                style={
                  index === activeTab
                    ? {
                        textDecoration: "underline",
                        textDecorationThickness: "2px",
                        textUnderlineOffset: "5px",
                      }
                    : {}
                }
              >
                {topic.sidebarTitle}
              </button>
            </div>
          ))}
        </div>

        <div className=" hidden w-full xl:w-1/4 xl:flex flex-col  font-medium text-sm space-y-8 pt-24 pl-28">
          {topics.map((topic, index) => (
            <div key={index}>
              <button
                onClick={() => {
                  setCurrentTopic(topic);
                  setActiveTab(index);
                }}
                className={index === activeTab ? "active font-bold " : ""}
              >
                {topic.sidebarTitle}
              </button>
            </div>
          ))}
        </div>

        <div className="hidden md:block w-full xl:w-[30%] bg-[#FFFFFF4D] p-5 rounded-md h-auto">
          <h1 className="text-2xl md:text-4xl  md:mt-0 text-center md:text-left font-bold  pb-3">
            {currentTopic.title}
          </h1>
          <p className="text-sm md:text-base leading-6">
            {currentTopic.content}
          </p>

          <div className="pt-10 text-center  ">
            <Button
              onClick={() => navigate("/book")}
              label="Book justina"
              className="bg-black text-white text-base py-2 px-10 uppercase border-4 border-[#4B4949] font-medium rounded-2xl   hover:bg-white hover:text-black duration-500 transition-all ease-in-out"
            />
          </div>
        </div>

        <div className="md:hidden block absolute top-[60%] w-[90%]  xl:w-[30%] bg-[#FFFFFF4D] p-5 rounded-md h-auto">
          <h1 className="text-2xl md:text-4xl  md:mt-0 text-center md:text-left font-bold  pb-3">
            {currentTopic.title}
          </h1>
          <p className="text-sm md:text-base leading-6">
            {currentTopic.content}
          </p>

          <div className="pt-10 text-center  ">
            <Button
              onClick={() => navigate("/book")}
              label="Book justina"
              className="bg-black text-white text-base py-2 px-10 uppercase border-4 border-[#4B4949] font-medium rounded-2xl   hover:bg-white hover:text-black duration-500 transition-all ease-in-out"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
