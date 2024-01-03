import "./scrollToTopBtn.css";
import ArrowUp from "./../../assets/icons/ArrowUp";
import { useState, useEffect } from "react";

const ScrollToTopBtn = () => {
  const [bactToTop, setBackToTop] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setBackToTop(true);
      } else {
        setBackToTop(false);
      }
    });
  }, []);

  const backToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  return (
    <>
      {bactToTop && (
        <button className="btn__scroll" onClick={backToTop}>
          <a href="/#">
            <ArrowUp />
          </a>
        </button>
      )}
    </>
  );
};

export default ScrollToTopBtn;
