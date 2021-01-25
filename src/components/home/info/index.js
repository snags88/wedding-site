import React from 'react';
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const Info = ({ data }) => (
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <h2 className="u-m-b-5 text-center u-font-script">a message <br/> from the couple</h2>
      </div>
    </div>
    <div className="row">
      <div className="col-md-12">
        <div class="intro-content d-lg-flex">
          <div className="intro-content__col">
            <div className="intro-content__text d-flex align-items-center">
              <div>
                <h4>About Sherilyn</h4>
                <p>I like to fart</p>
              </div>
            </div>
          </div>
          <div className="intro-content__col">
            <GatsbyImage
              image={getImage(data.homeCouple)}
              alt="Sherily and Seiji looking at the camera smiling"
              className="intro-content__text"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Info;
