
exports.up = function(knex) {
  return knex.schema
    .table('page_content_images', async function (table) {
      table.integer('order').defaultTo(0);
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('page_content_images', async function (table) {
      table.dropColumn('order');
    })
};
