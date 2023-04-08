import { useEffect, useState } from "react";
import { fetchPokemons } from "../../Api/FetchPokemos";
import PokemonCard from "../../components/PokemonCard/PokemonCard";
import BtnsPagination from "../../components/Btns_pagination/Btns_pagination";
import { fetchPokemonsSort } from "../../Api/FetchPokemos";
import MainPageCss from "./MainPage.module.css";
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
    console.log(newlist, "newlist");
  }, [count]);

  const newSortPokemon = (type) => {
    fetchPokemonsSort(type, info, setFakeInfo);
    setTimeout(() => {
      setCount(!count);
      // console.log(count);
    }, 100);
  };

  return (
    <>
      <div className="wrapper">
        <div className="container">
          <div className="block_one">
            {/* <BtnsPagination setPage={setPage} page={page} /> */}
          </div>
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
