import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-md navbar-light bg-light mb-3 pl-5 pr-5">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">enBICIando</span>
			</Link>
			{/*<div className="ml-auto">
				<Link to="/demo">
					<button className="btn btn-primary">Check the Context in action</button>
				</Link>
            </div>*/}
			<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
				<span className="navbar-toggler-icon" />
			</button>
			<div className="collapse navbar-collapse" id="collapsibleNavbar">
				<ul className="nav nav-pills ml-auto">
					<li clasNames="nav-item">
						<a className="btn btn-outline-primary" href="#">
							Home
						</a>
					</li>
					<li clasNames="nav-item">
						<a className="btn btn-outline-primary ml-1" href="#">
							Favoritos
						</a>
					</li>
					<li clasNames="nav-item">
						<a className="btn btn-outline-primary ml-1" href="#">
							Bici-friendly
						</a>
					</li>
					<li clasNames="nav-item">
						<a className="btn btn-outline-primary ml-1" href="#">
							Mis rutas
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
};
