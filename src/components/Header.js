import React from "react";
import "./Header.css";

const Header = (props) => {
  let counter = props.counter;

  return (
    <div className="header">
      <div>Total Qus:-{counter}</div>
      <div className="time">&#128337; 10:10</div>
    </div>
  );
};

export default Header;
