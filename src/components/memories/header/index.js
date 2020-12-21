import React from 'react';

import Header from 'components/shared/header';

import MeoriesHero from 'images/hero-memories.jpg';

const MemoriesHeader = () => (
  <Header imgSrc={MeoriesHero} isSmall>
    <h1 className="hero__title u-font-script text-center" data-aos="zoom-in">our memories</h1>
  </Header>
);

export default MemoriesHeader;
