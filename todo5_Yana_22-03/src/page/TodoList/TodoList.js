import { useEffect, useState } from "react";
import Input from "../../components/Input/Input";
import List from "../../components/List/List";
import { Modal } from "../../components/Modal/Modal";
import NewButton from "../../components/NewButton/NewButton";
import todoListcss from "./TodoList.module.css";
import AsyncSelect from "react-select/async";

function TodoList() {
  const [state, setState] = useState(false);
  const [title, setTitle] = useState("");
  const [search, setSearch] = useState("");
  const [currentEdit, setCurrentEdit] = useState();

  const [list, setList] = useState([
    {
      id: 1,
      title: "Geeks",
      completed: false,
    },
    {
      id: 2,
      title: "ItBootcamp",
      completed: false,
    },
    {
      id: 3,
      title: "Codify Lab",
      completed: false,
    },
    {
      id: 4,
      title: "IT-RUN",
      completed: false,
    },
    {
      id: 5,
      title: "makers",
      completed: false,
    },
    {
      id: 6,
      title: "Neobis",
      completed: false,
    },
    {
      id: 7,
      title: "Codify Lab",
      completed: false,
    },
    {
      id: 8,
      title: "IT-Megacom",
      completed: false,
    },
    {
      id: 9,
      title: "Prolab",
      completed: false,
    },
    {
      id: 10,
      title: "Soft Club",
      completed: false,
    },
  ]);
  const [newList, setNewList] = useState([]);

  useEffect(() => {
    const newInfo = JSON.parse(localStorage.getItem("listData"));
    const newInfoNone = JSON.parse(localStorage.getItem("listData"));
    newInfo === "" ? setList(newInfoNone) : setList(newInfo);
    setNewList(newInfo);
  }, []);

  const handleShow = () => {
    setState(!state);
  };

  const handleChangeText = (event) => {
    setTitle(event.target.value);
  };

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const resultSearch = list.filter((i) =>
    i.title.toLowerCase().includes(search.toLowerCase())
  );

  const handleNewAdd = () => {
    setList((prevTodo) => {
      return [...prevTodo, { id: list.length + 15, title: title }];
    });
    setTitle("");
    handleShow();
  };

  const handleDone = (id) => {
    const currentIndex = list.findIndex((todo) => todo.id === id);
    list[currentIndex].completed = !list[currentIndex].completed;
    setList([...list]);
  };

  const handleDelete = (id) => {
    const currentIndex = list.findIndex((todo) => todo.id === id);
    let a = list.splice(currentIndex, 1);
    setList([...list]);
    console.log(a);
    console.log(list, "delete");
  };

  const handleEdit = (editTodo) => {
    const edditList = list.map((todo) => {
      if (todo.id === editTodo.id) {
        return { ...todo, title: editTodo.title };
      }
      return todo;
    });
    setList([...edditList]);
    setCurrentEdit();
    console.log(edditList, "edit");
  };

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

  const ClearTask = () => {
    setList([]);
    setNewList([]);
    localStorage.clear();
  };

  useEffect(() => {
    localStorage.setItem("listData", JSON.stringify(list));
  }, [list]);

  const options = [
    { value: 1, label: "все" },
    { value: 2, label: "выполненные" },
    { value: 3, label: "невыполненные" },
  ];

  const choiceSelect = (selectedOption) => {
    console.log(selectedOption.value, "selectedOption.value");
    if (selectedOption.value === 1) {
      setList(newList);
      console.log(newList, "newList");
    } else if (selectedOption.value === 2) {
      const newInfoFiltered = newList.filter((item) => {
        return item.completed ? item : "";
      });
      console.log(newInfoFiltered, "newInfoFiltered");
      setList(newInfoFiltered);
    } else if (selectedOption.value === 3) {
      const newInfoFiltered = newList.filter((item) => {
        return item.completed ? "" : item;
      });
      console.log(newInfoFiltered, "newInfoFiltered");
      setList(newInfoFiltered);
    } else {
      console.log("error");
    }
  };

  const loadOptions = (searchValue, callback) => {
    const filteredOptions = options.filter((option) => {
      return option.label.toLowerCase().includes(searchValue.toLowerCase());
    });
    console.log(searchValue, filteredOptions);
    callback(filteredOptions);
  };

  ////////////////////////////////////////////////////////

  return (
    <>
      <div className={todoListcss.parent_for_select_and_input}>
        <Input
          placeholder={"search"}
          name={"search"}
          onChange={handleSearch}
          value={search}
        />
      </div>
      <div className={todoListcss.wrapper}>
        <div className={todoListcss.parent_btn}>
          <NewButton onClick={handleShow}>Добавить</NewButton>
          <button onClick={ClearTask} className={todoListcss.btn_clear}>
            Clear
          </button>
          <AsyncSelect
            className={todoListcss.select_search}
            loadOptions={loadOptions}
            defaultOptions
            onChange={choiceSelect}
          />
        </div>
        {state && (
          <Modal handleShow={handleShow}>
            <h2>{title}</h2>
            <div className={todoListcss.parent_input_add}>
              <Input
                placeholder={"добавить"}
                name={"add"}
                onChange={handleChangeText}
                value={title}
              />
            </div>
            <div className={todoListcss.parent_btn_2}>
              <NewButton onClick={handleNewAdd}>Добавить</NewButton>
            </div>
            <button className={todoListcss.btn_close} onClick={handleShow}>
              close
            </button>
          </Modal>
        )}
        <List
          list={resultSearch}
          handleDone={handleDone}
          handleDelete={handleDelete}
          currentEdit={currentEdit}
          setCurrentEdit={setCurrentEdit}
          handleEdit={handleEdit}
          handleCancel={handleCancel}
        />
      </div>
    </>
  );
}
export default TodoList;
