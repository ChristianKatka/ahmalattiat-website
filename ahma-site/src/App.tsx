import "./App.css";
import Navbar from "./home/1navbar/Navbar";
import { Hero } from "./home/2hero/Hero";
import { Intro } from "./home/3intro/Intro";
import { AboutMe } from "./home/4about-me/AboutMe";
import { Technologies } from "./home/5technologies/Technologies";
import { Footer } from "./home/8footer/Footer";
import { Background } from "./home/background/Background";
import { Employees } from "./home/employees/Employees";
import { Osoite } from "./home/osoite/Osoite";
import { OurWork } from "./home/our-work/OurWork";
import { PetoLattia } from "./home/peto-lattia/PetoLattia";

function App() {
  return (
    <Background>
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <Intro />
        <AboutMe />
        <Employees />
        <Technologies />
        <OurWork />
        <Osoite />
        <PetoLattia />
      </main>
      <Footer />
    </Background>
  );
}

export default App;
