import { useState, useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { web3Context } from "../Context";
import { ErrorBoundary } from "../ErrorBoundary";
import logo from "../../assets/logo.png";

import { NavbarContainer } from "./styles";

const Navbar = ({ theme }) => {
	const [navOpen, setNavOpen] = useState(false);
	// eslint-disable-next-line
	const { loading } = useContext(web3Context);

	const pages = ["Home", "Bermuda", "OTC", "Governance"];
	const activeStyle = {
		borderBottom: "1px solid var(--white)",
		padding: ".75em",
	};

	const Navlist = pages.map((item, i) => {
		return (
			<NavLink
				key={i}
				exact
				to={pages[i] === "Home" ? "/" : pages[i].toLowerCase()}
				activeStyle={activeStyle}
			>
				{pages[i]}
			</NavLink>
		);
	});

	return (
		<NavbarContainer className="grid navbar nav-shadow" theme={theme}>
			<div className="grid nav-brand">
				<div className="grid logo">
					<Link to="/">
						<img src={logo} alt="Amuse.Finance" />
					</Link>
				</div>
				<div className="grid name">
					<h1>Buccaneer V3</h1>
				</div>
			</div>
			<div
				className={navOpen ? "grid nav-list nav-list-mobile" : "grid nav-list"}
			>
				<ul>{Navlist}</ul>
			</div>
			<div className="toggle">
				<AiOutlineMenu className="icon" onClick={() => setNavOpen(!navOpen)} />
			</div>
		</NavbarContainer>
	);
};

export default ErrorBoundary(Navbar);
