import React from 'react';

import Header from 'components/shared/header';

import MemoriesHero from 'images/hero-memories.jpg';

const MemoriesHeader = () => (
  <Header imgSrc={MemoriesHero} isSmall>
    <h1 className="hero__title u-font-script text-center" data-aos="zoom-in">our photos</h1>
  </Header>
);

export default MemoriesHeader;
