import React, { useEffect } from "react";
import axios from "axios";
import { useGlobalContext } from "./Context";

const FetchAxios = () => {
	const {
		data,
		setData,
		results,
		genderStatus,
		isfetched,
		setLoading,
		setIsFetched,
		setFiltredPeople,
	} = useGlobalContext();

	useEffect(() => {
		axios
			.get(`https://randomuser.me/api/?results=${results}`)
			.then((response) => {
				setLoading(true);
				setData(response.data.results);
				console.log(response.data.results);
				console.log("fetching data");
				setLoading(false);
				setIsFetched(true);
			})
			.catch((err) => {
				setLoading(false);
				console.log(err);
			});
	}, [results]);

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

	const filterHandler = () => {
		switch (genderStatus) {
			case "male":
				setFiltredPeople(
					myPeople.filter((people) => people.gender === "male")
				);
				break;
			case "female":
				setFiltredPeople(
					myPeople.filter((people) => people.gender === "female")
				);
				break;
			default:
				setFiltredPeople(myPeople);
				break;
		}
	};
	useEffect(() => {
		filterHandler();
		console.log("test");
	}, [genderStatus, isfetched]);
	return <div></div>;
};

export default FetchAxios;
