import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import WorkExperience from "./components/WorkExperience";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BACKGROUND from "./assets/BACKGROUND.png";

const App = () => {
  return (
   
    <div className="bg-background">
      <div
        style={{
          backgroundImage: `url(${BACKGROUND})`,
          backgroundPosition: `50% 50%`,
        }}
      > 
      <Navbar />
      <Hero />
      </div>
      
      <Skills />
      <WorkExperience />
      <AboutMe />
      <Contact />
      <Footer />
    </div>
    
    
  );
};

export default App;
