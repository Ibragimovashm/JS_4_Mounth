import { Route, Routes } from "react-router-dom";
import "./App.css";
import AboutPokemon from "./components/AboutPokemon/AboutPokemon";
import Menu from "./components/Menu/Menu";
import { PokemonInfo } from "./components/PokemonInfo/PokemonInfo";
import MainPage from "./page/MainPage/MainPage";

function App() {
  return (
    <>
      <Menu />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<AboutPokemon />} />
        <Route path="/info/:id" element={<PokemonInfo />} />
      </Routes>
    </>
  );
}

export default App;
