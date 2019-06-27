const supertest = require("supertest");
const server = require("../api/server");

describe("Posts Router", () => {
  describe("GET /", () => {
    it("should return a 401 with no credentials", () => {
      return supertest(server)
        .get("/api/posts")
        .expect(401);
    });
    it("should return JSON", () => {
      return supertest(server)
        .get("/api/posts")
        .expect("content-type", /json/i);
    });
  });
  describe("POST /", () => {
    it("should return a 401 with no credentials", () => {
      return supertest(server)
        .post("/api/posts")
        .expect(401);
    });
    it("should return JSON", () => {
      return supertest(server)
        .post("/api/posts")
        .expect("content-type", /json/i);
    });
  });
  describe("GET /:id", () => {
    it("should return a 401 with no credentials", () => {
      return supertest(server)
        .get("/api/posts/:id")
        .expect(401);
    });
    it("should return JSON", () => {
      return supertest(server)
        .get("/api/posts/:id")
        .expect("content-type", /json/i);
    });
  });
  describe("PUT /:id", () => {
    it("should return a 401 with no credentials", () => {
      return supertest(server)
        .put("/api/posts/:id")
        .expect(401);
    });
    it("should return JSON", () => {
      return supertest(server)
        .put("/api/posts/:id")
        .expect("content-type", /json/i);
    });
  });
  describe("DELETE /:id", () => {
    it("should return a 401 with no credentials", () => {
      return supertest(server)
        .delete("/api/posts/:id")
        .expect(401);
    });
    it("should return JSON", () => {
      return supertest(server)
        .delete("/api/posts/:id")
        .expect("content-type", /json/i);
    });
  });
  
});
