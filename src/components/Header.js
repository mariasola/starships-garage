import React from "react";
import SW_logo from "../images/SW_logo.png";

const Header = () => {
  return (
    <header className="header">
      <img className="header_img" alt="star wars logo" src={SW_logo} />
    </header>
  );
};

export default Header;
