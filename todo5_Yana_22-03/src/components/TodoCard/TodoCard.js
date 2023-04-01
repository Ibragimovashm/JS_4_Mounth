import React, { useState } from "react";
import { BtnAction } from "../BtnAction/BtnAction";
import Input from "../Input/Input";
import TodoCardCss from "./TodoCard.module.css";

export const TodoCard = ({
  todo,
  handleDone,
  handleDelete,
  currentEdit,
  setCurrentEdit,
  handleEdit,
  handleCancel,
}) => {
  const [newTitle, setNewTitle] = useState(todo.title);
  // const [cancelBack, setCancelBack] = useState("");
  const handleSetTitle = (e) => {
    setNewTitle(e.target.value);
  };
  if (currentEdit) {
    return (
      <div className={TodoCardCss.parent_edit}>
        <Input
          value={newTitle}
          name={"newTitle"}
          onChange={handleSetTitle}
          placeholder={"новый текст"}
        />
        <div className={TodoCardCss.two_btn_parent}>
          <button
            className={TodoCardCss.two_btn}
            onClick={() =>
              handleEdit({
                id: todo.id,
                title: newTitle,
                completed: todo.completed,
              })
            }
          >
            save
          </button>
          <button
            className={TodoCardCss.two_btn}
            onClick={() =>
              handleCancel({
                title: todo.title,
              })
            }
          >
            cancel
          </button>
        </div>
      </div>
    );
  }
  return (
    <div className={TodoCardCss.wrapperCard}>
      <div className={todo.completed ? TodoCardCss.done : TodoCardCss.todoCard}>
        <h3>{todo.title}</h3>
      </div>
      <BtnAction onClick={setCurrentEdit} id={todo.id}>
        Edit
      </BtnAction>

      <BtnAction onClick={handleDone} id={todo.id}>
        DONE
      </BtnAction>
      <BtnAction onClick={handleDelete} id={todo.id}>
        Delete
      </BtnAction>
    </div>
  );
};
