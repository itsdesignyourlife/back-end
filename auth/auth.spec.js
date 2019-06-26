const db = require("../data/dbConfig");
const server = require("../api/server");
const supertest = require("supertest");

const { find, findBy, add, findById } = require("../users/users-model");

describe("Auth Router", () => {
  beforeEach(async () => {
    await db("users").truncate();
  });
  it("should be running on testing env", () => {
    expect(process.env.DB_ENV).toBe("testing");
  });

  describe("add()", () => {
    it("should insert users", async () => {
      await add({ username: "example", password: "example" });
      await add({ username: "example2", password: "example" });

      const users = await db("users");

      expect(users).toHaveLength(2);
    });
    it("should return a 201 status code", async () => {
      const user = { username: "example2", password: "example" };

      const res = await supertest(server)
        .post("/api/auth/register")
        .send(user);

      expect(res.status).toBe(201);
    });
  });
});
