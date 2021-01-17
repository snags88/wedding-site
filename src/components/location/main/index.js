import React from 'react';
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import LocationImg1 from 'images/location1.jpg';
import LocationImg2 from 'images/location2.jpg';
import LocationImg3 from 'images/location3.jpg';

const LocationMain = ({ data }) => (
	<section className="location" id="location">
		<div className="container">
			<div className="row">

				<div className="col-md-6">
					<div className="location__text location__text--sm u-bg-grey ml-auto u-m-b-3">
						<h6 className="text-uppercase">Ceremony - 17:00</h6>
						<h3>Waimea Valley - Main Lawn</h3>
						<p>Something about Waimea Valley and whey we chose it. Insert address, how to get there, and parking info here. Maybe also attire info</p>
					</div>
          <GatsbyImage image={getImage(data.location1)} alt="Pikake Pavilion at night lit up with string lights" className="location__img location__img--sm ml-auto"/>
          <GatsbyImage image={getImage(data.location2)} alt="Table set inside of Pikake Pavilion" className="location__img"/>
				</div>

				<div className="col-md-6">
          <GatsbyImage image={getImage(data.location3)} alt="Main Lawn with empty chairs for the ceremony" className="location__img location__img--sm"/>
					<div className="location__text location__text--sm u-bg-grey">
						<h6 className="text-uppercase">Reception - 19:00</h6>
						<h3>Waimea Valley - Pikake Pavilion</h3>
						<p>Insert info about how to get to pikake and expectaions for reception</p>
					</div>
				</div>
			</div>
		</div>
	</section>
);

export default LocationMain;
