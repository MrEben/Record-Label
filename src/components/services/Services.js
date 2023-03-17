import React from 'react';
import './services.css';
import Img from '../../assets/pexels-george-milton-6953870.jpg';
import { FaServicestack } from 'react-icons/fa';
import { packages, bulletpoints } from './data';
import OffersHead from '../works/OffersHead';
import Flip from '../UI/Flip';
import Team from '../Team/Team';

const Services = () => {
  return (
    <section className="container" id="services">
      <OffersHead icon={<FaServicestack />} title="Our Services" />
      <div className=" services-container">
        <div className="left-side">
          <img className="services-img" srcSet={Img} alt="img here" />
        </div>
        <div className="right-side">
          <div className="flip-downs">
            {packages.map((item) => {
              const { id, question, answer } = item;
              return <Flip key={id} question={question} answer={answer} />;
            })}
          </div>
          <div className="bullet-points">
            {bulletpoints.map((singlepoint) => {
              const { id, point, extra,icon } = singlepoint;
              return (
                <ul className="each-point" key={id}>
                  <li>
                    {icon}
                    <h3>{point}</h3>
                  </li>
                  <li>
                    <p>{extra}</p>
                  </li>
                </ul>
              );
            })}
          </div>
        </div>
      </div>
      <Team />
    </section>
  );
};

export default Services;
