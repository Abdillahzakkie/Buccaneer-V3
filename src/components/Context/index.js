import { createContext, Component } from "react";
import Web3 from "web3";
require("dotenv/config");

const web3Context = createContext();

class Web3Provider extends Component {
	constructor(props) {
		super(props);

		this.state = {
			loading: true,
			modalState: true,
			web3: null,
			user: "",
			ethereum: null,
			networkType: "NONE",
		};
	}

	async componentDidMount() {
		await this.connectDapp();
	}

	connectDapp = async () => {
		try {
			await this.loadWeb3();
			await this.loadBlockchainData();
		} catch (error) {
			return error;
		}
	};

	loadWeb3 = async () => {
		try {
			const ethereum = window.ethereum;
			if (ethereum === undefined)
				throw new Error(
					"Non-Ethereum browser detected. Please install metamask and relaod the page"
				);

			const web3 = new Web3(ethereum);

			const _accounts = await ethereum.request({
				method: "eth_requestAccounts",
			});
			const _chainId = await web3.eth.getChainId();
			const _networkType = await web3.eth.net.getNetworkType();

			if (parseInt(_chainId) !== 1) {
				this.setState({ loading: true });
				alert(
					`Amuse: Invalid network detected. Please switch from ${_networkType} to Mainnet`
				);
				return;
			}

			const user = web3.utils.toChecksumAddress(_accounts[0]);

			this.setState({
				loading: false,
				modalState: false,
				web3,
				user,
				ethereum,
			});
		} catch (error) {
			console.log(error);
			return error;
		}
	};

	// load blockchain data
	loadBlockchainData = async ({ loading, web3, user } = this.state) => {
		if (loading || !web3) return;
		try {
		} catch (error) {
			console.log(error);
			return error;
		}
	};

	reRender = async () => await this.loadBlockchainData();

	updateAccount = async (_newAddress) => {
		try {
			this.setState({ user: this.toChecksumAddress(_newAddress) });
			await this.reRender();
		} catch (error) {
			return error;
		}
	};

	render() {
		return (
			<web3Context.Provider
				value={{
					...this.state,
					connectDapp: this.connectDapp,
					reRender: this.reRender,
					updateAccount: this.updateAccount,
				}}
			>
				{this.props.children}
			</web3Context.Provider>
		);
	}
}

export { web3Context, Web3Provider };
