import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Bermuda from "./pages/Bermuda";

function App() {
	return (
		<div className="App">
			<Navbar />
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/bermuda" component={Bermuda} />
			</Switch>
			<Footer />
		</div>
	);
}

export default App;
