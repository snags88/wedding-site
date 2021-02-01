import React from 'react';
import { graphql } from 'gatsby'

import Layout from 'components/layout';
import HomeHeader from 'components/home/header';
import DesktopNav from 'components/shared/desktopNav';
import MobileNav from 'components/shared/mobileNav';
import Counter from 'components/home/counter';
import Info from 'components/home/info';
import Rsvp from 'components/shared/rsvp';

const IndexPage = ({ data }) => (
  <Layout>
    <HomeHeader />
    <DesktopNav />
    <MobileNav />
    <div className="intro">
      <Counter />
    </div>
    <div className="intro u-bg-grey">
      <Info data={data} />
    </div>
    <Rsvp />
  </Layout>
);

export const query = graphql`
  query {
    homeCouple: file(relativePath: { eq: "home-couple.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FLUID, maxWidth: 580, placeholder: BLURRED)
      }
    }
  }
`;

export default IndexPage
