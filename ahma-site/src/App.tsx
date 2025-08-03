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
    <>
      <Background>
        <Navbar></Navbar>
        <Hero></Hero>
        <Intro></Intro>
        <AboutMe></AboutMe>
        <Employees></Employees>
        <Technologies></Technologies>
        <OurWork></OurWork>
        <Osoite></Osoite>
        <PetoLattia></PetoLattia>
        <Footer></Footer>
      </Background>
    </>
  );
}

export default App;
