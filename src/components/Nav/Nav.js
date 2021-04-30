import React from "react";
import "./Nav.css";
import Switcher from "../Switcher";
import RadioSelecteur from "../RadioSelecteur";
import CountrySelect from "../CountrySelect/CountrySelect";
import ResultSelect from "../ResultSelect/ResultSelect";
import { useGlobalContext } from "./../../Context";

const Nav = () => {
	const { color } = useGlobalContext();

	return (
		<>
			<h1
				style={{
					backgroundColor: color,
					fontSize: "1.5rem",
				}}
			>
				RAMDOM USERS
			</h1>
			<nav
				className="h-h-8 w-full dark:bg-black text-white nav-container"
				style={{
					backgroundColor: color,
				}}
			>
				<CountrySelect />
				<ResultSelect />
				<RadioSelecteur />
				<Switcher />
			</nav>
		</>
	);
};

export default Nav;
