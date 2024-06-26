
exports.up = function(knex) {
  return knex.schema
    .createTable('page_content_comment_reactions', async function (table) {
      table.integer('comment_id').unsigned();
      table.foreign('comment_id').references('comment_id').inTable('page_content_comments').onUpdate('CASCADE').onDelete('CASCADE');
      table.string('reaction', 1);
      table.integer('user_id').unsigned();
      table.foreign('user_id').references('user_id').inTable('user');
    })

};

exports.down = function(knex) {
  return knex.schema
    .dropTable('page_content_comment_reactions')
};
