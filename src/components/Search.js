import React from "react";
import { useGlobalContext } from "./context";
import "./../App.css";

const Search = () => {
	const { setQuery, search, setSearch } = useGlobalContext();

	const updateSearch = (e) => {
		setSearch(e.target.value);
	};
	const getSearch = (e) => {
		e.preventDefault();
		setQuery(search);
		setSearch("");
	};

	return (
		<div className="search-container">
			<form onSubmit={getSearch}>
				<input
					type="text"
					className="search-bar"
					placeholder="Search"
					onChange={updateSearch}
					value={search}
				/>
				<button className="search-btn" type="submit">
					Search
				</button>
			</form>
		</div>
	);
};

export default Search;
