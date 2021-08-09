import React from "react";
import bermudaLogo from "../../assets/bermuda.png";
import { HomeContainer } from "./styles";
import cardImg1 from "../../assets/Home/featured-card-1.png";
import cardImg2 from "../../assets/Home/featured-card-2.png";
import cardImg3 from "../../assets/Home/featured-card-3.png";
import icon1 from "../../assets/Home/icon1.png";
import icon2 from "../../assets/Home/icon2.png";

const Home = () => {
	return (
		<HomeContainer className="grid">
			<div className="grid banner">
				<section className="banner-text">
					<h1>Lorem ipsum dolor sit amet</h1>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
						convallis in risus vitae rhoncus.
					</p>
					<div className="btns">
						<button type="button">White paper</button>
						<button type="button" id="none">
							Lorem ipsum
						</button>
					</div>
				</section>
				<section className="grid banner-logo">
					<div className="grid image">
						<img src={bermudaLogo} alt="Bermuda" />
					</div>
				</section>
			</div>

			<div className="grid featured-cards">
				<div className="grid card">
					<div className="grid image">
						<img src={cardImg1} alt="Feature card" />
					</div>
					<div className="grid">
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
							convallis in risus vitae rhoncus.
						</p>
					</div>
				</div>

				<div className="grid card">
					<div className="grid image">
						<img src={cardImg2} alt="Feature card" />
					</div>
					<div className="grid">
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
							convallis in risus vitae rhoncus.
						</p>
					</div>
				</div>

				<div className="grid card">
					<div className="grid image">
						<img src={cardImg3} alt="Feature card" />
					</div>
					<div className="grid">
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
							convallis in risus vitae rhoncus.
						</p>
					</div>
				</div>
			</div>

			<div className="grid sections">
				<div className="grid text">
					<h1>Lorem Ipsum</h1>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
						convallis in risus vitae rhoncus. Sed eu orci nec ligula ullamcorper
						porttitor eget ut metus. Interdum et malesuada fames ac ante ipsum
						primis in faucibus. Maecenas lacinia elit lectus, nec auctor ipsum
						efficitur in.
					</p>
					<p>
						Donec vestibulum diam congue, tempor nibh eu, auctor dui. Duis
						sapien ex, porta sed eleifend a, mollis dictum mauris. Morbi
						vehicula gravida magna non commodo.
					</p>
				</div>
				<div className="grid image">
					<img src={icon1} alt="icon" />
				</div>
			</div>

			<div className="grid sections">
				<div className="grid image right">
					<img src={icon2} alt="icon" />
				</div>

				<div className="grid text">
					<h1>Lorem Ipsum</h1>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
						convallis in risus vitae rhoncus. Sed eu orci nec ligula ullamcorper
						porttitor eget ut metus. Interdum et malesuada fames ac ante ipsum
						primis in faucibus. Maecenas lacinia elit lectus, nec auctor ipsum
						efficitur in.
					</p>
					<p>
						Donec vestibulum diam congue, tempor nibh eu, auctor dui. Duis
						sapien ex, porta sed eleifend a, mollis dictum mauris. Morbi
						vehicula gravida magna non commodo.
					</p>
				</div>
			</div>
		</HomeContainer>
	);
};

export default Home;
