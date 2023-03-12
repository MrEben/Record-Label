import React from 'react';
import './team.css';
import OffersHead from '../works/OffersHead';
import { AiOutlineTeam } from 'react-icons/ai';
import { squad } from './data';
import { FaInstagram, FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';
import Member from '../UI/Member';

const Team = () => {
  return (
    <>
      <section id="team">
        <OffersHead
          className="offers-head"
          icon={<AiOutlineTeam />}
          title="Our Team"
        />
        <article className="team-page">
          <div className="upper">
            <div className="message">
              <h1>
                Meet our team of creative advertisers, <i>and</i> world class{' '}
                <i>problem solvers</i>{' '}
              </h1>
              <p>
                To be the company the public wants us to be, it takes an{' '}
                <i>electric group</i> of passionate operators. Get to know the
                people leadind at <span>busy</span> Entertainment{' '}
              </p>
            </div>
            <div className="design"></div>
          </div>
          <div className="members">
            {squad.map((item) => {
              const { id, job, image, socials, name } = item;
              return (
                <Member
                  key={id}
                  job={job}
                  name={name}
                  image={image}
                  socials={[
                    { icon: <FaInstagram />, link: socials[0] },
                    { icon: <FaTwitter />, link: socials[1] },
                    { icon: <FaFacebook />, link: socials[2] },
                    { icon: <FaLinkedin />, link: socials[3] },
                  ]}
                />
              );
            })}
          </div>
        </article>
      </section>
    </>
  );
};

export default Team;
