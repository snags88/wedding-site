import React from 'react';

import Layout from 'components/layout';
import RsvpHeader from 'components/rsvp/header';
import DesktopNav from 'components/shared/desktopNav';
import MobileNav from 'components/shared/mobileNav';
import Rsvp from 'components/shared/rsvp';

const RsvpPage = () => (
  <Layout>
    <RsvpHeader />
    <DesktopNav />
    <MobileNav />
    <Rsvp />
  </Layout>
);

export default RsvpPage;
