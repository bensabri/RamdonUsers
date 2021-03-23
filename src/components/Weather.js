import React from "react";
import { useGlobalContext } from "./context";
import "./../App.css";

const Weather = () => {
	const { data, isFetched } = useGlobalContext();

	/*const myWeather = data.map((weather) => {
		return {
			condition: weather.data.weather.decription,
		};
	});*/
	console.log(data);
	return (
		<>
			{isFetched ? (
				<div className="weather-container">
					<div className="temp">{Math.round(data.main.temp)}°c</div>
					<div className="weather">{data.weather[0].main}</div>
					<div className="wind">
						{Math.round(data.wind.speed * 1.60934)} km/h
					</div>
					<div className="latitude">
						{data.coord.lat.toFixed(2)}° Latitude
					</div>
				</div>
			) : (
				""
			)}
		</>
	);
};

export default Weather;
