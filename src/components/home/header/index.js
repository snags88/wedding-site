import React from 'react';
import dayjs from 'dayjs';
import { css } from '@emotion/react'

import whiteWreath from 'images/wreath-white.svg';
import { WEDDING_DATE } from 'consts';

import HeroImg from 'images/hero.jpg';

const Header = () => (
  <header>
    <div className="hero d-flex align-items-center justify-content-center" css={css`background-image: url(${HeroImg});`}>
      <div className="text-center">
        <img src={whiteWreath} className="hero__wreath hero__wreath--up"  alt="Sherilyn and Seiji" />
        <h1 className="hero__title u-font-script" data-aos="zoom-in">Sherilyn  &  Seiji</h1>
        <p className="hero__date" data-aos="zoom-in" data-aos-delay="400">{dayjs(WEDDING_DATE).format('MMMM D, YYYY')}</p>
        <img src={whiteWreath} className="hero__wreath hero__wreath--down" alt="Sherilyn and Seiji"/>
      </div>
    </div>
  </header>
);

export default Header;
