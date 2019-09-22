const getCharacters = async (page = 1) => {
  const path = 'https://rickandmortyapi.com/api/character/';
  const response = await fetch(`${path}?page=${page}`);
  const result = await response.json();
  return result;
};

export default getCharacters;
