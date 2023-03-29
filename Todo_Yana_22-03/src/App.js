import { useState } from "react";
import "./App.css";
import Modal from "./components/Modal/Modal";
import Button from "./components/Button/Button";
import TaskList from "./components/TaskList/TaskList";

function App() {
  const [show, setShow] = useState(false);
  const [newTask, setNewTask] = useState("");
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Coding",
      completed: false,
    },
    {
      id: 2,
      title: "Eat",
      completed: false,
    },
    {
      id: 3,
      title: "Sleep",
      completed: false,
    },
    {
      id: 4,
      title: "Coding",
      completed: false,
    },
  ]);
  const [currentEdit, setCurrentEdit] = useState();

  const handleShow = () => setShow(!show);

  const handleChangeCheck = (event) => {
    setNewTask(event.target.value);
  };
  const handleAddTask = () => {
    setTasks((prevState) => [
      ...prevState,
      {
        id: Math.floor(Math.random() * 1000),
        title: newTask,
        completed: false,
      },
    ]);
    handleShow();
  };

  const handleDelete = (id) => {
    const deleted = tasks.filter((el) => el.id !== id);
    setTasks([...deleted]);
  };

  const handleDone = (id) => {
    // const currentIndex = tasks.findIndex(task => task.id === id )
    tasks.map((task) => {
      if (task.id === id) {
        return (task.completed = !task.completed);
      }
      return task;
    });
    setTasks([...tasks]);
  };

  const handleEdit = (editTodo) => {
    const editList = tasks.map((task) => {
      if (task.id === editTodo.id) {
        return { ...task, title: editTodo.title };
      }
      return task;
    });
    setCurrentEdit();
    setTasks([...editList]);
  };

  ///////////////////////

  return (
    <div className="App">
      {show && (
        <Modal
          handleChangeCheck={handleChangeCheck}
          handleAdd={handleAddTask}
          handleShow={handleShow}
        />
      )}

      <Button handleClick={handleShow}>Открыть модалку</Button>

      {/* task list */}
      <TaskList
        handleDelete={handleDelete}
        handleDone={handleDone}
        handleEdit={handleEdit}
        list={tasks}
        currentEdit={currentEdit}
        setCurrentEdit={setCurrentEdit}
      />
    </div>
  );
}

export default App;
