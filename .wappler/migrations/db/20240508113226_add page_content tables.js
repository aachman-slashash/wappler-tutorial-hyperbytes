
exports.up = function(knex) {
  return knex.schema
    .createTable('page_content', async function (table) {
      table.increments('page_content_id');
      table.string('title');
      table.text('description');
      table.boolean('online');
      table.datetime('date_created');
      table.datetime('date_modified');
      table.string('event_start');
      table.decimal('lat');
      table.decimal('lng');
      table.boolean('geo');
    })

};

exports.down = function(knex) {
  return knex.schema
    .dropTable('page_content')
};
