import React from 'react';
import IosHeart from 'react-ionicons/lib/IosHeart'
import { css } from '@emotion/react'

import BrideImg from 'images/bride.jpg';
import GroomImg from 'images/groom.jpg';

const AboutUs = () => (
  <>
    <div className="row">
      <div className="col-md-12">
        <h2 className="u-m-b-5 text-center u-font-script">we are <br/>counting down!</h2>
      </div>
    </div>
    <div className="row">
      <div className="col-md-12">
        <div class="intro-content d-lg-flex">
          <div className="intro-content__col">
            <div className="intro-content__img" css={css`background-image: url(${BrideImg});`}/>
            <div className="intro-content__text u-bg-primary d-flex align-items-center">
              <div>
                <h4>About Sherilyn</h4>
                <p>I like to fart</p>
              </div>
            </div>
          </div>
          <IosHeart color='white' className="icon icon--xl" />
          <div className="intro-content__col">
            <div className="intro-content__img" css={css`background-image: url(${GroomImg});`}/>
            <div className="intro-content__text u-bg-grey d-flex align-items-center">
              <div>
                <h4>About Seiji</h4>
                <p>Coolest guy ever</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default AboutUs;
