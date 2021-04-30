import React from "react";
import Spinner from "../../images/spinner.gif";
import "./../../App.css";
import { useGlobalContext } from "./../../Context";

const Loading = () => {
	const { theme } = useGlobalContext();
	return (
		<div className={`App ${theme ? "dark" : "light"}`}>
			<main className="h-screen dark:bg-gray-700 dark:text-white transfom duration-300">
				<div className="loading-container">
					<img src={Spinner} alt="" />
				</div>
			</main>
		</div>
	);
};

export default Loading;
