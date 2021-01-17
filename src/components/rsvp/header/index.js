import React from 'react';
import { graphql, useStaticQuery } from 'gatsby'

import Header from 'components/shared/header';

const RsvpHeader = () => {
  const data = useStaticQuery(
    graphql`
      query {
        desktop: file(relativePath: { eq: "hero-rsvp.jpg" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 1920) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  );
  const imageData = data.desktop.childImageSharp.fluid

  return (
    <Header imageData={imageData} isSmall>
      <h1 className="hero__title u-font-script text-center" data-aos="zoom-in">be our guest!</h1>
    </Header>
  );
};

export default RsvpHeader;
