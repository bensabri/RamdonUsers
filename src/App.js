import React from "react";
import Days from "./components/Days";
import Search from "./components/Search";
import FetchWeather from "./components/FetchWeather";
import Weather from "./components/Weather";
import { useGlobalContext } from "./components/context";
import "./App.css";

function App() {
	const {
		data,
		backgroundClass,
		setBackgroundClass,
		isFetched,
	} = useGlobalContext();

	if (isFetched && data.weather[0].main === "Clear") {
		setBackgroundClass("app sunny");
	} else if (isFetched && data.weather[0].main === "Clouds") {
		setBackgroundClass("app cloudy");
	} else if (isFetched && data.weather[0].main === "Rain") {
		setBackgroundClass("app rain");
	}

	return (
		<div className={backgroundClass}>
			<main>
				<Search />
				<Days />
				<Weather />
				<FetchWeather />
			</main>
		</div>
	);
}

export default App;
