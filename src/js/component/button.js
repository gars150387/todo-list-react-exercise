import React from "react";

const button =() => {
    return (
        <button
            onClick={() => {
                setList([...list, todo]);
                setTodo("");
            }}
            className="btn btn-success ml-1"
            style={{ marginBottom: "8px" }}>
            Add
        </button>
    )
}
