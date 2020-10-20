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

}

function update(changes, id) {

}

function remove(id) {

}

module.exports = {
  find,
  findById,
  findSteps,
}