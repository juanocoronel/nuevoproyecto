import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg bg-body-succes">
			<div className="container-fluid">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">React</span>
				</Link>
				<div className="ml-auto">
					<Link to="/demo">
						<button className="btn btn-primary">Check the Context in action</button>
					</Link>
					<Link to="/signup">
						<button className="btn btn-primary">Registrarse</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};




