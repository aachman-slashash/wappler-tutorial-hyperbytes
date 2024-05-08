
exports.up = function(knex) {
  return knex.schema
    .createTable('page_content_images', async function (table) {
      table.increments('Image_id');
      table.integer('page_content_id').unsigned();
      table.foreign('page_content_id').references('page_content_id').inTable('page_content').onUpdate('CASCADE').onDelete('CASCADE');
      table.string('image_url');
      table.integer('creator_id');
    })
    .createTable('page_content_comments', async function (table) {
      table.increments('comment_id');
      table.integer('page_content_id').unsigned();
      table.foreign('page_content_id').references('page_content_id').inTable('page_content').onUpdate('CASCADE').onDelete('CASCADE');
      table.text('comment');
      table.datetime('date_created');
      table.integer('user_id');
      table.boolean('authorised');
    })

};

exports.down = function(knex) {
  return knex.schema
    .dropTable('page_content_comments')
    .dropTable('page_content_images')
};
