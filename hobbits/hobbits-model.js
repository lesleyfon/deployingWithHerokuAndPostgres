const db = require("../data/config")

function list() {
  return db("hobbits")
}

function findById(id) {
  return db('hobbits').where('id', id).first();
}

async function insert(hobbit) {
  const [id] = await db('hobbits').insert(hobbit)
  return findById(id)
}

async function update(id, changes) {
  await db('hobbits').update(changes).where('id', id)
  return findById(id)
}

function remove(id) {
  return null
}

module.exports = {
  list,
  findById,
  insert,
  update,
  remove,
}