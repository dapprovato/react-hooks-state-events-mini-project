import React, { useState, useEffect } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [categorySelect, setCategorySelect] = useState("All")
  const [taskList, setTaskList] = useState(TASKS)

  useEffect(() => {
    setTaskList(TASKS);
}, [TASKS])

  const taskOne = (taskList.filter((task) => {
    if (categorySelect === "All") return true
    return task.category === categorySelect}))

  function onTaskFormSubmit(task) {
    setTaskList([...taskList, task])
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} setCategory={setCategorySelect} />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={onTaskFormSubmit} />
      <TaskList tasks={taskOne} />
    </div>
  );
}

export default App;
