import { useEffect, useState } from "react";
import { fetchPokemons } from "../../Api/FetchPokemos";
import PokemonCard from "../../components/PokemonCard/PokemonCard";
import BtnsPagination from "../../components/Btns_pagination/Btns_pagination";
import { fetchPokemonsSort } from "../../Api/FetchPokemos";
import MainPageCss from "./MainPage.module.css";
import { sortItem } from "../../common/Helpers";
function MainPage() {
  const [newlist, setNewlist] = useState([]);
  const [page, setPage] = useState(0);
  const [info, setInfo] = useState([]);
  const [fakeInfo, setFakeInfo] = useState([]);
  const [count, setCount] = useState(true);

  useEffect(() => {
    fetchPokemons(setNewlist, page, setInfo);
  }, [page]);

  // console.log(fakeInfo, "newlistSortFake")

  useEffect(() => {
    setNewlist(fakeInfo);
    console.log(fakeInfo, "fakeInfo");
    // console.log(newlist, "newlist");
  }, [count]);

  const newSortPokemon = (type) => {
    fetchPokemonsSort(type, info, setFakeInfo, setNewlist);
    setTimeout(() => {
      setCount(!count);
      console.log(count);
    }, 100);
  };

  return (
    <>
      <div className={MainPageCss.block_sort_btns}>
        <button onClick={() => newSortPokemon("weight")}>sort weight</button>
      </div>
      <div className="wrapper">
        <div className="container">
          <div className="block_one"></div>
          {newlist.map((card, index) => {
            return <PokemonCard key={index} card={card} />;
          })}
          <div className="block_two">
            <BtnsPagination setPage={setPage} page={page} />
          </div>
        </div>
      </div>
    </>
  );
}

export default MainPage;
