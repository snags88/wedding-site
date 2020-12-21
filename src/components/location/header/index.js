import React from 'react';

import Header from 'components/shared/header';

import LocationHero from 'images/hero-location.jpg';

const LocationHeader = () => (
  <Header imgSrc={LocationHero} isSmall>
    <h1 className="hero__title u-font-script text-center" data-aos="zoom-in">when & where</h1>
  </Header>
);

export default LocationHeader;

