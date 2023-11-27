const request = require("supertest");
const app = require("../app");

describe("GET /api/movies", () => {
  it("should return all movies", async () => {
    const response = await request(app).get("/api/movies");

    expect(response.headers["content-type"]).toMatch(/json/);
    expect(response.status).toEqual(200);
  
  });
});

// Tests pour la route GET /api/movies/:id
describe("GET /api/movies/:id", () => {
  it("should return a specific movie by its id", async () => {
    const validId = 1; // Assurez-vous que cet ID existe dans vos données de test
    const response = await request(app).get(`/api/movies/${validId}`);

    expect(response.headers["content-type"]).toMatch(/json/);
    expect(response.status).toEqual(200);
    expect(response.body).toHaveProperty("id", validId); // Vérifie que la réponse contient la propriété 'id'
  });
});
