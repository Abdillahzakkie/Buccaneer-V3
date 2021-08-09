import React, { useState } from "react";
import { FaRegCheckCircle } from "react-icons/fa";
import { ErrorBoundary } from "../../components/ErrorBoundary";
import { OtcContainer } from "./styles";

const OTC = () => {
	const [purchaseAmount, setPurchaseAmount] = useState("10432 USDT");

	return (
		<OtcContainer className="grid">
			<header className="grid">
				<h1>OTC</h1>
			</header>

			<div className="grid networks">
				<button type="button">Ethereum</button>
				<button type="button">Binance Smart Chain (BSC)</button>
			</div>

			<div className="grid supplies">
				<p>Current OTC Price: $100</p>
				<p>Supply left: 18,000</p>
			</div>

			<form className="grid private-send">
				<header className="grid">Private Send</header>

				<section className="grid field">
					<div className="grid type">
						<p>Amount:</p>
					</div>
					<div className="grid _input">
						<input type="input" placeholder="34.56978" />
					</div>
				</section>

				<section className="grid field">
					<div className="grid type">
						<p>Cost:</p>
					</div>
					<div className="grid _input">
						<input
							type="input"
							value={purchaseAmount}
							placeholder={purchaseAmount}
							onChange={(e) => setPurchaseAmount(e.target.value)}
						/>
					</div>
				</section>

				<section className="grid btns">
					<button className="button">Purchase</button>
				</section>
			</form>

			<div className="grid chain-deployment">
				<header className="grid">
					<h3>BUCC Chain Deployment Claims</h3>
				</header>

				<section className="grid field">
					<div className="grid type">
						<p>BV3: Ethereum:</p>
					</div>

					<div className="grid claimable">
						<p>0</p>
					</div>

					<div className="grid claimed">
						<FaRegCheckCircle />
						<p>claimed</p>
					</div>
				</section>

				<section className="grid field">
					<div className="grid type">
						<p>BV3: Binance:</p>
					</div>

					<div className="grid claimable">
						<p>2000</p>
					</div>

					<div className="grid claim">
						<button type="button">claim</button>
					</div>
				</section>

				<section className="grid field border-none">
					<div className="grid type">
						<p>BV3C Amount: </p>
					</div>

					<div className="grid claimable">
						<p>2000</p>
					</div>

					<div className="grid claim">
						<button type="button">claim</button>
					</div>
				</section>
			</div>
		</OtcContainer>
	);
};

export default ErrorBoundary(OTC);
