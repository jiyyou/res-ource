
exports.up = knex => {
  return knex.schema.createTable("subscription", table => {
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
  });
};

exports.down = knex => {
  return knex.schema.dropTable("subscription");
};
