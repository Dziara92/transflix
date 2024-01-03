/* eslint-disable react/prop-types */
import "./contact.css";
import Office from "../../assets/icons/Office";
import Phone from "../../assets/icons/Phone";
import Email from "../../assets/icons/Email";
import Form from "./Form";

const Contact = ({ isActive }) => {
  return (
    <div id="contact" className="contact">
      <div className="container ">
        <h3 className="contact__title">
          {isActive ? "Skontaktuj się z nami" : "contact us"}
        </h3>
        <div className="contact__us">
          <div className="box__left">
            <div className="box__left-icon">
              <Office />
            </div>
            <h3>{isActive ? "Adres:" : "Address:"}</h3>
            <p>ul.Bp. Piotra Tomickiego 24/139</p>
            <p>31-982 Kraków</p>
            <p>Polska</p>
            <div className="box__left-icon phone">
              <Phone />
            </div>
            <h3>Tel:</h3>
            <p>+48 690 500 490</p>
            <p>+48 573 841 931</p>
            <div className="box__left-icon email">
              <Email />
            </div>
            <h3>Email:</h3>
            <p>info@transflix.pl</p>
          </div>
          <div className="box__right">
            <Form isActive={isActive} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
