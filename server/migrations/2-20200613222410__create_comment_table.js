exports.up = knex => {
  return knex.schema.createTable("comment", table => {
    table.increments("id").primary();
    table.string("comment").notNullable();
    table
      .integer("post_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("post")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
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
  return knex.schema.dropTable("comment");
};
