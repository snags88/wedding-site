import styled from '@emotion/styled'

import backgroundImg from 'images/rsvp-bg.jpg';

export const RsvpSection = styled.section`
  background-image: ${({ noBackground }) => noBackground ? 'none' : `url(${backgroundImg})`};
	background-size: cover;
	background-repeat: no-repeat;
	padding: 90px 0;
`;
