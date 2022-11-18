import React, { useState, useEffect } from "react";
import Task from "./Task";

function TaskList({ tasks }) {
  const [taskItems, setTaskItems] = useState(tasks)
  let filterTasks = tasks
  useEffect(() => {
    setTaskItems(tasks);
}, [tasks])


  function onDelete(text, category) {
    filterTasks = tasks.filter((task) => {
      return !(task.text === text && task.category === category)
    })
    setTaskItems(filterTasks)
  } 

  return (
    <div className="tasks">
      {taskItems.map((task) => (
          <Task key={task.text}text={task.text} category={task.category} onDelete={onDelete} />
        ))}
    </div>
  );
}

export default TaskList;
