import { useState } from "react";
import "./App.css";
import Modal from "./components/Modal/Modal";
import Button from "./components/Button/Button";
import { List } from "./components/List/List";
import { Input } from "./components/Input/Input";
function App() {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(!show);
  const [search, Setsearch] = useState("");

  const [list, newList] = useState([
    {
      id: 1,
      task: "coding",
    },
    {
      id: 2,
      task: "eat",
    },
    {
      id: 3,
      task: "sleep",
    },
  ]);
  const handleChange = (e) => {
    Setsearch(e.target.value);
    console.log(search);
  };

  return (
    <div className="App">
      <Input
        placeholder="searchInput"
        name="mainInput"
        onchange={handleChange}
      />
      {show && <Modal handleShow={handleShow} onchange={handleChange} />}
      <Button handleClick={handleShow}>Открыть модалку</Button>
      <List list={list} />
    </div>
  );
}

export default App;
