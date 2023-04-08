import axios from "axios";

import { sortItem } from "../common/Helpers";
// const baseUrl = "https://pokeapi.co/api/v2/pokemon?limit=10&offset=10";
const baseUrl = "https://pokeapi.co/api/v2/pokemon?";

export const fetchPokemons = async (setNewlist, page, setInfo) => {
  try {
    const { data } = await axios.get(baseUrl, {
      params: {
        limit: 10,
        offset: page,
      },
    });
    setNewlist(data.results);
    setInfo(data.results);
    console.log(data.results, "data.results");
  } catch {
    console.error("error");
  }
};

const baseUrl_new = "https://pokeapi.co/api/v2/";

export const fetchPokemonsSort = (type, info, setFakeInfo) => {
  let list = [];
  info.map((i) => {
    axios
      .get(i.url)
      .then((response) => response.data)
      .then((data) => {
        list.push(data);
        return sortItem(list, type, setFakeInfo);
      });
  });
};

export const fetchPokemonsInfo = async (id) => {
  try {
    const { data } = await axios.get(baseUrl_new + `pokemon/${id}`);
    return data;
  } catch {
    console.error("error");
  }
};
