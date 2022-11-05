import { useState, useEffect } from 'react';

const useScroll = () => {
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [bodyOffSet, setBodyOffSet] = useState(
    document.body.getBoundingClientRect()
  );
  const [scrollY, setScrollY] = useState(-bodyOffSet.top);
  const [scrollX, setScrollX] = useState(bodyOffSet.left);
  const [scrollDirection, setScrollDirection] = useState();
  const listener = (e) => {
    setBodyOffSet(document.body.getBoundingClientRect());
    setScrollY(bodyOffSet.top);
    setScrollX(bodyOffSet.left);
    setScrollDirection(lastScrollTop > -bodyOffSet.top ? 'down' : 'up');
    setLastScrollTop(-bodyOffSet.top);
  };
  useEffect(() => {
    window.addEventListener('scroll', listener);
  }, []);
  return {
    scrollX,
    scrollY,
    scrollDirection,
  };
};

export default useScroll;
