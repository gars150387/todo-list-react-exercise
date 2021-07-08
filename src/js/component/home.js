import { element } from "prop-types";
import React, { useState } from "react";

export function Home() {
	const [list, setList] = useState([]);
	const [todo, setTodo] = useState("");

	return (
		<div className="text-center mt-5">
			<div className="list ">
				<h3>Todo</h3>
				<input
					value={todo}
					className="input"
					placeholder="What needs to be done"
					onChange={e => setTodo(e.target.value)}
				/>
				<button
					onClick={() => {
						setList([...list, todo]);
						setTodo("");
					}}
					className="btn btn-success m-2">
					Add
				</button>
				{list.map((element, index) => (
					<div key={index}>
						{element}
						<button
							onClick={() =>
								setList(list.filter(item => element !== item))
							}
							className="btn btn-dark m-4"></button>
					</div>
				))}
			</div>
		</div>
	);
}
