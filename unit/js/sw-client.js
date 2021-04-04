const fetch = require("node-fetch");
const planetsEndpoint = "https://swapi.dev/api/planets";
const { find } = require("lodash");

const swRequest = async (method, endpoint) => {
  const response = await fetch(endpoint, { method }).catch(error => {
    console.log(`Failed to get endpoint (${endpoint}): ${error}`);
    throw error;
  });

  return response.json();
};

const getAllPlanets = async () => {
  let allPlanets = [];
  let hasNext = true;
  let endpoint = planetsEndpoint;
  while (hasNext) {
    const planets = await swRequest("GET", endpoint);
    if (planets.results) {
      allPlanets.push(...planets.results);
    }

    if (planets.next !== null) {
      endpoint = planets.next;
    } else {
      hasNext = false;
    }
  }

  return allPlanets.length > 0 ? allPlanets : null;
};

const getPlanetByName = async planetName => {
  const allPlanets = await getAllPlanets();

  if (allPlanets !== null) {
    const planet = find(allPlanets, planet => planet.name === planetName);
    return planet ? planet : false;
  } else {
    return false;
  }
};

const getPlanet = async planetId => {
  const planet = await swRequest("GET", `${planetsEndpoint}/${planetId}`);
  return planet;
};

module.exports = { getAllPlanets, getPlanet, getPlanetByName };
