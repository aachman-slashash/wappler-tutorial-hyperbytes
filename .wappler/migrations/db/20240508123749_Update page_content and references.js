
exports.up = function(knex) {
  return knex.schema
    .table('page_content', async function (table) {
      table.string('page_type', 1);
      table.datetime('event_end');
      table.integer('creator_id').unsigned();
      table.foreign('creator_id').references('user_id').inTable('user');
      table.integer('last_editor_id').unsigned();
      table.foreign('last_editor_id').references('user_id').inTable('user');
    })
    .table('page_content_images', async function (table) {
      table.integer('creator_id').alter().unsigned();
      table.foreign('creator_id').references('user_id').inTable('user');
    })
    .table('page_content_comments', async function (table) {
      table.integer('user_id').alter().unsigned();
      table.foreign('user_id').references('user_id').inTable('user');
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('page_content_comments', async function (table) {
      await table.dropForeign('user_id');
      table.integer('user_id').alter();
    })
    .table('page_content_images', async function (table) {
      await table.dropForeign('creator_id');
      table.integer('creator_id').alter();
    })
    .table('page_content', async function (table) {
      table.dropColumn('page_type');
      table.dropColumn('event_end');
      table.dropForeign('creator_id');
      table.dropColumn('creator_id');
      table.dropForeign('last_editor_id');
      table.dropColumn('last_editor_id');
    })
};
