import React from "react";
import "./Navbar.css";
import navlogo from "../Assets/logo-shopping-bag.png";
import navprofileIcon from "../Assets/nav-profile.svg";

const Navbar = () => {
  return (
    <div className="navbar">
      <img src={navlogo} alt="" />
      <p>SuperEcoShop - Admin Panel</p>
      <img src={navprofileIcon} alt="" />
    </div>
  );
};

export default Navbar;
