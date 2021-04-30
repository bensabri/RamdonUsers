import React from "react";
import "./ResultSelect.css";
import { useGlobalContext } from "./../../Context";

const ResultSelect = () => {
	const { setResults } = useGlobalContext();
	return (
		<div className="resultselect">
			<label>Select people number</label>
			<select
				className="text-black"
				onChange={(e) => {
					setResults(e.target.value);
				}}
			>
				<option className="text-black">20</option>
				<option className="text-black">50</option>
				<option className="text-black">80</option>
				<option className="text-black">100</option>
				<option className="text-black">300</option>
				<option className="text-black">500</option>
				<option className="text-black">1000</option>
				<option className="text-black">5000</option>
			</select>
		</div>
	);
};

export default ResultSelect;
