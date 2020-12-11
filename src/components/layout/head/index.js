import React from 'react';
import { Helmet } from 'react-helmet';

const Head = () => (
  <Helmet lang='en' className='no-js'>
    <meta charset='UTF-8' />
    <meta name='viewport' content='width=device-width, initial-scale=1' />
    <meta name='description' content="Sherilyn and Seiji\'s Wedding Site" />
    <title>Sherilyn & Seiji</title>

    <link href="https://fonts.googleapis.com/css?family=Cormorant+Garamond:300,300i,400,400i,700,700i" rel="stylesheet" />

    <link rel="stylesheet" href="assets/css/vendors/bootstrap.min.css" />
    <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" />
    <link rel="stylesheet" href="assets/css/vendors/slick.css" />
    <link rel="stylesheet" href="assets/css/style.css" />
  </Helmet>
);

export default Head;
