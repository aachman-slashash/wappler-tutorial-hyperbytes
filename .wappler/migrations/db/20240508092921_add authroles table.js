
exports.up = function(knex) {
  return knex.schema
    .createTable('authroles', async function (table) {
      table.increments('authrole_id');
      table.string('role');
      table.string('role_name');
    })

};

exports.down = function(knex) {
  return knex.schema
    .dropTable('authroles')
};
