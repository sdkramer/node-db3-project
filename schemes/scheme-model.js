const db = require('../data/config')

function find() {
return db('schemes')
}

function findById(id) {
  return db("schemes")
  .where('id', id)
  .first()
}

function findSteps(id) {
return db('steps as st')
.join('schemes as sc', 'st.scheme_id', 'sc.id')
.where('scheme_id', id)
.select('st.id', 'sc.scheme_name', 'st.step_number', 'st.instructions')
}

function add(scheme) {
return db('schemes')
.insert(scheme)
}

function update(changes, id) {
return db('schemes')
.where('id', id)
.update(changes)
}

function remove(id) {
return db('schemes').where('id', id).delete()
}

module.exports = {
  find,
  findById,
  findSteps,
  add,
  update,
  remove
}