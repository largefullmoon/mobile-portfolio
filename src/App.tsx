import { BrowserRouter } from "react-router-dom";

import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";
import { useEffect } from "react";
import { config } from "./constants/config";
import Phone from './assets/phone.png'
const App = () => {
  useEffect(() => {
    if (document.title !== config.html.title) {
      document.title = config.html.title;
    }
  }, []);

  return (
    <BrowserRouter>
      <div>
        <div className="fixed right-32 top-0 z-10 opacity-80">
          <img src={Phone} className="h-screen"/>
        </div>
        <div className="fixed left-20 top-0 z-10 opacity-80 rotate-90">
          <img src={Phone} className="h-screen"/>
        </div>
        <div className="bg-primary relative z-0">
          <div className="bg-hero-pattern bg-cover bg-center bg-no-repeat">
            <Navbar />
            <Hero />
          </div>
          <About />
          <Experience />
          <Tech />
          <Works />
          <Feedbacks />
          <div className="relative z-0">
            <Contact />
            <StarsCanvas />
          </div>
        </div>
      </div>
    </BrowserRouter >
  );
};

export default App;
