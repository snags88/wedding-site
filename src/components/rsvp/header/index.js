import React from 'react';

import Header from 'components/shared/header';

import RsvpHero from 'images/hero-rsvp.jpg';

const RsvpHeader = () => (
  <Header imgSrc={RsvpHero} isSmall>
    <h1 className="hero__title u-font-script text-center" data-aos="zoom-in">be our guest!</h1>
  </Header>
);

export default RsvpHeader;
