import { element } from "prop-types";
import React, { useState } from "react";

export function Home() {
	const [list, setList] = useState([]);
	const [todo, setTodo] = useState("");

	return (
		<div className="text-center mt-5">
			<div className="list">
				<h3 className="pt-5">ToDo</h3>
				<input
					value={todo}
					className="input mt-1"
					placeholder="What needs to be done"
					onChange={e => setTodo(e.target.value)}
				/>
				<button
					onClick={() => {
						setList([...list, todo]);
						setTodo("");
					}}
					className="btn btn-xl btn-rounded-end btn-light"
					style={{ marginBottom: "8px", height: "45px" }}>
					Add
				</button>
				{list.map((element, index) => (
					<div key={index}>
						<ul className="list-group list-group-lg">
							<li className="list-group-item">
								{element}
								<button
									onClick={() =>
										setList(
											list.filter(
												item => element !== item
											)
										)
									}
									className="btn btn-link m-4 text-justify-end">
									X
								</button>
							</li>
						</ul>{" "}
					</div>
				))}
				<ul>
					<li>{list !== 0 ? `${list.length} Item(s) left` : " "}</li>
				</ul>
			</div>
		</div>
	);
}
