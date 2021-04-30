import React from "react";
import "./Card.css";

const UserDetails = ({
	telephone,
	latitude,
	nationnality,
	dayofbirth,
	readMore,
	city,
	email,
}) => {
	return (
		<>
			<div className="detail-container ">
				<ul className={`moredetail ${readMore ? "open" : ""}`}>
					<li className="text-white">
						Day of birth: {dayofbirth.slice(0, 10)}
					</li>
					<li className="text-white">Email: {email}</li>
					<li className="text-white">City: {city}</li>
					<li className="text-white">Latitude: {latitude}</li>
					<li className="text-white">Nationnality: {nationnality}</li>
					<li className="text-white">Phone Number: {telephone}</li>
				</ul>
			</div>
		</>
	);
};

export default UserDetails;
