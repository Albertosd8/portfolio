import './App.css';
import { useState, useEffect } from 'react';
import Menu from './components/Menu.js';
import Landing from './components/Landing.js';
import About from './components/About.js';
import Projects from './components/Projects.js';
import AboutDetail from './components/AboutDetail.js';
import Contact from './components/Contact.js';
import Intro from './components/Intro.js';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 4000);
  }, []);

  return isLoading ? (
    <div className="App">
      <div class="container Background-App m-0 p-0 d-flex justify-content-center align-items-stretch">
        <div class="row page-principal-row m-0 p-4">
          <Intro />
        </div>
      </div>
    </div>
    ) : (
    <div className="App">
      <div class="container Background-App m-0 p-0 d-flex justify-content-center align-items-stretch">
        <div class="row page-principal-row m-0 p-4">
          <div class="col-12 m-0 p-0 d-flex flex-column justify-content-start"> 
            <Menu />
            <Landing />
          </div>
        </div>
      </div>
      <div class="container Background-App m-0 p-0 d-flex justify-content-center align-items-stretch">
        <div class="row page-principal-row m-0 p-0">
          <div class="col-12 m-0 p-0">
            <About /> 
            <Projects /> 
            <AboutDetail />
            <Contact />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
