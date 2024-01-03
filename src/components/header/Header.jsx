/* eslint-disable react/prop-types */
import "./header.css";
import { motion } from "framer-motion";

const Header = ({ isActive }) => {
  const variantsH1 = {
    initial: {
      opacity: 0,
      x: -500,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: { delay: 0.5, duration: 0.2 },
    },
  };
  const variantsSpan = {
    initial: {
      scaleX: 1,
    },
    animate: {
      scaleX: 0,
      transition: { delay: 0.5, duration: 0.2 },
    },
  };
  return (
    <section className="header">
      <div className="cover">
        <div className="container head">
          <div className="header__heading">
            <motion.h1
              className="title"
              variants={variantsH1}
              initial="initial"
              animate="animate"
            >
              Trans<span>flix</span>
            </motion.h1>
            <p className="description">
              <motion.span
                className="description-span"
                variants={variantsSpan}
                initial="initial"
                animate="animate"
              ></motion.span>
              {isActive
                ? "Twoja sprawdzona logistyka"
                : "Your proven logistics"}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
