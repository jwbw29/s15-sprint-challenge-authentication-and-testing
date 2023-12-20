const request = require("supertest");
const server = require("./server.js");
const db = require("../data/dbConfig.js");

test("sanity", () => {
  expect(true).toBe(true);
});

beforeAll(async () => {
  await db.migrate.rollback();
  await db.migrate.latest();
});

beforeEach(async () => {
  await db.seed.run();
});

// Write your tests here

//// A minimum of 2 tests per API endpoint ////

describe("[GET] /api/jokes", () => {
  let token;
  beforeAll(async () => {
    const res = await request(server)
      .post("/api/auth/login")
      .send({ username: "foo", password: "1234" });

    token = res.body.token;
  });

  test("returns a 200 OK status code", async () => {
    const response = await request(server)
      .get("/api/jokes")
      .set("Authorization", token);

    expect(response.status).toBe(200);
  });

  test("returns a JSON object", async () => {
    const response = await request(server)
      .get("/api/jokes")
      .set("Authorization", "Bearer your_token_here");

    expect(response.type).toBe("application/json");
  });
});

describe("[POST] /api/auth/register", () => {
  test.todo("returns a 201 OK status code");
  test.todo("returns a JSON object");
});

describe("[POST] /api/auth/login", () => {
  test.todo("returns a 200 OK status code");
  test.todo("Welcome, ${username}");
});
