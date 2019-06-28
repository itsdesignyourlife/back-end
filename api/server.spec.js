const server = require("../api/server");
const supertest = require("supertest");

describe("Server", () => {
  it("should be running on testing env", () => {
    expect(process.env.DB_ENV).toBe("testing");
  });
  describe("GET /", () => {
    it("should respond with a 200 status code", () => {
      return supertest(server)
        .get("/")
        .expect(200);
    });
    it("should return JSON", () => {
      return supertest(server)
        .get("/")
        .expect("Content-type", /json/i);
    });
  });
});
