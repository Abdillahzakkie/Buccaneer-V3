import { useState } from "react";
import { FaGithub, FaTelegram, FaTwitter, FaMediumM } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import { FooterContainer } from "./styles";
import { ErrorBoundary } from "../ErrorBoundary";
import logo from "../../assets/logo.png";

const Footer = () => {
	const [email, setEmail] = useState("");
	const getYear = new Date().getFullYear();

	const socialLinks = [
		{ icon: <FaGithub />, to: "" },
		{ icon: <FaTelegram />, to: "" },
		{
			icon: <FaMediumM />,
			to: "",
		},
		{ icon: <FaTwitter />, to: "" },
	];
	const socialIcon = socialLinks.map((item, index) => {
		return (
			<div className="grid" key={index}>
				<a
					href={item.to}
					target="_blank"
					rel="noopener noreferrer"
					className="icon"
				>
					{item.icon}
				</a>
			</div>
		);
	});

	return (
		<FooterContainer className="footer">
			<div className="grid wrapper">
				<section className="grid">
					<div className="grid brand">
						<div className="grid logo">
							<img src={logo} alt="amuse" />
						</div>
						<div className="grid">
							<h1>Buccaneer V3</h1>
						</div>
					</div>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
						convallis in risus vitae rhoncus. Sed eu orci nec ligula ullamcorper
						porttitor eget ut metus. Interdum et malesuada fames ac ante ipsum
						primis in faucibus.
					</p>
				</section>
				<section />
				<section className="grid form">
					<h1>Stay up to date</h1>
					<form className="form-control">
						<input
							type="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							placeholder="example@mail.com"
						/>
						<button type="submit">
							<FiSend className="icon" />
						</button>
					</form>
					<div className="grid social-icons">{socialIcon}</div>
				</section>
			</div>

			<div className="grid copy-right">
				<p>
					copyright &copy; {getYear} all rights reserved | Designed & built with
					💖 by
					<a
						href="https://github.com/abdillahzakkie"
						target="_blank"
						rel="noreferrer"
					>
						DragonLord
					</a>
				</p>
			</div>
		</FooterContainer>
	);
};

export default ErrorBoundary(Footer);
