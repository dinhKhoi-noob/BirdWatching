import React from "react";
import { useState } from "react";
import PopularBird from "./PopularBird";
import BirdsData from "../FakeData";

const PopularBirds = () => {
  const [birdsCount, setBirdsCount] = useState(BirdsData.length);
  //temp birds variable for popolar birds
  const tempBirds = BirdsData.filter((BirdData, index) => index < 4);
  return (
    <section className="birds">
      <h1>Popolar Birds</h1>
      {tempBirds.map((tempBird, index) => {
        return <PopularBird key={index} {...tempBird} />;
      })}
    </section>
  );
};

export default PopularBirds;
