import React from 'react';
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const LocationMain = ({ data }) => (
	<section className="location" id="location">
		<div className="container">
			<div className="row">

				<div className="col-md-6">
					<div className="location__text location__text--sm u-bg-grey ml-auto u-m-b-3">
            <h6 className="text-uppercase">Ceremony - 16:00</h6>
						<h3>Waimea Valley - Main Lawn</h3>
            <p><a href="https://www.waimeavalley.net/" target="_blank" rel="noreferrer">Waimea Valley</a> is located in the North Shore of Oahu directly across the highway from Waimea Bay Beach. We chose this venue as it provided an opportunity for us to celebrate our love in the lush greenery of Hawaii while supporting a local non-profit that cares for the historical site.</p>
            <p>The address for the venue is <a href="https://www.google.com/maps/place/59-864+Kamehameha+Hwy,+Haleiwa,+HI+96712/@21.6400329,-158.0622667,17z/data=!3m1!4b1!4m5!3m4!1s0x7c0059901950dca9:0xf4864239c3b12325!8m2!3d21.6400329!4d-158.060078" target="_blank" rel="noreferrer">59-864 Kamehameha Hwy, Haleiwa, HI 96712</a> and free parking will be available at the venue.</p>
            <p>The attire will be semi-formal.</p>
            <p>You'll be able to find accommodations in nearby Turtle Bay Resort or Villas. <strong>If you plan on staying in Waikiki, we will provide a shuttle to and from the wedding venue.</strong> More info on shuttle to follow.</p>
					</div>
          <GatsbyImage image={getImage(data.location1)} alt="Pikake Pavilion at night lit up with string lights" className="location__img location__img--sm ml-auto d-none d-md-block"/>
          <GatsbyImage image={getImage(data.location2)} alt="Table set inside of Pikake Pavilion" className="location__img d-none d-md-block"/>
          <GatsbyImage image={getImage(data.location3)} alt="Main Lawn with empty chairs for the ceremony" className="location__img location__img--sm d-md-none"/>
				</div>

				<div className="col-md-6">
          <GatsbyImage image={getImage(data.location3)} alt="Main Lawn with empty chairs for the ceremony" className="location__img location__img--sm d-none d-md-block"/>
          <GatsbyImage image={getImage(data.location1)} alt="Pikake Pavilion at night lit up with string lights" className="location__img location__img--sm ml-auto d-md-none"/>
          <GatsbyImage image={getImage(data.location2)} alt="Table set inside of Pikake Pavilion" className="location__img d-md-none"/>
					<div className="location__text location__text--sm u-bg-grey">
            <h6 className="text-uppercase">Reception - 18:30</h6>
						<h3>Waimea Valley - Pikake Pavilion</h3>
            <p>The festivities will continue at Pikake Pavilion right next to the Main Lawn. The venue is open to the tropical Hawaiian breeze where we will be enjoying food and drinks. Due to the pandemic, we are seating tables at 50% capacity to keep a safe distance between our guests, but don't let that stop you from having fun! Reception will conclude at 22:00 in accordance with the venue guideline.</p>
					</div>
				</div>
			</div>
		</div>
	</section>
);

export default LocationMain;
