import React from "react";
import logo from "../../images/black-logo.svg";
import "./_nav.scss";

const Nav = () => {
  return (
    <div className="aka--awesome--nav">
      <img src={logo} alt="" />
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">Services</a>
        </li>
        <li>
          <a href="/">Our work</a>
        </li>
        <li>
          <a href="/">Company</a>
        </li>
        <li>
          <a href="/">Blog</a>
        </li>
        <button className="btn btn-black ">Get in touch</button>
      </ul>
    </div>
  );
};

export default Nav;
