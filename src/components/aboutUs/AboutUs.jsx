/* eslint-disable react/prop-types */
import "./aboutus.css";
import Logo from "./../../assets/img/Logo.svg";
import Cooperation from "../../assets/icons/Cooperation";
import Truck from "../../assets/icons/Truck";
import Money from "../../assets/icons/Money";
import { content } from "./content";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const AboutUs = ({ isActive }) => {
  const { ref: myRef, inView: iconInView } = useInView({ triggerOnce: true });
  const { ref: aboutUsRef, inView: aboutUs } = useInView({ triggerOnce: true });

  const imgVariants = {
    initial: { opacity: 0, scale: 0 },
    animate: { opacity: 1, scale: 1, transition: { duration: 1, delay: 0.5 } },
  };

  return (
    <section id="aboutus" className="aboutus">
      <div className="container about-us">
        <motion.img
          className="logo__aboutus"
          src={Logo}
          alt="Logo firmy TransFlix"
          variants={imgVariants}
          initial="initial"
          animate="animate"
        />
        <div className="container__aboutus">
          <h2 className="title__aboutus lazy">Transflix spedycja</h2>
          <p
            ref={aboutUsRef}
            className={
              aboutUs
                ? "description__aboutus description__aboutus--display"
                : "description__aboutus"
            }
          >
            {isActive ? content.plLanguage : content.engLanguage}
          </p>
        </div>
      </div>
      <div ref={myRef} className="container advantages">
        <div className="advantages__box">
          <div className={iconInView ? "icon icon--display" : "icon"}>
            <Cooperation />
          </div>
          <h3 className="advantages__title">
            {isActive ? content.plCooperation.h1 : content.engCooperation.h1}
          </h3>
          <p
            className={
              iconInView
                ? "advantages__text advantages__text--display"
                : "advantages__text"
            }
          >
            {isActive
              ? content.plCooperation.content
              : content.engCooperation.content}
          </p>
        </div>
        <div className="advantages__box">
          <div className={iconInView ? "icon icon--display" : "icon"}>
            <Money />
          </div>
          <h3 className="advantages__title">
            {isActive ? content.plRates.h1 : content.engRates.h1}
          </h3>
          <p
            className={
              iconInView
                ? "advantages__text advantages__text--display"
                : "advantages__text"
            }
          >
            {isActive ? content.plRates.content : content.engRates.content}
          </p>
        </div>
        <div className="advantages__box">
          <div className={iconInView ? "icon icon--display" : "icon"}>
            <Truck />
          </div>
          <h3 className="advantages__title">
            {isActive ? content.plSolutions.h1 : content.engSolutions.h1}
          </h3>
          <p
            className={
              iconInView
                ? "advantages__text advantages__text--display"
                : "advantages__text"
            }
          >
            {isActive
              ? content.plSolutions.content
              : content.engSolutions.content}
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
