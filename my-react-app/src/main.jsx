import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css"
import data from "./datas/data.json";
import { Header } from "./Header/Header.jsx";
import Hero from "./HeroSection/Hero.jsx";
import Services from "./ServicesSection/Services.jsx";
import AboutMe from './AboutMe/AboutMe.jsx';
import Portfolio from './PortfolioSection/Portfolio';
import ContactMe from './ContactMe/ContactMe';

const main = ReactDOM.createRoot(document.getElementById('main'))
main.render(
  <>
    <Header data={data} />
    <Hero data={data} />
    <Services data={data} />
    <AboutMe data={data} />
    <Portfolio data={data} />
    <ContactMe data={data} />
  </>
);