import React from 'react';
import dayjs from 'dayjs';

import Header from 'components/shared/header';
import whiteWreath from 'images/wreath-white.svg';
import { WEDDING_DATE } from 'consts';

import { TextContainer } from './style';

import HeroImg from 'images/hero.jpg';

const HomeHeader = () => (
  <Header imgSrc={HeroImg}>
    <TextContainer className="text-center">
      <h1 className="hero__title u-font-script" data-aos="zoom-in">Sherilyn  &  Seiji</h1>
      <p className="hero__date" data-aos="zoom-in" data-aos-delay="400">{dayjs(WEDDING_DATE).format('MMMM D, YYYY')}</p>
    </TextContainer>
  </Header>
);

export default HomeHeader;
