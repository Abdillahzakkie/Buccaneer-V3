import styled from "styled-components";

export const HomeContainer = styled.div`
	width: 100vw;
	color: var(--white);
	place-items: center;

	.banner {
		grid-template-columns: repeat(2, 1fr);
		width: 90%;
		height: 100%;
		background: linear-gradient(
			253.59deg,
			rgba(21, 32, 87, 0.75) 1.89%,
			rgba(53, 61, 104, 0.75) 99.63%
		);
		border-radius: 1em;
		place-items: center;
		padding: 2em;

		.banner-text {
			line-height: 2;
			width: 100%;
			letter-spacing: var(--mainSpacing);
			padding: 0 1em;

			h1 {
				font-size: 2em;
			}

			p {
				font-size: 1.25em;
			}

			.btns {
				grid-template-columns: repeat(2, 1fr);
				grid-gap: 1em;
				width: 100%;
				place-items: center;
				color: var(--white);

				button {
					width: 170px;
					margin: 2em 1em 2em 0;
					padding: 1em;
					background: transparent;
					color: inherit;
					border: 0.05em solid var(--white);
					border-radius: 1em;
					font-size: 0.9em;
					font-weight: 500;
				}

				#none {
					border: none;
				}
			}
		}

		.banner-logo {
			width: 100%;
			height: 100%;

			.image {
				width: 100%;
				height: 100%;
				place-items: center;

				img {
					width: 350px;
					height: 350px;
				}
			}
		}
	}

	.featured-cards {
		grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
		width: 90%;
		grid-gap: 2em;
		place-content: center;
		align-items: center;
		margin-top: 2em;
		padding: 2em;

		.card {
			width: 100%;
			height: 270px;
			background: radial-gradient(
				49.03% 164.11% at 49.03% 50.04%,
				rgba(21, 32, 87, 0.75) 0%,
				rgba(53, 61, 104, 0.75) 100%
			);
			backdrop-filter: blur(4px);
			border-radius: 1em;
			padding: 1em 2em;
			place-items: center;
			grid-gap: 2em 0;
			font-size: 1em;
			letter-spacing: var(--mainSpacing);

			.image {
				color: var(--white);
			}

			p {
				text-align: center;
			}
		}
	}

	.sections {
		grid-template-columns: repeat(2, 1fr);
		width: 90%;
		place-items: center;
		padding: 2em;

		.text {
			line-height: 2;

			p {
				margin-bottom: 0.5em;
			}
		}

		.image {
			width: 100%;
			place-items: end;
		}

		.right {
			place-items: start;
		}
	}

	@media (max-width: 767px) {
		& {
			.banner {
				grid-template-columns: 1fr;
				height: auto;
				padding: 3em 0.5em;

				.banner-logo {
					grid-row: 1;
				}

				.banner-text {
					grid-row: 2;
				}
			}

			.sections {
				grid-template-columns: 1fr;
				padding: 2em 0em;

				.image,
				.right {
					place-items: center;
				}

				.image {
					grid-row: 1;
				}
			}
		}
	}
`;
