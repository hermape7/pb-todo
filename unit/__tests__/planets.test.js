const {
  getPlanetByName,
  getAllPlanets,
  getPlanet
} = require("../js/sw-client");

describe("Planet Tests", () => {
  describe("GET /api/planets", () => {
    const planetNameToBeFind = "Tatooine";
    const planetNameToNotBeFind = "definitely-not-in-the-list";

    it("GET all planets", async () => {
      const allPlanets = await getAllPlanets();
      expect(allPlanets.length).toBe(60);
    });

    it(`GET planet ${planetNameToBeFind} should be in the list`, async () => {
      const planet = await getPlanetByName(planetNameToBeFind);
      expect(planet.name).toBe(planetNameToBeFind);
      expect(planet).toMatchSnapshot({
        created: expect.any(String),
        edited: expect.any(String)
      });
    });

    it(`GET planet ${planetNameToNotBeFind} should not be in the list`, async () => {
      const planet = await getPlanetByName("not-in-the-list");
      expect(planet).toBeFalsy();
    });
  });

  describe("GET /api/planets/:id", () => {
    const planetToBeFind = {
      id: 21,
      name: "Eriadu"
    };

    it(`GET planet with id ${planetToBeFind.id} should be in the list`, async () => {
      const planet = await getPlanet(planetToBeFind.id);
      expect(planet).toMatchSnapshot({
        created: expect.any(String),
        edited: expect.any(String)
      });
    });

    it("GET planet with id that is not in the list", async () => {
      const planet = await getPlanet(324547893);
      expect(planet).toHaveProperty("detail", "Not found");
    });
  });
});
