import * as React from "react"
import styled from '@emotion/styled';

import Layout from 'components/layout';

import whiteWreath from 'images/wreath-white.svg';

const IndexPage = () => {
  return (
    <Layout>
      <header>
        <div className="hero d-flex align-items-center justify-content-center">
          <div className="text-center">
            <img src={whiteWreath} className="hero__wreath hero__wreath--up"  alt="Sherilyn and Seiji" />
            <h1 className="hero__title u-font-script" data-aos="zoom-in">Sherilyn  &  Seiji</h1>
            <p className="hero__date" data-aos="zoom-in" data-aos-delay="400">June 25, 2021</p>
            <img src={whiteWreath} className="hero__wreath hero__wreath--down" alt="Sherilyn and Seiji"/>
          </div>
        </div>
      </header>
    </Layout>
  )
}

export default IndexPage
