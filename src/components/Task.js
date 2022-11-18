import React from "react";

function Task({ category, text, onDelete }) {

  function handleDelete() {
    onDelete(text, category)
  }

  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button onClick={handleDelete} className="delete">X</button>
    </div>
  );
}

export default Task;
