import axios from "axios";

// const baseUrl = "https://pokeapi.co/api/v2/pokemon?limit=10&offset=10";
const baseUrl = "https://pokeapi.co/api/v2/pokemon?";

export const fetchPokemons = async (setNewlist, page) => {
  // console.log(page, "page");

  try {
    const { data } = await axios.get(baseUrl, {
      params: {
        limit: 10,
        offset: page,
      },
    });
    setNewlist(data.results);
  } catch {
    console.error("error");
  }
};
