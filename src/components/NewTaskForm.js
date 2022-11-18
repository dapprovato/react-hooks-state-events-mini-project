import React, { useState } from "react";

function NewTaskForm( {categories, onTaskFormSubmit} ) {
  const [category, setCategory] = useState("Code")
  const [text, setText] = useState("")

  function handleAddCategory(event) {
    setCategory(event.target.value)
  }

  function handleAddText(event) {
    setText(event.target.value)
  } 

  function handleSubmit(event) {
    event.preventDefault()
    const newItem = {
      text: text,
      category: category,
    }
    onTaskFormSubmit(newItem)
  }

  return (
    <form onSubmit={handleSubmit} className="new-task-form">
      <label>
        Details
        <input onChange={handleAddText} type="text" name="text" />
      </label>
      <label>
        Category
        <select name="category" onChange={handleAddCategory}>
          <option value="Code">Code</option>
          <option value="Food">Food</option>
          <option value="Money">Money</option>
          <option value="Misc">Misc</option>
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
