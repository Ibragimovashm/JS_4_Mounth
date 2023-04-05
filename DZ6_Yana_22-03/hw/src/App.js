import { useEffect, useState } from "react";
import "./App.css";
import { fetchPokemons } from "./Api/FetchPokemos";
import PokemonCard from "./components/PokemonCard/PokemonCard";
import BtnsPagination from "./components/Btns_pagination/Btns_pagination";

function App() {
  const [newlist, setNewlist] = useState([]);
  const [page, setPage] = useState(0);
  useEffect(() => {
    fetchPokemons(setNewlist, page);
  }, [page]);

  return (
    <div className="wrapper">
      <div className="block_one">
        <BtnsPagination setPage={setPage} page={page} />
      </div>
      <div className="container">
        {newlist.map((card, index) => {
          return <PokemonCard key={index} card={card} />;
        })}
        <div className="block_two">
          <BtnsPagination setPage={setPage} page={page} />
        </div>
      </div>
    </div>
  );
}

export default App;
