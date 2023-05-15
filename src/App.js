import React from 'react';
import './App.css';
import Header from './Components/header';
import Banner from './Components/banner';
import About from './Components/about';
import Work from './Components/work';
import Skills from './Components/skills';
import Map from './Components/map';
import Footer from './Components/footer';


const App = () => {
  return (
    <div>
      <Header />
      <Banner />
      <About />
      <Work />
      <Skills />
      <Map />
      <Footer />
    </div>
  );
};

export default App;

