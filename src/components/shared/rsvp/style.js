import styled from '@emotion/styled'

import backgroundImg from 'images/rsvp-bg.jpg';

export const RsvpSection = styled.section`
  background-image: ${({ noBackground }) => noBackground ? 'none' : `url(${backgroundImg})`};
	background-size: cover;
	background-repeat: no-repeat;
	padding: 90px 0;
`;

export const HiddenTextInput = styled.input`
  display: none;
`;

export const FormContentGrid = styled.div`
  display: grid;
  grid-template-columns: 100%;
  column-gap: 24px;

  @media(min-width: 768px) {
    grid-template-columns: 50% 50%;
  }
`;
