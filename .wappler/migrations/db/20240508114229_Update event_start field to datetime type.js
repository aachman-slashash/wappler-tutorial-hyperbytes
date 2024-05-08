
exports.up = function(knex) {
  return knex.schema
    .table('page_content', async function (table) {
      table.datetime('event_start').alter();
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('page_content', async function (table) {
      table.string('event_start', 255).alter();
    })
};
