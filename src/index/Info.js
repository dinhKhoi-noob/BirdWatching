import React from "react";

const Info = ({ img, content }) => {
  return (
    <a href="http://localhost:3000/" className="info-container">
      <img
        src="https://www.birds.cornell.edu/home/wp-content/uploads/2019/01/k12-students-looking-480x360.jpg"
        alt=""
      />
      <div className="info">
        <h2>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam
          deserunt magni voluptatem!
        </h2>
      </div>
    </a>
  );
};

export default Info;
