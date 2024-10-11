import About from "./component/About";
import Contact from "./component/Contact";
import Footer from "./component/Footer";
import Hero from "./component/Hero";
import Portfolio from "./component/Portfolio";
import Resume from "./component/Resume";
import Services from "./component/Services";
import Sidebar from "./component/Sidebar";
import Skills from "./component/Skills";
import Stats from "./component/Stats";
import Testimonials from "./component/Testimonials";
import "./App.css"
import { BrowserRouter as Router } from 'react-router-dom';



function App() {
  return (
    <Router>
      <div className="App">
        <Sidebar />
        <Hero />
        <div className="responsev">
          <About />
          <Stats />
          <Skills />
          <Resume />
          <Portfolio />
          <Services />
          <Testimonials />
          <Contact />
          <Footer />
        </div>


      </div>
    </Router>
  );
}

export default App;
