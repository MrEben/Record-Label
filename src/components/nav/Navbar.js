import React, { useState, useRef, useEffect } from "react";
import { BiMenuAltLeft } from "react-icons/bi";
import { links } from "./data";
import logo from "../../assets/logo.png";
import "./nav.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [navbar, setnavbar] = useState(false);
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);
  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = "0px";
    }
  }, [showLinks]);
  const removeNav = () => {
    linksContainerRef.current.style.height = "0px";
  };
  return (
    <nav className={navbar ? "active" : "not-active"}>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="logo" alt="logo" />
          <button className="nav-toggle" onClick={toggleLinks}>
            <BiMenuAltLeft />
          </button>
        </div>
        <div className="links-container" ref={linksContainerRef}>
          <ul className="links" ref={linksRef}>
            {links.map((link) => {
              const { id, url, text } = link;
              return (
                <li key={id}>
                  <Link onClick={removeNav} to={url}>
                    {text}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
       
      </div>
    </nav>
  );
};

export default Navbar;
