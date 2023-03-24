import React from 'react'
import classes from './todocard.module.css'
const TodoCard = ({ task, handleDelete }) => {
  return (
    <div className={classes.todoCard}>
        <p>{task.id}</p>
        <h5>{task.title}</h5>
        <button onClick={() => handleDelete(task.id)}>Delete</button>
    </div>
  )
}

export default TodoCard
