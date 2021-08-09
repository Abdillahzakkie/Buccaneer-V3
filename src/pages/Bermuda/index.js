import React, { useState } from "react";
import { ErrorBoundary } from "../../components/ErrorBoundary";
import { BermudaContainer } from "./styles";

const Bermuda = () => {
	const [privateSendAmount, setPrivateSendAmount] = useState("34.56978");
	const [privateSellAmount, setPrivateSellAmount] = useState("34.56978");

	return (
		<BermudaContainer className="grid">
			<header className="grid">
				<h1>Bermuda</h1>
			</header>

			<div className="grid balance">
				<div className="grid">
					<h1>Balance: 3523.05452</h1>
				</div>
				<div className="grid submarine-mode">
					<p>Submarine Mode:</p>
				</div>
			</div>

			<div className="grid form-group">
				<form className="grid private-send">
					<header className="grid">Private Send</header>

					<section className="grid field">
						<div className="grid type">
							<p>Amount:</p>
						</div>
						<div className="grid _input">
							<input
								type="input"
								value={privateSendAmount}
								placeholder={privateSendAmount}
								onChange={(e) => setPrivateSendAmount(e.target.value)}
							/>
						</div>
					</section>

					<section className="grid field">
						<div className="grid type">
							<p>Address:</p>
						</div>
						<div className="grid _input">
							<input type="input" placeholder="0x0000000000000000" />
						</div>
					</section>

					<section className="grid btns">
						<button className="button">Gasless Transaction</button>
						<button className="button">Standard Transaction</button>
					</section>
				</form>

				<form className="grid private-sell">
					<header className="grid">Private Sell</header>

					<section className="grid field">
						<div className="grid type">
							<p>Amount:</p>
						</div>
						<div className="grid _input">
							<input type="input" placeholder="34.56978" />
						</div>
					</section>

					<section className="grid btns">
						<button className="button">Private Sell</button>
					</section>
				</form>
			</div>

			<div className="grid random-text">
				<h3>
					To use BUCC’s gasless features, fees are required at a rate of 0.2% of
					the total amount being sent, with a maximum amount payable capped at
					0.3 BUCC regardless of amount of BUCC sent.”
				</h3>
			</div>

			<div className="grid staking">
				<header className="grid">
					<h2>Staking Amount: 200</h2>
				</header>

				<form className="grid private-send">
					<header className="grid">Stake / Unstake</header>

					<section className="grid field">
						<div className="grid type">
							<p>Amount:</p>
						</div>
						<div className="grid _input">
							<input
								type="input"
								value={privateSellAmount}
								placeholder={privateSendAmount}
								onChange={(e) => setPrivateSellAmount(e.target.value)}
							/>
						</div>
					</section>

					<section className="grid field">
						<div className="grid type">
							<p>Address:</p>
						</div>
						<div className="grid _input">
							<input type="input" placeholder="0x0000000000000000" />
						</div>
					</section>

					<section className="grid btns">
						<button className="button">Stake</button>
						<button className="button">Withdraw</button>
					</section>
				</form>
			</div>

			<div className="grid stake-rate">
				<header className="grid">
					<h2>Stake Rate</h2>
				</header>
				<div className="grid">
					<p>Daily: .03%</p>
					<p>Annual: 10.95%</p>
				</div>
			</div>
		</BermudaContainer>
	);
};

export default ErrorBoundary(Bermuda);
