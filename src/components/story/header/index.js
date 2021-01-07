import React from 'react';

import Header from 'components/shared/header';

import StoryHero from 'images/hero-story.jpg';

const StoryHeader = () => (
  <Header imgSrc={StoryHero} isSmall isVerticalCentered>
    <h1 className="hero__title u-font-script text-center" data-aos="zoom-in">our story</h1>
  </Header>
);

export default StoryHeader;
