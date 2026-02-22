import { useEffect, useState } from "react";
import { BsArrowUpSquareFill } from "react-icons/bs";

export const ScrollToTopButton = () => {
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(true);
      clearTimeout(window.scrollTimeout);
      window.scrollTimeout = setTimeout(() => {
        setIsScrolling(false);
      }, 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    !isScrolling && (
      <button onClick={handleClick} className="fixed bottom-4 right-4 ">
        <BsArrowUpSquareFill size={40} className="text-white " />
      </button>
    )
  );
};
