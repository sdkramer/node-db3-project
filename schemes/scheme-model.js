const db = require('../data/config')

function find() {
return db('schemes')
}

function findById(id) {
  return db("schemes")
  .where({ id })
  .first()
}

module.exports = {
  find,
  findById,
}