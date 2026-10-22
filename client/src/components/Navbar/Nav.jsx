import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react"

import "./Nav.css";

function Navbar() {
  // scroll functionality, changes height and transparency when scrolling to match background 
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
            // the X in "window.scrollY > X" is the value that dictates when the navbar collapses
            // higher value --> more scrolling before navbar collapses
            setScrolled(window.scrollY > 260);
        };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });
  
  return (
    <nav className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <h1 className="logo">
        <NavLink to="/"> {/* link logo to homepage */}
          <img src="/craneslogo_circle.png"></img>
          <i>CRANES</i>
        </NavLink>
      </h1>

      <ul className={`nav-links`}>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/home3">Page 3</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;