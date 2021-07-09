import { element } from "prop-types";
import React, { useState } from "react";

export function Home() {
	const [list, setList] = useState([]);
	const [todo, setTodo] = useState("");

	return (
		<div className="text-center mt-5">
			<div className="list">
				<h3 className="pt-5">Todo</h3>
				<input
					value={todo}
					className="input mt-5"
					placeholder="What needs to be done"
					onChange={e => setTodo(e.target.value)}
				/>
				<button
					onClick={() => {
						setList([...list, todo]);
						setTodo("");
					}}
					className="btn btn-success ml-1"
					style={{ marginBottom: "8px" }}>
					Add
				</button>
				{list.map((element, index) => (
					<div
						key={index}
						className="col-5 content-justify-center shadow-sm p-3 mb-4 ml-5 bg-light rounded">
						{element}
						<button
							onClick={() =>
								setList(list.filter(item => element !== item))
							}
							className="btn btn-link m-4">
							X
						</button>
					</div>
				))}
			</div>
		</div>
	);
}
