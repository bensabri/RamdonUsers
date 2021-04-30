import React from "react";
import { useGlobalContext } from "./../Context";
import { Switch } from "@material-ui/core";

const Switcher = () => {
	const { theme, setTheme } = useGlobalContext();
	return (
		<div className="switcher">
			<p>{`${theme ? "Light" : "Dark"} `}Mode</p>
			<Switch onChange={() => setTheme(!theme)} />
		</div>
	);
};

export default Switcher;
