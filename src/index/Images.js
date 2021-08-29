import React, { useState } from "react";
import FakeInfors from "../FakeData";

const Images = ({ name, image }) => {
  const [birds, setBirds] = useState(FakeInfors);
  //temp value for birds img
  const tempBirds = birds.filter((bird, index) => {
    return index < 14;
  });
  console.log(tempBirds);
  return (
    <div className="images">
      <h1>Bird Images</h1>
      <div className="images-container">
        {tempBirds.map((tempBird, index) => {
          return (
            <a
              key={index}
              href="../img/hero-img.jpg"
              className={"img-" + index}
              style={{
                backgroundImage: `url(${tempBird.image[0]})`,
              }}
            ></a>
          );
        })}
      </div>
    </div>
  );
};

export default Images;
