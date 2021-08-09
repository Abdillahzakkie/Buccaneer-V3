import styled from "styled-components";

export const OtcContainer = styled.div`
	width: 90vw;
	color: var(--white);
	grid-gap: 2em 0;
	letter-spacing: var(--mainSpacing);

	header {
		width: 100%;
	}

	header {
		height: 70px;
		align-items: center;
		font-family: Serenity;
		padding: 0 0 0 2em;
		font-size: 2em;
	}

	.networks {
		grid-template-columns: repeat(2, 1fr);
		grid-gap: 0 2em;

		button {
			padding: 1.5em 2.5em;
			font-weight: 300;
			letter-spacing: var(--mainSpacing);
			border-radius: 1em;
			background: linear-gradient(
				253.59deg,
				rgba(21, 32, 87, 0.75) 1.89%,
				rgba(53, 61, 104, 0.75) 99.63%
			);
			/* opacity: 0.5; */
			backdrop-filter: blur(4px);
			color: inherit;
		}
	}

	.supplies {
		place-items: center;
		line-height: 2;
	}

	form {
		height: 300px;
		background: linear-gradient(
			253.59deg,
			rgba(21, 32, 87, 0.75) 1.89%,
			rgba(53, 61, 104, 0.75) 99.63%
		);
		backdrop-filter: blur(4px);
		padding: 2em;
		place-items: center;
		color: var(--white);
		grid-gap: 2em 0;
		border-radius: 1em;

		header {
			place-items: center;
			font-weight: 500;
			font-size: 1.25em;
		}

		.field {
			width: 100%;
			grid-template-columns: repeat(5, 1fr);
			color: inherit;

			.type {
				width: 100%;
				grid-column: 1/2;
				align-items: center;
				place-items: center;
			}

			._input {
				grid-column: 2/6;
				width: 100%;
				place-items: start;
				color: inherit;

				input {
					width: 100%;
					height: 50px;
					padding: 0 1em;
					background: transparent;
					color: var(--white);
					letter-spacing: var(--mainSpacing);
					border-bottom: 0.1em solid var(--white);
				}
			}
		}

		.btns {
			grid-template-columns: repeat(2, 1fr);
			margin: 2em 0;
			grid-gap: 1em 2em;

			button {
				padding: 1em 2em;
				border-radius: 1em;
				background: transparent;
				border: 0.1em solid var(--white);
				color: inherit;
				letter-spacing: inherit;
			}
		}
	}

	.chain-deployment {
		width: 50vw;
		background: linear-gradient(
			253.59deg,
			rgba(21, 32, 87, 0.75) 1.89%,
			rgba(53, 61, 104, 0.75) 99.63%
		);
		backdrop-filter: blur(4px);
		padding: 2em;
		place-items: center;
		color: var(--white);
		grid-gap: 2em 0;
		border-radius: 1em;
		margin: 3em auto 5em;

		header {
			place-items: center;
			font-weight: 500;
			font-size: 1.25em;
		}

		.field {
			grid-template-columns: 5fr 1fr 3fr;
			width: 100%;
			height: 90px;
			align-items: center;
			border-bottom: 0.1em solid var(--white);
			grid-gap: 1em;

			.type {
				width: 100%;
				padding: 0 0 0 1em;
			}

			p {
				font-size: 1.25em;
			}

			.claimed {
				width: 100%;
				grid-template-columns: repeat(5, 1fr);
				place-items: center;
				grid-gap: 1em;
			}

			.claim {
				place-items: start;
				button {
					padding: 0.75em 4.5em;
					border-radius: 1em;
					background: transparent;
					color: inherit;
					border: 0.1em solid var(--white);
					letter-spacing: inherit;
					font-size: 1.2em;
				}
			}
		}

		.border-none {
			border-bottom: none;
		}
	}

	@media (max-width: 1023px) {
		& {
			.chain-deployment {
				width: 90vw;
			}
		}
	}
`;
