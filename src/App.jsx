import ButtonGradient from "./assets/svg/ButtonGradient";
import Benefits from "./components/Benefits";
import Button from "./components/Button";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Collaboration from "./components/Collaboration";
import Services from "./components/Services";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <div className="pt-[4.75 rem] lg:pt-[5.25 rem] overflow-hidden">
        <Header />
        <Hero />
        <Benefits />
        <Collaboration />
        <Services />
        <Pricing />
        <Footer />
      </div>
      
      <ButtonGradient />
    </>
  );
};

export default App;