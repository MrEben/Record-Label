import React from 'react';
import './footer.css';
import { FaBehance, FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        RICHIES
      </a>
      <ul className="permalinks">
        <li>
          <a href="#home">home</a>
        </li>
        <li>
          <a href="#works">works</a>
        </li>
        <li>
          <a href="#about">about</a>
        </li>
        <li>
          <a href="#contact">contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="http://">
          <FaFacebook />
        </a>
        <a href="http://">
          <FaLinkedin />
        </a>
        <a href="http://">
          <FaTwitter />
        </a>
        <a href="http://">
          <FaBehance />
        </a>
      </div>

      <div className="footer__copyrght">
        <small>&copy; richies muse. all rights reserved</small>
      </div>
    </footer>
  );
};

export default Footer;
