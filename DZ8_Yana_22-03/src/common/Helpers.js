export const sortItem = (pokemonList = [], type, setFakeInfo, setNewlist) => {
  switch (type) {
    case "weight":
      console.log(pokemonList, "pokemonList");
      pokemonList.sort((a, b) => b.weight - a.weight);
      return setFakeInfo(pokemonList);
    default:
      return setNewlist(pokemonList);
  }
};
