import React from "react";

import "./AboutUs.css";
import { images } from "../../constants";
const AboutUs = () => (
	<div
		className="app__aboutus app__bg flex__center section__padding"
		id="about"
	>
		<div className="app__aboutus-overlay flex__center">
			<img src={images.G} alt="g Letter" />
		</div>
		<div className="app__aboutus-content flex__center">
			<div className="app__aboutus-content_about">
				<h1 className="headtext__cormorant">About Us</h1>
				<img
					className="spoon__img"
					alt="spoon img"
					src={images.spoon}
				/>
				<p className="p__opensans">
					We are delivering the best foods in the world, our name is
					We are delivering the best foods in the world, our name is
					all over the world. all over the world. all over the world.
					all over the world. all over the world.
				</p>
				<button className="custom__button" type="button">
					Know More
				</button>
			</div>

			<div className="app__aboutus-content_knife" alt="about_knife">
				<img src={images.knife} alt="knife" />
			</div>

			<div className="app__aboutus-content_history">
				<h1 className="headtext__cormorant">Our History</h1>
				<img
					className="spoon__img"
					alt="spoon img"
					src={images.spoon}
				/>
				<p className="p__opensans">
					We are delivering the best foods in the world, our name is
					all over the world. all over the world. all over the world.
					all over the world. all over the world.
				</p>
				<button className="custom__button" type="button">
					Know More
				</button>
			</div>
		</div>
		AboutUs
	</div>
);

export default AboutUs;
