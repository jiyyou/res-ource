
exports.up = knex => {
  return knex.schema.createTable("post", table => {
    table.increments("id").primary();
    table.string("title").notNullable();
    table.string("content");
    table
    	.integer("upvote")
    	.unsigned()
    	.notNullable()
    	.defaultTo(0);
    table
    	.integer("downvote")
    	.notNullable()
    	.defaultTo(0);
    table.timestamp("updated_at").defaultTo(knex.fn.now());
  });
};

exports.down = knex => {
  return knex.schema.dropTable("post");
};
