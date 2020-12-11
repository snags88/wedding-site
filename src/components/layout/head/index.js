import React from 'react';
import { Helmet } from 'react-helmet';

const Head = () => (
  <Helmet lang='en' className='no-js'>
    <meta charset='UTF-8' />
    <meta name='viewport' content='width=device-width, initial-scale=1' />
    <meta name='description' content="Sherilyn and Seiji\'s Wedding Site" />
    <title>Sherilyn & Seiji</title>

    <link href="https://fonts.googleapis.com/css?family=Cormorant+Garamond:300,300i,400,400i,700,700i" rel="stylesheet" />
  </Helmet>
);

export default Head;
