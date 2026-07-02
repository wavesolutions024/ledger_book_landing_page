import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../../assets/autologo.png"
import"./Header.scss"

const Header = () => {
  return (
    <>
     <div className="header_parent parent">
      <div className="header_cont cont">
        <img src={logo} alt="" />
        <div className="navlinks">
            <Link to="/">Home</Link>
            <Link to="/">About</Link>
            <Link to="/">Demo</Link>
            <Link to="/">Contact</Link>
        </div>
      </div>
     </div>
    </>
    
  );
};

export default Header; 