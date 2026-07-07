import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../../assets/book.png"
import"./Header.scss"

const Header = () => {
  return (
    <>
     <div className="header_parent parent">
      <div className="header_cont cont">
        <img src={logo} alt="" />
        <div className="navlinks">
            <Link to="/">HOME</Link>
            <Link to="/">ABOUT US</Link>
            <Link to="/">SERVICES</Link>
            <Link to="/">PROJECT</Link>
            <Link to="/">PAGES</Link>
            <Link to="/">BLOG</Link>
            <Link to="/">CONTACT US</Link>
        </div>
      </div>
     </div>
    </>
    
  );
};

export default Header; 