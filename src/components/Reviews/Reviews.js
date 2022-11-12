import React from "react";
import "./reviews.css";
import OffersHead from "../works/OffersHead";
import { ImQuotesLeft } from "react-icons/im";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";
import Card from "../UI/Card";
import { useState } from "react";
import { testimonials } from "./data";

const Reviews = () => {
  const [index, setIndex] = useState(0);
  const { name, quote, job, avatar } = testimonials[index];
  const prevQuote = () => {
    setIndex(index - 1);
    if (index <= 0) {
      setIndex(testimonials.length - 1);
    }
  };

  const nextQuote = () => {
    setIndex(index + 1);
    if (index >= testimonials.length - 1) {
      setIndex(0);
    }
  };
  return (
    <div className="testimonials">
      <div className="container testimonials__container">
        <OffersHead
          icon={<ImQuotesLeft />}
          title="Testimonials"
          className="testimonials-head"
        />
        <Card className="testimonial">
          <div className="testimonial__avatar">
            <img src={avatar} alt="image here" />
          </div>
          <p className="testimonial__quote">{`"${quote}"`}</p>
          <h5>{name}</h5>
          <small className="testimonial-title">{job}</small>
        </Card>
        <div className="testimonial-btn-container">
          <button className="testiminial-btn" onClick={prevQuote}>
            <IoIosArrowDropleftCircle />
          </button>
          <button onClick={nextQuote} className="testiminial-btn">
            <IoIosArrowDroprightCircle />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
