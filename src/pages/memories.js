import React from 'react';

import Layout from 'components/layout';
import MemoriesHeader from 'components/memories/header';
import DesktopNav from 'components/shared/desktopNav';
import MobileNav from 'components/shared/mobileNav';
import MemoriesMain from 'components/memories/main';

const MemoriesPage = () => (
  <Layout>
    <MemoriesHeader />
    <DesktopNav />
    <MobileNav />
    <MemoriesMain />
  </Layout>
);

export default MemoriesPage;
