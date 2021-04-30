import React from "react";
import { useGlobalContext } from "./../Context";

const RadioSelecteur = () => {
	const { setGenderStatus } = useGlobalContext();

	const statushandle = (e) => {
		setGenderStatus(e.target.value);
	};

	return (
		<div className="containradio">
			<div className="radio">
				<label>
					<input
						type="radio"
						value="all"
						name="gender"
						onChange={statushandle}
					/>
					All
				</label>
			</div>
			<div className="radio">
				<label>
					<input
						type="radio"
						value="male"
						name="gender"
						onChange={statushandle}
					/>
					Male
				</label>
			</div>
			<div className="radio">
				<label>
					<input
						type="radio"
						value="female"
						name="gender"
						onChange={statushandle}
					/>
					Female
				</label>
			</div>
		</div>
	);
};

export default RadioSelecteur;
