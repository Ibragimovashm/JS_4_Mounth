export const sortItem = (pokemonList = [], type, setFakeInfo) => {
  switch (type) {
    case "weight":
      console.log(pokemonList, "pokemonList");
      pokemonList.sort((a, b) => b.weight - a.weight);
      return setFakeInfo(pokemonList);
    case "attack":
      pokemonList.sort((a, b) => b.stats[1].base_stat - a.stats[1].base_stat);
      return setFakeInfo(pokemonList);
    case "speed":
      pokemonList.sort((a, b) => b.stats[5].base_stat - a.stats[5].base_stat);
      return setFakeInfo(pokemonList);

    case "HP":
      pokemonList.sort((a, b) => b.stats[0].base_stat - a.stats[0].base_stat);
      return setFakeInfo(pokemonList);
    default:
      return setNewlist(pokemonList);
  }
};
