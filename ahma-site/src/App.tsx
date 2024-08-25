import "./App.css";
import Navbar from "./home/1navbar/Navbar";
import { Hero } from "./home/2hero/Hero";
import { Intro } from "./home/3intro/Intro";
import { AboutMe } from "./home/4about-me/AboutMe";
import { Technologies } from "./home/5technologies/Technologies";
import { Footer } from "./home/8footer/Footer";
import { Background } from "./home/background/Background";
import { Employees } from "./home/employees/Employees";
import { HeroSection } from "./home/full-screen-image/FullScreenImage";
import { OurWork } from "./home/our-work/OurWork";

function App() {
  return (
    <>
      <Background>
        <Navbar></Navbar>
        <Hero></Hero>
        <HeroSection></HeroSection>
        <Intro></Intro>
        <AboutMe></AboutMe>
        <Employees></Employees>
        <Technologies></Technologies>
        <OurWork></OurWork>
        <Footer></Footer>
      </Background>
    </>
  );
}

export default App;
