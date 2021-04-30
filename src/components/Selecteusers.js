import React from "react";

function Selecteusers({}) {
	/*const statushandle = (e) => {
		setStatus(e.target.value);
	};

	const filterHandler = () => {
		switch (status) {
			case "male":
				setFilteredPeoples(
					peoples.filter((people) => people.gender === "male")
				);
				break;
			case "female":
				setFilteredPeoples(
					peoples.filter((people) => people.gender === "female")
				);
				break;
			default:
				setFilteredPeoples(peoples);
				break;
		}
	};*/

	return (
		<div>
			<div className="containradio">
				<div className="radio">
					<label>
						<input type="radio" value="all" name="gender" />
						All
					</label>
				</div>
				<div className="radio">
					<label>
						<input type="radio" value="male" name="gender" />
						Male
					</label>
				</div>
				<div className="radio">
					<label>
						<input type="radio" value="female" name="gender" />
						Female
					</label>
				</div>
			</div>
			{/*<div className="select-group">
				<label htmlFor="nationality">Select Nationality</label>
				<select id="sell" className="dark:text-black">
					{peoples.map((people) => (
						<option
							className="dark:text-black"
							key={people.login.uuid}
							value={people.phone}
						>
							{people.nat}
						</option>
					))}
				</select>
				<label htmlFor="users">Select number of users</label>
				<select
					className="dark:text-black"
					onChange={(e) => setResults(e.target.value)}
				>
					<option className="dark:text-black">1</option>
					<option className="dark:text-black">20</option>
					<option className="dark:text-black">50</option>
					<option className="dark:text-black">80</option>
					<option className="dark:text-black">100</option>
					<option className="dark:text-black">300</option>
					<option className="dark:text-black">500</option>
					<option className="dark:text-black">1000</option>
					<option className="dark:text-black">5000</option>
				</select>
				<button onClick={filterHandler}>Click</button>*/}
		</div>
	);
}

export default Selecteusers;
