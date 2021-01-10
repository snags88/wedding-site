import styled from '@emotion/styled';

export const HeaderContainer = styled.div`
	background-size: cover;
	background-repeat: no-repeat;
  background-position: ${({ isVerticalCentered }) => isVerticalCentered ? 'center' : 'top'} center;
  padding: ${({ isSmall }) => isSmall ? '100px' : '50px'} 0;
	color: #fff;
  background-image: url(${({imgSrc}) => imgSrc});

  @media(min-width: 992px) {
    min-height: ${({ isSmall }) => isSmall ? 'auto' : '90vh'};
  }
`;
