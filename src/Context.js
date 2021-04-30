import React, { useState, useContext } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
	const [data, setData] = useState([]);
	const [filtredPeople, setFiltredPeople] = useState([]);
	const [genderStatus, setGenderStatus] = useState("all");
	const [countryStatus, setCountryStatus] = useState("Brazil");
	const [results, setResults] = useState("200");
	const [theme, setTheme] = useState(true);
	const [loading, setLoading] = useState(true);
	const [isfetched, setIsFetched] = useState(false);
	const [color, setColor] = useState("");

	return (
		<AppContext.Provider
			value={{
				data,
				setData,
				filtredPeople,
				setFiltredPeople,
				genderStatus,
				setGenderStatus,
				countryStatus,
				setCountryStatus,
				results,
				setResults,
				theme,
				setTheme,
				loading,
				setLoading,
				isfetched,
				setIsFetched,
				color,
				setColor,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

export const useGlobalContext = () => {
	return useContext(AppContext);
};

export { AppContext, AppProvider };
