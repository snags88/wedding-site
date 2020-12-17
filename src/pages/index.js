import React from 'react';

import Layout from 'components/layout';
import HomeHeader from 'components/home/header';
import DesktopNav from 'components/shared/desktopNav';
import MobileNav from 'components/shared/mobileNav';
import AboutUs from 'components/home/aboutUs';
import Counter from 'components/home/counter';
import Quote from 'components/home/quote';
import Friends from 'components/home/friends';
import Rsvp from 'components/home/rsvp';

const IndexPage = () => (
  <Layout>
    <HomeHeader />
    <DesktopNav />
    <MobileNav />
    <div className="intro" id="intro">
      <div className="container">
        <AboutUs />
        <Counter />
      </div>
    </div>
    <Quote />
    <Friends />
    <Rsvp />
  </Layout>
);

export default IndexPage
