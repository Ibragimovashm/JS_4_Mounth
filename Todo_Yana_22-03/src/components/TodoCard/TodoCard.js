import React, { useState } from "react";
import classes from "./todocard.module.css";
const TodoCard = ({
  task,
  handleDelete,
  handleDone,
  handleEdit,
  handleSelectCurrent,
  iEdit,
  handleCancel,
}) => {
  const [newTitle, setNewTitle] = useState(task.title);
  if (iEdit) {
    return (
      <div>
        <input
          name="edit"
          value={newTitle}
          onChange={(event) => setNewTitle(event.target.value)}
        />
        <button onClick={() => handleEdit({ ...task, title: newTitle })}>
          Save
        </button>
        <button onClick={() => handleCancel({ title: task.title })}>
          Cancel
        </button>
      </div>
    );
  }
  return (
    <div className={classes.todoCard}>
      <h5 className={task.completed ? classes.lineText : ""}>{task.title}</h5>
      <button onClick={() => handleSelectCurrent(task.id)}>Edit</button>
      <button onClick={() => handleDone(task.id)}>Done</button>
      <button onClick={() => handleDelete(task.id)}>Delete</button>
    </div>
  );
};

export default TodoCard;
