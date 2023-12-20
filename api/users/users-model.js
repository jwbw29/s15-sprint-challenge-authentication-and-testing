const db = require("../../data/dbConfig");

function find() {
  return db("users");
}

function findBy(id) {
  return db("users").where("id", id).first();
}

async function add(user) {
  const [id] = await db("users").insert(user);
  return findBy(id);
}

module.exports = {
  find,
  findBy,
  add,
};
