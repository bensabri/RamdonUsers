import React, { useState, useContext } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
	const [data, setData] = useState({});
	const [isFetched, setIsFetched] = useState(false);
	const [query, setQuery] = useState("houmt souk");
	const [search, setSearch] = useState("");
	const [backgroundClass, setBackgroundClass] = useState("app sunny");

	return (
		<AppContext.Provider
			value={{
				data,
				setData,
				isFetched,
				setIsFetched,
				query,
				setQuery,
				search,
				setSearch,
				backgroundClass,
				setBackgroundClass,
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
