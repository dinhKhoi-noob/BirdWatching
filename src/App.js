import React from "react";
import Nav from "./index/Nav";
import Hero from "./index/Hero";
import Birds from "./index/Birds";
import Infos from "./index/Infos";
import Images from "./index/Images";
import "./css/index.scss";

function App() {
  return (
    <main>
      <Nav></Nav>
      <Hero />
      <Birds></Birds>
      <Infos />
      <Images />
    </main>
  );
}

export default App;
