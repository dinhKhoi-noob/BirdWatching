import React from "react";
import { useState } from "react";
import Bird from "./Bird";
import BirdsData from "../FakeData";

const Birds = () => {
  const [birdsCount, setBirdsCount] = useState(BirdsData.length);

  console.log(birdsCount);
  return (
    <section className="birds">
      <h1>Popolar Birds</h1>
      {BirdsData.map((BirdData, index) => {
        return <Bird key={index} {...BirdData} />;
      })}
    </section>
  );
};

export default Birds;
