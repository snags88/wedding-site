import React from 'react';
import BackgroundImage from 'gatsby-background-image'

import { headerStyle } from './style';

const Header = ({ imageData, isSmall, isVerticalCentered, children }) => {
  return (
    <header>
      <BackgroundImage
        Tag='div'
        fluid={imageData}
        css={headerStyle(isSmall, isVerticalCentered)}
      >
        { children }
      </BackgroundImage>
    </header>
  );
};

export default Header;
