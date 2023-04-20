import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home'
import About from './components/about/About';
import Skills from './components/skill/Skills';
import Service from './components/services/Service';
import Qualification from './components/qualification/Qualification';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
function App() {
  return (
    <>
    <Header/>
    <main clasName ="main">
      <Home/>
      <About/>
      <Skills/>
      <Service/>
      <Qualification/>
      <Contact/>
      <Footer/>
    </main>
    </>
  );
}

export default App;
