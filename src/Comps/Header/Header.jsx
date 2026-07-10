import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from "../../assets/book.png"
import"./Header.scss";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";

const Header = () => {
  const [active,setActive] = useState(false);

 
  return (
    <>
     <div className="header_parent parent">
      <div className="header_cont cont">
        <img src={logo} alt="" />

        <div className="navlinks">
            <Link to="/" >HOME</Link>
            <Link to="/">ABOUT US</Link>
            <Link to="/">SERVICES</Link>
            <Link to="/">PROJECT</Link>
            <Link to="/">PAGES</Link>
            <Link to="/">BLOG</Link>
            <Link to="/">CONTACT US</Link>
        </div>
        <div class="hamburger" onClick={()=>setActive(!active)}>
          {
           active ?
  <RxCross2 />
  :
 <RxHamburgerMenu />
          }
         
        
        </div>
      </div>

   {active &&   <div class="mobile_responsive">
       <Link onClick={()=>setActive(false)}  to="/">HOME</Link>
            <Link onClick={()=>setActive(false)} to="/">ABOUT US</Link>
            <Link to="/">SERVICES</Link>
            <Link to="/">PROJECT</Link>
            <Link to="/">PAGES</Link>
            <Link to="/">BLOG</Link>
            <Link to="/">CONTACT US</Link>
      </div>}
     </div>
    </>
    
  );
};

export default Header; 