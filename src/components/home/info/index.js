import React from 'react';
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import {
  GuidelineList,
  LetterFromContent,
} from './style';

const Info = ({ data }) => (
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <h2 className="u-m-b-5 text-center u-font-script">a message <br/> from the couple</h2>
      </div>
    </div>
    <div className="row">
      <div className="col-md-12">
        <div class="intro-content">
          <div className="intro-content__col">
            <div className="intro-content__text d-flex align-items-center">
              <div>
                <h4>To our friends and family,</h4>
                <p>We hope that you've been doing well in this unprecedented time. Like many couples, we have gone back and forth on when, where, and under what conditions we would be able to hold a ceremony. We've even considered not having one at all, but at the end of the day it would be a life-long memory if we were able to celebrate our love with the ones who have supported us along our journey. With the uncertainty of vaccine distribution speed and ever-changing guidelines, we'll continuously work with our venue and vendors to balance safety with a sense of normalcy. As of <strong>January 24th 2021</strong>, our ceremony will have the following guidelines for safety purposes:</p>
                <GuidelineList>
                  <li>We encourage our guests, local or visting, to take a COVID-19 test prior to attending the wedding. We will provide detailed information on how/where you can take a test.</li>
                  <li>Guests are required to wear masks unless eating or drinking.</li>
                  <li>The ceremony will be held outdoors for our guests to practice social distancing.</li>
                  <li>Seating at reception will be at 50% capacity per table to practice social distancing.</li>
                  <li>Dancing will be limited to the couple's first dance only 😢.</li>
                </GuidelineList>
                <p>As guidelines change, we will be updating this website so please come back to check on the latest news! The best way to get updated is to fill out the RSVP form below. We hope to be able to see you all for our celebration ❤️ .</p>
                <LetterFromContent>Sherilyn & Seiji</LetterFromContent>
              </div>
            </div>
          </div>
          <div className="intro-content__col">
            <GatsbyImage
              image={getImage(data.homeCouple)}
              alt="Sherily and Seiji looking at the camera smiling"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Info;
