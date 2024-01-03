/* eslint-disable react/prop-types */
import "./transport.css";
import { transports } from "../../data/transport";
import { motion } from "framer-motion";

const Transport = ({ isActive }) => {
  const variantsFadeIn = {
    initial: {
      opacity: 0,
      y: 20,
    },
    animate: (index) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 1, delay: index * 0.3 },
    }),
  };

  return (
    <section id="transport" className="transport">
      <div className="container">
        <h2 className="title-transport">Transport</h2>
        <div className="container__transport">
          {transports.map((transport, index) => {
            return (
              <motion.div
                variants={variantsFadeIn}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                custom={index}
                className="type__transport"
                key={transport.id}
              >
                <img
                  className="img-type--transport  "
                  src={transport.img}
                  alt="Zestaw ciężarowy z plandeką"
                />
                <div className="transport__type--desc transport__type--desc--blur ">
                  <h3 className="type__title">
                    {isActive ? transport.plType : transport.engType}
                  </h3>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Transport;
