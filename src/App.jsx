import { useState } from "react";
import {
  Header,
  Navigation,
  AboutUs,
  Footer,
  Contact,
  ScrollToTopBtn,
  Transport,
} from "./components/main";

function App() {
  const [isActive, setIsActive] = useState(true);

  const handlerLanguage = () => {
    setIsActive(!isActive);
  };
  return (
    <>
      <Navigation isActive={isActive} handlerLanguage={handlerLanguage} />
      <Header isActive={isActive} />
      <AboutUs isActive={isActive} />
      <Transport isActive={isActive} />
      <Contact isActive={isActive} />
      <Footer />
      <ScrollToTopBtn />
    </>
  );
}

export default App;
