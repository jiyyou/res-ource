exports.up = knex => {
  return knex.schema.createTable("postVote", table => {
    table.increments("id").primary();
    table
    	.integer("sub_id")
    	.unsigned()
    	.notNullable()
      .references("id")
      .inTable("sub")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
    table
    	.integer("user_id")
    	.unsigned()
    	.notNullable()
      .references("id")
      .inTable("user")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
    table
    	.integer("post_id")
    	.unsigned()
    	.notNullable()
      .references("id")
      .inTable("user")
      .onUpdate("CASCADE")
      .onDelete("CASCADE"); 
    table
    	.integer('upvote')
    	.unsigned()
    	.notNullable()
    	.defaultTo(0);
    table
    	.integer('downvote')
    	.unsigned()
    	.notNullable()
    	.defaultTo(0);
  });
};

exports.down = knex => {
  return knex.schema.dropTable("user");
};
