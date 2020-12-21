import React from 'react';

import Layout from 'components/layout';
import StoryHeader from 'components/story/header';
import DesktopNav from 'components/shared/desktopNav';
import MobileNav from 'components/shared/mobileNav';
import StoryMain from 'components/story/main';

const StoryPage = () => (
  <Layout>
    <StoryHeader />
    <DesktopNav />
    <MobileNav />
    <StoryMain />
  </Layout>
);

export default StoryPage;
