import React from 'react';

import Layout from 'components/layout';
import RsvpHeader from 'components/rsvp/header';
import DesktopNav from 'components/shared/desktopNav';
import MobileNav from 'components/shared/mobileNav';
import Success from 'components/shared/rsvp/success';

const ThankYouPage = () => (
  <Layout>
    <RsvpHeader />
    <DesktopNav />
    <MobileNav />
    <Success />
  </Layout>
)

export default ThankYouPage;
