import React from "react";
import TodoCard from "../TodoCard/TodoCard";
const TaskList = ({ list, handleDelete }) => {
  return (
    <div>
      {list.map((task) => (
        <TodoCard handleDelete={handleDelete} key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;
