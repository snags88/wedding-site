import React from 'react';

import { HeaderContainer } from './style';

const Header = ({ imgSrc, isSmall, isVerticalCentered, children }) => {
  return (
    <header>
      <HeaderContainer
        isSmall={isSmall}
        isVerticalCentered={isVerticalCentered}
        imgSrc={imgSrc}
        className='d-flex align-items-center justify-content-center'
      >
        { children }
      </HeaderContainer>
    </header>
  );
};

export default Header;
