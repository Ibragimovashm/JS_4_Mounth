import React, { useState } from "react";
import TodoCard from "../TodoCard/TodoCard";
const TaskList = ({
  list,
  handleDelete,
  handleDone,
  handleEdit,
  currentEdit,
  setCurrentEdit,
}) => {
  const handleCancel = (editTodo) => {
    list.map((todo) => {
      if (todo.id === editTodo.id) {
        return { ...todo };
      }
      return todo;
    });
    setCurrentEdit();
    console.log(list, "cancel");
  };
  return (
    <div>
      {list.map((task, index) => (
        <TodoCard
          handleDelete={handleDelete}
          handleDone={handleDone}
          handleEdit={handleEdit}
          handleSelectCurrent={setCurrentEdit}
          iEdit={task.id === currentEdit}
          key={index}
          task={task}
          handleCancel={handleCancel}
        />
      ))}
    </div>
  );
};

export default TaskList;
