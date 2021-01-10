import React from 'react';
import { graphql } from 'gatsby'

import Layout from 'components/layout';
import MemoriesHeader from 'components/memories/header';
import DesktopNav from 'components/shared/desktopNav';
import MobileNav from 'components/shared/mobileNav';
import MemoriesMain from 'components/memories/main';

const PhotosPage = ({ data }) => (
  <Layout>
    <MemoriesHeader />
    <DesktopNav />
    <MobileNav />
    <MemoriesMain data={data}/>
  </Layout>
);

export const query = graphql`
  query {
    memory1: file(relativePath: { eq: "memories/memory1.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FLUID, maxWidth: 580, placeholder: BLURRED)
      }
    }
    memory2: file(relativePath: { eq: "memories/memory2.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FLUID, maxWidth: 580, placeholder: BLURRED)
      }
    }
    memory3: file(relativePath: { eq: "memories/memory3.jpg" }) { childImageSharp {
        gatsbyImageData(layout: FLUID, maxWidth: 580, placeholder: BLURRED)
      }
    }
    memory4: file(relativePath: { eq: "memories/memory4.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FLUID, maxWidth: 580, placeholder: BLURRED)
      }
    }
    memory5: file(relativePath: { eq: "memories/memory5.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FLUID, maxWidth: 580, placeholder: BLURRED)
      }
    }
    memory6: file(relativePath: { eq: "memories/memory6.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FLUID, maxWidth: 580, placeholder: BLURRED)
      }
    }
    memory7: file(relativePath: { eq: "memories/memory7.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FLUID, maxWidth: 580, placeholder: BLURRED)
      }
    }
    memory9: file(relativePath: { eq: "memories/memory9.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FLUID, maxWidth: 580, placeholder: BLURRED)
      }
    }
    memory10: file(relativePath: { eq: "memories/memory10.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FLUID, maxWidth: 580, placeholder: BLURRED)
      }
    }
    memory11: file(relativePath: { eq: "memories/memory11.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FLUID, maxWidth: 580, placeholder: BLURRED)
      }
    }
    memory12: file(relativePath: { eq: "memories/memory12.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FLUID, maxWidth: 580, placeholder: BLURRED)
      }
    }
    memory13: file(relativePath: { eq: "memories/memory13.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FLUID, maxWidth: 580, placeholder: BLURRED)
      }
    }
    memory14: file(relativePath: { eq: "memories/memory14.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FLUID, maxWidth: 580, placeholder: BLURRED)
      }
    }
    memory15: file(relativePath: { eq: "memories/memory15.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FLUID, maxWidth: 580, placeholder: BLURRED)
      }
    }
    memory16: file(relativePath: { eq: "memories/memory16.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FLUID, maxWidth: 580, placeholder: BLURRED)
      }
    }
    memory17: file(relativePath: { eq: "memories/memory17.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FLUID, maxWidth: 580, placeholder: BLURRED)
      }
    }
    memory18: file(relativePath: { eq: "memories/memory18.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FLUID, maxWidth: 580, placeholder: BLURRED)
      }
    }
    memory19: file(relativePath: { eq: "memories/memory19.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FLUID, maxWidth: 580, placeholder: BLURRED)
      }
    }
  }
`
export default PhotosPage;
