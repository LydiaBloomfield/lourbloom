import './App.css';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Resume } from './components/Resume';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  // FIX icon on tabs in web browser w a logo
  return (

    <div className="App">
      <NavBar/>
      <Banner/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>

  );
}

export default App;
