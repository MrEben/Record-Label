import React from "react";
import "./contact.css";
import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";
import { BsMessenger } from "react-icons/bs";

const Contact = () => {
  return (
    <section className="contact-container" id="contact">
      <div className="background-styles">
        <div className="background-style-top"></div>
        <div className="background-style-down"></div>
      </div>
      <div className="main-background">
        <article className="apply-content">
          <div className="apply-upper">
            <div className="apply-text">
              <h5>APPLY NOW</h5>
              <h1>
                Work for <i>yourself</i>, not by yourself with <span>busy</span>{" "}
                Entertainment
              </h1>
              <h4>
                Send us a message and we'll get it answered as soon as possible
              </h4>
              <div className="apply-links">
                <a
                  target="_blank"
                  href="https://www.google.com"
                  className="btn lg"
                >
                  find out more
                </a>
                <a
                  target="_blank"
                  href="https://www.google.com"
                  className="btn bg"
                >
                  place call <FaPhone />
                </a>
              </div>
            </div>
          </div>
          <div className="apply-form">
            <form>
              <input
                type="text"
                name="name"
                placeholder="Your Full Name Here..."
                required
              />
              <input
                type="text"
                name="name"
                placeholder="Your Full Name Here..."
                required
              />
              <input
                type="text"
                name="email"
                placeholder="Your Email Here..."
                required
              />
              <input
                type="text"
                name="email"
                placeholder="Your Email Here..."
                required
              />
              <input
                type="text"
                name="email"
                placeholder="Your Email Here..."
                required
              />
              <input
                type="text"
                name="email"
                placeholder="Your Email Here..."
                required
              />
              <textarea
                name="message"
                rows="7"
                placeholder="Your Message Here"
                required
              ></textarea>
              <button type="submit" className="btn bg">
                submit your message
              </button>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse
                commodi odio corrupti reprehenderit voluptatibus, consequatur
                veritatis aliquam odit itaque animi! nsbdvjah apples ans fruiyt
                plO rw
              </p>
            </form>
          </div>
          <div className="apply-lower">
            <div className="apply-lower-text">
              <h4>General Enquiries</h4>
              <p>
                Reach us at <span>info@busyentertainment.yahoo.org</span> and we
                will get back to you soon
              </p>
              <h4>Working at Busy Entertainment?</h4>
              <p>
                Visit our careers page or send us an email at{" "}
                <span>info@busyentertainment.yahoo.org</span>
              </p>
              <h4>Insurance Agent?</h4>
              <p>
                Become an insurance agent by contacting us at{" "}
                <span>info@busyentertainment.yahoo.org</span>
              </p>
              <div className="follow">
                <h5>Follow Us</h5>
                <a href="https://www.google.com">
                  <MdEmail />
                </a>
                <a href="https://www.google.com">
                  <IoLogoWhatsapp />
                </a>
                <a href="https://www.google.com">
                  <BsMessenger />
                </a>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Contact;
