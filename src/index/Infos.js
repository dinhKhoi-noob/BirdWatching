import React from "react";
import { useState, useEffect } from "react";
import Info from "./Info";
import FakeInfos from "../FakeInfos";

const Infos = () => {
  const [infos, setInfo] = useState(FakeInfos);

  return (
    <section className="infos">
      <h3>infomation</h3>
      <h1>things you did not know about birds</h1>
      <div className="flex">
        <div className="infos-container-flex">
          <div className="infos-container">
            <div className="infos-slider">
              {infos.map((info) => {
                return <Info key={info.id} {...info} />;
              })}
            </div>
          </div>
        </div>
        <div className="questions">
          <ul>
            <li>
              <a href="http://localhost:3000/">
                There’s a bird nesting near my house. What should I do?
              </a>
            </li>
            <hr />
            <li>
              <a href="http://localhost:3000/">
                How can I keep birds from hitting my windows?
              </a>
            </li>
            <hr />
            <li>
              <a href="http://localhost:3000/">
                What can cause birds to show weird color variations?
              </a>
            </li>
          </ul>
        </div>
      </div>

      <button id="prev-btn">prev</button>
      <button id="next-btn">next</button>
    </section>
  );
};

export default Infos;
