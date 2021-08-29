import React from "react";

const PopularBird = ({ name, image }) => {
  return (
    <a
      href="#"
      className="bird-container"
      style={{ backgroundImage: `url(${image[0]})` }}
    >
      <div className="bird-name">
        <p>{name}</p>
      </div>
    </a>
  );
};

export default PopularBird;
