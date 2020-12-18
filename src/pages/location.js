import React from 'react';

import Layout from 'components/layout';
import LocationHeader from 'components/location/header';
import DesktopNav from 'components/shared/desktopNav';
import MobileNav from 'components/shared/mobileNav';
import LocationMain from 'components/location/main';

const LocationPage = () => (
  <Layout>
    <LocationHeader />
    <DesktopNav />
    <MobileNav />
    <LocationMain />
  </Layout>
);

export default LocationPage;

