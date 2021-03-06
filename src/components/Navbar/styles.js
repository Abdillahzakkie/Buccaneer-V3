import styled from "styled-components";

export const NavbarContainer = styled.div`
	grid-template-columns: repeat(12, 1fr);
	background: var(--mainBlue);
	color: var(--white);
	width: 100vw;
	height: auto;
	z-index: 1;
	position: relative;
	padding: 1.75em 2rem;
	grid-gap: 0 1em;

	.nav-brand,
	.nav-list,
	.nav-icons,
	.toggle {
		margin: auto;
	}

	.nav-brand {
		grid-column: 1/3;
		grid-template-columns: 1fr 2fr;
		height: 100%;
		letter-spacing: var(--mainSpacing);
		align-items: center;

		.logo {
			width: 100%;
			height: 100%;
			place-items: center;

			img {
				width: 50px;
				height: 50px;
			}
		}

		.name {
			font-size: 0.75em;
			font-family: Montserrat;
		}
	}

	.nav-list {
		grid-column: 4/11;
		text-transform: capitalize;
		place-items: center;
		width: 100%;
		font-weight: 700;

		ul {
			a {
				padding: 0 2rem;
				letter-spacing: var(--mainSpacing);
				font-weight: 500;
				font-size: 1.25em;
				color: var(--white);
			}
		}
	}

	.nav-icons {
		grid-template-columns: 1fr;
		grid-column: 12/13;
		height: 35px;
		width: 100%;

		img {
			width: 40px;
			height: 40px;
			margin: auto;
			border-radius: 100%;
			border: 2px solid var(--red);
			cursor: pointer;
		}

		.online {
			border: 0.15em solid var(--mainGreen);
		}
	}

	.toggle {
		display: none;
	}

	@media (max-width: 1500px) {
		& {
			.nav-brand {
				grid-column: 1/4;
			}

			.nav-list {
				grid-column: 4/11;
			}
		}

		@media (max-width: 1023px) {
			& {
				padding: 1rem 2rem;

				.toggle {
					padding: 2rem 0;
					display: grid;
					grid-column: 13;
					font-size: 1.5rem;
					cursor: pointer;
					width: 100%;
				}

				.nav-brand {
					grid-column: 1/6;
					margin-left: 0;
					padding: 0.5em 0;
					grid-gap: 0 0.75em;
				}

				.nav-list,
				.nav-icons {
					display: none;
				}

				/* Nav list */
				.nav-list-mobile {
					display: grid;
					grid-column: 1/14;
					grid-row: 2;
					margin: 0.5rem 0 0;
					color: var(--darkGrey);

					ul {
						display: grid;
						grid-template-columns: 1fr;
						grid-template-rows: auto;
						padding-bottom: 1rem;
						width: 100%;

						a {
							padding: 0.5rem 1.25rem;
							letter-spacing: var(--mainSpacing);
						}
					}
				}

				@media (max-width: 693px) {
					& {
						.nav-brand {
							grid-column: 1/7;
						}
					}
				}
			}
		}
	}
`;
