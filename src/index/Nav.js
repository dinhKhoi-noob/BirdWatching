import React from "react";
import { FaSearch } from "react-icons/fa";

const Nav = () => {
  return (
    <nav className="nav-bar">
      <div className="logo">
        <img
          className="nav-logo"
          src={require("../img/1503527955.svg").default}
          alt="logo"
        />
      </div>
      <ul className="nav-list">
        <li>Birds</li>
        <li>Live Cams</li>
        <li>Courses</li>
        <li>Bird ID</li>
        <li className="search-bar">
          <div className="search-icon">
            <FaSearch />
          </div>
          <input type="text" placeholder="Search" />
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
