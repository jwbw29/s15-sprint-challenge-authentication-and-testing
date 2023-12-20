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
  test.todo("returns a 200 OK status code");
  test.todo("returns a JSON object");
});

describe("[POST] /api/auth/register", () => {
  test.todo("returns a 201 OK status code");
  test.todo("returns a JSON object");
});

describe("[POST] /api/auth/login", () => {
  test.todo("returns a 200 OK status code");
  test.todo("Welcome, ${username}");
});
