import React, { useState, useEffect } from "react";
import UserDetails from "./UserDetails";
import { useGlobalContext } from "./../../Context";
import "./Card.css";

const Card = ({
	photo,
	name,
	gender,
	age,
	id,
	country,
	telephone,
	nationnality,
	dayofbirth,
	latitude,
	city,
	email,
}) => {
	const { filtredPeople, color, setColor, genderStatus } = useGlobalContext();

	const [readMore, setReadMore] = useState(false);

	useEffect(() => {
		if (genderStatus === "female") {
			setColor("rgb(233, 144, 144)");
		} else if (genderStatus === "male") {
			setColor("rgb(119, 189, 246)");
		} else if (genderStatus === "all") {
			setColor("rgb(77, 77, 77)");
		}
	}, [filtredPeople]);

	return (
		<>
			<div
				key={id}
				className="card dark:bg-gray-700 card-container"
				style={{
					backgroundColor: color,
					transition: "backgroundColor 500ms easeInOut",
				}}
			>
				<img src={photo} alt="" />
				<h3 className="text-lg mx-3 mt-2 font-bold uppercase">
					{name}
				</h3>
				<p className="mt-2 mx-3">Age: {age}</p>
				<p className="mx-3">Gender: {gender}</p>
				<p className="mx-3 mb-3">Country: {country} </p>
				<UserDetails
					readMore={readMore}
					setReadMore={setReadMore}
					telephone={telephone}
					nationnality={nationnality}
					dayofbirth={dayofbirth}
					latitude={latitude}
					city={city}
					email={email}
				/>
			</div>
		</>
	);
};

export default Card;
