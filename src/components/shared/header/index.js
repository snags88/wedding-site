import React from 'react';
import { css } from '@emotion/react'

const Header = ({ imgSrc, isSmall, children }) => {
  const heroSizeClassName = isSmall ? 'hero--small' : '';
  return (
    <header>
      <div
        className={`hero ${heroSizeClassName} d-flex align-items-center justify-content-center`}
        css={css`background-image: url(${imgSrc});`}
      >
        { children }
      </div>
    </header>
  );
};

export default Header;
