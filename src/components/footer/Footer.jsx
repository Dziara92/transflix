import "./footer.css";
import Logo from "./../../assets/img/Logo_Footer.svg";

const date = new Date();
const year = date.getFullYear();

const Footer = () => {
  return (
    <div className="footer">
      <div className="container footer__container">
        <div className="circle__footer">
          <img className="logo" src={Logo} alt="Logo firmy TransFlix" />
        </div>
        <p className="copyright">
          &copy; Copyright {year} Transflix Sp. z o.o.
        </p>
      </div>
    </div>
  );
};

export default Footer;
