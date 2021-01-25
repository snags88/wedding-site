import React from 'react';
import { graphql } from 'gatsby'

import Layout from 'components/layout';
import StoryHeader from 'components/story/header';
import DesktopNav from 'components/shared/desktopNav';
import MobileNav from 'components/shared/mobileNav';
import StoryMain from 'components/story/main';

const StoryPage = ({ data }) => (
  <Layout>
    <StoryHeader />
    <DesktopNav />
    <MobileNav />
    <StoryMain data={data} />
  </Layout>
);

export const query = graphql`
  query {
    timeline1: file(relativePath: { eq: "timeline1.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FLUID, maxWidth: 580, placeholder: BLURRED)
      }
    }
    timeline2: file(relativePath: { eq: "timeline2.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FLUID, maxWidth: 580, placeholder: BLURRED)
      }
    }
    timeline3: file(relativePath: { eq: "timeline3.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FLUID, maxWidth: 580, placeholder: BLURRED)
      }
    }
  }
`;

export default StoryPage;
