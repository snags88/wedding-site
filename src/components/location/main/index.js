import React from 'react';

import LocationImg1 from 'images/location1.jpg';
import LocationImg2 from 'images/location2.jpg';
import LocationImg3 from 'images/location3.jpg';

const LocationMain = () => (
	<section className="location" id="location">
		<div className="container">
			<div className="row">

				<div className="col-md-6">
					<div className="location__text location__text--sm u-bg-grey ml-auto u-m-b-3" data-aos="zoom-in-right">
						<h6 className="text-uppercase">Ceremony - 17:00</h6>
						<h3>Waimea Valley - Main Lawn</h3>
						<p>Something about Waimea Valley and whey we chose it. Insert address, how to get there, and parking info here. Maybe also attire info</p>
					</div>
					<img src={LocationImg1} className="location__img location__img--sm ml-auto" data-aos="zoom-in-right" alt="Location" />
					<img src={LocationImg2} className="location__img" alt="Location" data-aos="zoom-in-right" />
				</div>

				<div className="col-md-6">
					<img src={LocationImg3} className="location__img location__img--sm" alt="Location" data-aos="zoom-in-left" />
					<div className="location__text location__text--sm u-bg-grey" data-aos="zoom-in-left">
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
