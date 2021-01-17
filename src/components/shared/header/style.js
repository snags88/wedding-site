import { css } from '@emotion/react';

export const headerStyle = (isSmall, isVerticalCentered) => css`
  display: flex;
  align-items: center;
  justify-content: center;

	background-size: cover;
	background-repeat: no-repeat;
  background-position: ${isVerticalCentered ? 'center' : 'top'} center;
  padding: ${isSmall ? '100px' : '50px'} 0;
	color: #fff;

  @media(min-width: 992px) {
    min-height: ${isSmall ? 'auto' : '90vh'};
  }
`;
