import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css"
import data from "./datas/data.json";
import { Header } from "./Header/Header.jsx"
import Hero from "./HeroSection/Hero.jsx"

const main = ReactDOM.createRoot(document.getElementById('main'))
main.render(
  <>
    <Header data={data} />
    <Hero data={data} />
  </>
);