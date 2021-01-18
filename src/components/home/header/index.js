import React from 'react';
import dayjs from 'dayjs';
import { graphql, useStaticQuery } from 'gatsby'

import Header from 'components/shared/header';
import { WEDDING_DATE } from 'consts';

import { TextContainer } from './style';

const HomeHeader = () => {
  const data = useStaticQuery(
    graphql`
      query {
        desktop: file(relativePath: { eq: "hero.jpg" }) {
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
    <Header imageData={imageData}>
      <TextContainer className="text-center">
        <h1 className="hero__title u-font-script" data-aos="zoom-in">Sherilyn  &  Seiji</h1>
        <p className="hero__date" data-aos="zoom-in" data-aos-delay="400">{dayjs(WEDDING_DATE).format('MMMM D, YYYY')}</p>
      </TextContainer>
    </Header>
  );
};

export default HomeHeader;
