import React, { useState } from 'react';
import { FaArrowCircleUp } from 'react-icons/fa';
import './scroll.css';

const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
      /* you can also use 'auto' behaviour
		in place of 'smooth' */
    });
  };

  window.addEventListener('scroll', toggleVisible);

  return (
    <div>
      <div
        style={{ display: visible ? 'inline' : 'none' }}
        className="btnscroll"
        onClick={scrollToTop}
      >
        <FaArrowCircleUp style={{ width: '40px', height: '40px' }} />
      </div>
    </div>
  );
};

export default ScrollButton;
