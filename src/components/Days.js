import React from "react";
import { useGlobalContext } from "./context";
import "./../App.css";

const Days = () => {
	const { data, isFetched } = useGlobalContext();

	let days = [
		"Sunday",
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday",
	];

	let months = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December",
	];

	const d = new Date();

	const date = d.getDate(); // Get date 1-31 day
	const month = months[d.getMonth()]; // get months 1-12
	const day = days[d.getDay()]; // get day from monday to sunday
	const year = d.getFullYear(); // get current year

	return (
		<div className="date-container">
			{`${day} ${date} ${month} ${year} `}
			{isFetched ? (
				<div className="location">
					{data.name} ,{data.sys.country}{" "}
				</div>
			) : (
				""
			)}
		</div>
	);
};

export default Days;
