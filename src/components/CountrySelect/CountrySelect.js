import React from "react";
import "./CountrySelect.css";
import { useGlobalContext } from "./../../Context";

const CountrySelect = () => {
	const { data, setCountryStatus } = useGlobalContext();

	const myPeople = data.map((user) => {
		return {
			name: `${user.name.first} ${user.name.last}`,
			photo: user.picture.large,
			gender: user.gender,
			email: user.email,
			telephone: user.cell,
			age: user.dob.age,
			dayofbirth: user.dob.date,
			city: user.location.city,
			latitude: user.location.coordinates.latitude,
			country: user.location.country,
			nationnality: user.nat,
			id: user.login.uuid,
		};
	});

	const country = [...new Set(myPeople.map((people) => people.country))];

	return (
		<div className="natSelect">
			<label htmlFor="country">Select Country</label>
			<select
				id={myPeople.id}
				className="text-black"
				onChange={(e) => setCountryStatus(e.target.value)}
			>
				{country.sort().map((people, index) => (
					<option className="text-black" value={people} key={index}>
						{people}
					</option>
				))}
			</select>
		</div>
	);
};

export default CountrySelect;
