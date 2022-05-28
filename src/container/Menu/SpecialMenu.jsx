import React from "react";
import { images, data } from "../../constants";
import { SubHeading, MenuItem } from "../../components";

import "./SpecialMenu.css";

const SpecialMenu = () => (
	<div className="app__specialMenu flex__center section__padding" id="menu">
		<div className="app__specialMenu-title">
			<SubHeading title="Menu That Fits Your Pallet" />
			<h1 className="headtext__cormorant"> Today's Special </h1>
		</div>

		<div className="app__specialMenu-menu">
			<div className="app__specialMenu-menu_wine flex__center">
				<p className="app__specialMenu_menu_heading"> Wine & Beer </p>
				<div className="app__specialMenu_menu_items">
					{data.wines.map((wine, index) => (
						<MenuItem
							key={wine.title + index}
							title={wine.title}
							tags={wine.tags}
							price={wine.price}
						/>
					))}
				</div>
			</div>
			<div className="app__specialMenu_menu_img">
				<img src={images.menu} alt="menu img" />
			</div>

			<div className="app__specialMenu-menu_cocktails flex__center">
				<p className="app__specialMenu_menu_heading"> Cocktails </p>
				<div className="app__specialMenu_menu_items">
					{data.cocktails.map((cocktails, index) => (
						<MenuItem
							key={cocktails.title + index}
							title={cocktails.title}
							tags={cocktails.tags}
							price={cocktails.price}

						/>
					))}
				</div>
			</div>
		</div>
		<div style={{ marginTop: "15px" }}>
			<button type="button" className="custom__button">
				{" "}
				View More{" "}
			</button>
		</div>
	</div>
);

export default SpecialMenu;
