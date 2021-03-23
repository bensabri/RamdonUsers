import React, { useEffect } from "react";
import axios from "axios";
import { useGlobalContext } from "./context";

const FetchWeather = () => {
	const { setData, query, setIsFetched } = useGlobalContext();

	const KEY = "5f1c532c3d8086f3c3e5ddc350fab34a";
	const URL = `https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&appid=${KEY}`;

	useEffect(() => {
		axios.get(URL).then((response) => {
			setData(response.data);
			setIsFetched(true);
			console.log("fetch data");
			console.log(response);
		});
	}, [query]);

	return <></>;
};

export default FetchWeather;
