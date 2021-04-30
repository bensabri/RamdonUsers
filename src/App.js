import React from "react";
import "./App.css";
import { useGlobalContext } from "./Context";
import FetchAxios from "./FetchAxios";
import Nav from "./components/Nav/Nav";
import Card from "./components/Card/Card";
import Loading from "./components/Loading/Loading";

const App = () => {
	const {
		data,
		filtredPeople,
		countryStatus,
		theme,
		loading,
		isfetched,
	} = useGlobalContext();

	return (
		<div className={`App ${theme ? "dark" : "light"}`}>
			{isfetched && <Nav data={data} />}
			{loading ? (
				<Loading />
			) : (
				<section
					className="h-full dark:bg-gray-700 dark:text-white"
					id="card-container"
				>
					{filtredPeople
						.filter((el) => el.country === countryStatus)
						.map((formatedUser, index) => {
							return (
								<Card
									name={formatedUser.name}
									email={formatedUser.email}
									photo={formatedUser.photo}
									gender={formatedUser.gender}
									age={formatedUser.age}
									dayofbirth={formatedUser.dayofbirth}
									city={formatedUser.city}
									latitude={formatedUser.latitude}
									country={formatedUser.country}
									id={index}
									key={formatedUser.id}
									telephone={formatedUser.telephone}
									nationnality={formatedUser.nationnality}
								/>
							);
						})}
				</section>
			)}
			<FetchAxios />
		</div>
	);
};

export default App;
