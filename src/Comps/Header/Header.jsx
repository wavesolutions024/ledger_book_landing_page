import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from "../../assets/wave.png"
import "./Header.scss";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";

const Header = () => {
  const [active, setActive] = useState(false);

  return (
    <>
      <div className="header_parent parent">
        <div className="header_cont cont">
          <img src={logo} alt="" />

          <div className="navlinks">
            <a href="#home" >HOME</a>
            <a href="#about">ABOUT US</a>
            <a href="#problem">THE PROBLEM</a>
            <a href="#features">FEATURES</a>
            <a href="#faq">FAQ</a>
            <a href="#contact">CONTACT US</a>
          </div>
          <div class="hamburger" onClick={() => setActive(!active)}>
            {
              active ?
                <RxCross2 />
                :
                <RxHamburgerMenu />
            }
          </div>
        </div>

        {active && <div class="mobile_responsive">
          <a onClick={() => setActive(false)} href="#home">HOME</a>
          <a onClick={() => setActive(false)} href="#about">ABOUT US</a>
          <a onClick={() => setActive(false)} href="#problem">PROBLEM</a>
          <a onClick={() => setActive(false)} href="#features">FEATURES</a>
          <a onClick={() => setActive(false)} href="#faq">FAQ</a>
          <a onClick={() => setActive(false)} href="#contact">CONTACT US</a>
        </div>}
      </div>
    </>

  );
};

export default Header; 