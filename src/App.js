import './App.css';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Resume } from './components/Resume';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { Experience } from './components/Experience';


function App() {
  // FIX icon on tabs in web browser w a logo

  useEffect(()=>{
    fetch("/api")
    .then((res) => res.json())
    .then((data) => {console.log(data)})
  }, [])

  return (

    <div className="App">
      <NavBar/>
      <Banner/>
      <Experience/>
      <Projects/>
      <Skills/>
      <Contact/>
      <Footer/>
    </div>

  );
}

export default App;
