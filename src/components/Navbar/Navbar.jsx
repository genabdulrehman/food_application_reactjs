import React, { useState } from "react";
import { RiRestaurant2Line } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";

import images from "../../constants/images";

import "./Navbar.css";

const Navbar = () => {
	const [toggleMenu, setToggleMenu] = useState(false);
	return (
		<nav className="app__navbar">
			<div className="app__navbar-logo">
				<img src={images.gericht} alt="app logo" />
			</div>

			{/* List of navbar Links */}

			<ul className="app__navbar-links">
				<li className="p__opensans">
					{" "}
					<a href="#home">Home</a>
				</li>
				<li className="p__opensans">
					{" "}
					<a href="#about">About</a>
				</li>
				<li className="p__opensans">
					{" "}
					<a href="#menu">Menu</a>
				</li>
				<li className="p__opensans">
					{" "}
					<a href="#awards">Award</a>
				</li>
				<li className="p__opensans">
					{" "}
					<a href="#contact">Contacts</a>
				</li>
			</ul>
			<div className="app__navbar-login">
				<a href="#login" className="p__opensans">
					Login / Register{" "}
				</a>
				<div></div>
				<a href="/" className="p__opensans">
					Book Table
				</a>
			</div>

			<div className="app__navbar-smallscreen">
				<GiHamburgerMenu
					color="#fff"
					fontSize={27}
					onClick={() => setToggleMenu(true)}
				/>

				{toggleMenu && (
					<div className="app__navbar-smallscreen_overlay flex_center slide-bottom">
						<RiRestaurant2Line
							className="overlay__close"
							fontSize={27}
							onClick={() => setToggleMenu(false)}
						/>
						<ul className="app__navbar-smallscreen-links">
							<li className="p__opensans">
								{" "}
								<a href="#home">Home</a>
							</li>
							<li className="p__opensans">
								{" "}
								<a href="#about">About</a>
							</li>
							<li className="p__opensans">
								{" "}
								<a href="#menu">Menu</a>
							</li>
							<li className="p__opensans">
								{" "}
								<a href="#awards">Award</a>
							</li>
							<li className="p__opensans">
								{" "}
								<a href="#contact">Contacts</a>
							</li>
						</ul>
					</div>
				)}
			</div>
		</nav>
	);
};

export default Navbar;
