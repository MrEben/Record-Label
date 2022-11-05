import React from 'react';
import './header.css';
import Bg from '../../assets/video.mp4';
import Works from '../works/Works';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <div>
        <header id="header">
          <div className="header-page">
            <video className="video-container" autoPlay loop muted>
              <source src={Bg} type="video/mp4" />
            </video>
            <h1>
              <q>You can cage the singer but not the song</q> Harry Belafonte
            </h1>
            <h3>Promote your music on the world's best streaming platforms</h3>
            <Link to="/apply" className="btn">
              get started
            </Link>
          </div>
        </header>
        <Works />
      </div>
    </>
  );
};

export default Header;
