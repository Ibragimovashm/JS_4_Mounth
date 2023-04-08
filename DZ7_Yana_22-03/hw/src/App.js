import { Route, Router, Routes } from "react-router-dom";
import "./App.css";
import AboutPokemon from "./components/AboutPokemon/AboutPokemon";
import Menu from "./components/Menu/Menu";
import MainPage from "./page/MainPage/MainPage";

function App() {
  return (
    <>
      <Menu />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<AboutPokemon />} />
      </Routes>
    </>
  );
}

export default App;
