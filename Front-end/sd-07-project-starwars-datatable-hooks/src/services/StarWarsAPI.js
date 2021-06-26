async function fetchPlanets() {
  const url = 'https://swapi-trybe.herokuapp.com/api/planets/';
  const response = await fetch(url);
  const data = await response.json();
  const { results } = data;
  return results;
}

export default fetchPlanets;
