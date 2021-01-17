import React from 'react';
import { graphql } from 'gatsby'

import Layout from 'components/layout';
import LocationHeader from 'components/location/header';
import DesktopNav from 'components/shared/desktopNav';
import MobileNav from 'components/shared/mobileNav';
import LocationMain from 'components/location/main';

const LocationPage = ({ data }) => (
  <Layout>
    <LocationHeader />
    <DesktopNav />
    <MobileNav />
    <LocationMain data={data}/>
  </Layout>
);

export const query = graphql`
  query {
    location1: file(relativePath: { eq: "location1.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FLUID, maxWidth: 580, placeholder: BLURRED)
      }
    }
    location2: file(relativePath: { eq: "location2.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FLUID, maxWidth: 580, placeholder: BLURRED)
      }
    }
    location3: file(relativePath: { eq: "location3.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FLUID, maxWidth: 580, placeholder: BLURRED)
      }
    }
  }
`;

export default LocationPage;
