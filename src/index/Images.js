import React, { useState } from "react";
import FakeInfors from "../FakeData";

const Images = ({ name, image }) => {
  const [birds, setBirds] = useState(FakeInfors);
  return (
    <div className="images">
      <h1>Bird Images</h1>
      <div className="images-container">
        {birds.map((bird) => {
          console.log(bird);
          return (
            <div className="image">
              <img src={bird.image[0]} alt="" />
              <img
                src="https://images.pexels.com/photos/1181725/pexels-photo-1181725.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
                alt=""
              />
              <img
                src="https://images.pexels.com/photos/3727464/pexels-photo-3727464.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
                alt=""
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Images;
