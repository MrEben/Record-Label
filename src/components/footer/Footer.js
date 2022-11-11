import React from "react";
import "./footer.css";
import { AiOutlineDown } from "react-icons/ai";
import logo from "../../assets/logo.png";
import { footerLinks } from "./data";
import { social } from "../nav/data";

const Footer = () => {
  return (
    <footer>
      <div className="footer-links">
        <div className="logo-message">
          <h2>about us</h2>
          <h5>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
            optio enim fuga amet!
          </h5>
          <img src={logo} alt="" />
        </div>

        <div className="company-values">
          <h2>contact us</h2>
          <ul>
            <li>
              <a target="_blank" href="">
                locate us at Choco avenue
              </a>
            </li>
            <li>
              <a target="_blank" href="">
                phone +233 65 617 7263
              </a>
            </li>
            <li>
              <a target="_blank" href="">
                info@busyentertainment.com
              </a>
            </li>
          </ul>
        </div>
        <div className="company-footer-links">
          <h2>permalinks</h2>
          <ul>
            <li>
              <a target="_blank" href="">
                busy access
              </a>
            </li>
            <li>
              <a target="_blank" href="">
                my account
              </a>
            </li>
            <li>
              <a target="_blank" href="">
                get artifacts
              </a>
            </li>
          </ul>
        </div>
        <div className="newsleter-sec">
          <div className="droplinks">
            {footerLinks.map((item) => {
              const { id, link1, link2, link3, footerHead } = item;
              return (
                <div key={id} className="dropdown">
                  <button class="dropbtn">
                    {footerHead}
                    <AiOutlineDown />
                  </button>
                  <div class="dropdown-content">
                    <a href="#">{link1}</a>
                    <a href="#">{link2}</a>
                    <a href="#">{link3}</a>
                  </div>
                </div>
              );
            })}
          </div>
          <h2>newsletter</h2>
          <h5>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
            optio enim fuga amet!
          </h5>
          <form>
            <input
              className="user-email"
              type="text"
              name="email"
              placeholder="Email Address"
              required
            />
            <input className="newsletter-btn" type="button" value="Subscribe" />
          </form>
        </div>
      </div>
      <div className="footer-copyrights">
        <h5>
          copyright &copy;2022 all rights reserved..this template was built by
          <span> ebenezer</span>
        </h5>{" "}
        <ul className="social-icons">
          {social.map((socialIcon) => {
            const { id, url, icon } = socialIcon;
            return (
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
