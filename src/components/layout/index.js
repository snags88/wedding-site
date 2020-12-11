import React, { useEffect } from 'react';
import AOS from 'aos';

// eslint-disable-next-line
import bootstrap from 'css/bootstrap.css';
// eslint-disable-next-line
import aos from 'css/aos.css';
// eslint-disable-next-line
import style from 'css/style.css';

import Head from './head';

const Layout = ({ children }) => {
  useEffect(() => {
    AOS.init({
      disable: false,
      duration: 900, // values from 0 to 3000, with step 50ms
      easing: 'ease', // default easing for AOS animations
      once: true, // whether animation should happen only once - while scrolling down
    });
  }, []);

  return (
    <>
      <Head />
      { children }
    </>
  );
}

export default Layout;
