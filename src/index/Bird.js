import React from "react";

const Bird = ({ name, image }) => {
  return (
    <a href="#" className="bird-container">
      <img src={image[0]} alt={name} />
      <div className="bird-name">
        <p>{name}</p>
      </div>
    </a>
  );
};

export default Bird;
