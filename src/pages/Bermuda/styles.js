import styled from "styled-components";

export const BermudaContainer = styled.div`
	width: 90vw;
	color: var(--white);
	grid-gap: 2em 0;

	header,
	.balance,
	.form-group,
	.staking {
		width: 100%;
	}

	header {
		height: 70px;
		align-items: center;
		font-family: Serenity;
		padding: 0 0 0 2em;
		font-size: 2em;
	}

	.balance {
		padding: 2em;
		grid-gap: 2em 0;

		.submarine-mode {
			p {
				font-size: 1.25em;
			}
		}
	}

	form {
		height: 400px;
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

	.form-group {
		grid-template-columns: repeat(2, 1fr);
		grid-gap: 2em 4em;
		margin-bottom: 2em;
		letter-spacing: var(--mainSpacing);

		form {
			width: 100%;
		}

		.private-sell {
			.btns {
				grid-template-columns: 1fr;
			}
		}
	}

	.random-text {
		width: 50%;
		place-items: center;
		text-align: center;
		letter-spacing: var(--mainSpacing);
	}

	.staking {
		margin: 2em auto;
		letter-spacing: var(--mainSpacing);

		header {
			width: 100%;
			place-items: center;
			align-items: center;
			font-size: 1.25em;
		}
	}

	.stake-rate {
		width: 100%;
		place-items: center;
		text-align: center;
		line-height: 2;
		letter-spacing: var(--mainSpacing);
		margin-bottom: 3em;

		header {
			h2 {
				place-self: center;
				font-size: 1.5em;
			}
		}

		p {
			font-size: 1.25em;
		}
	}

	@media (max-width: 767px) {
		& {
			.balance {
				.submarine-mode {
					p {
						font-size: 1em;
					}
				}
			}
			.form-group {
				grid-template-columns: 1fr;
			}

			.random-text {
				width: 80%;
			}

			.staking {
				header {
					font-size: 1em;
				}
			}
		}

		@media (max-width: 424px) {
			& {
				form {
					height: 450px;

					.btns {
						grid-template-columns: 1fr;
					}
				}
			}
		}

		@media (max-width: 374px) {
			& {
				header {
					padding: 0;
					font-size: 1.25em;
				}

				.balance {
					padding: 2em 1em;

					h1 {
						font-size: 1.35em;
						letter-spacing: var(--mainSpacing);
					}
				}
			}
		}
	}
`;
