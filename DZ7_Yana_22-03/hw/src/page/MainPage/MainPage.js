import { useEffect, useState } from "react";
import { fetchPokemons } from "../../Api/FetchPokemos";
import PokemonCard from "../../components/PokemonCard/PokemonCard";
import BtnsPagination from "../../components/Btns_pagination/Btns_pagination";

function MainPage() {
  const [newlist, setNewlist] = useState([]);
  const [page, setPage] = useState(0);
  // console.log(page, "p");
  useEffect(() => {
    fetchPokemons(setNewlist, page);
  }, [page]);
  // console.log(newlist);

  return (
    <div className="wrapper">
      <div className="container">
        <div className="block_one">
          <BtnsPagination setPage={setPage} page={page} />
        </div>
        {newlist.map((card, index) => {
          // console.log(card.url);
          return <PokemonCard key={index} card={card} />;
        })}
        <div className="block_two">
          <BtnsPagination setPage={setPage} page={page} />
        </div>
      </div>
    </div>
  );
}

export default MainPage;
