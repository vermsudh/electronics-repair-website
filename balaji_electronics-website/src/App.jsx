import { useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import Experience from "./components/Experience/Experience";
import WhyChooseUs from "./components/WhyChooseUs/WhyChooseUs";
import RepairProcess from "./components/RepairProcess/RepairProcess";
import Testimonials from "./components/Testimonials/Testimonials";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  useEffect(() => {
    window.history.scrollRestoration = "manual";
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Experience />
      <WhyChooseUs />
      <RepairProcess />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}

export default App;