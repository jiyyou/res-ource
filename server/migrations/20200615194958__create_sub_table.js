exports.up = knex => {
  return knex.schema.createTable("sub", table => {
    table.increments("id").primary();
    table.string("name").notNullable();
    table.string("description");
    table
    	.integer('memberCount')
    	.notNullable()
    	.unsigned()
    	.defaultTo(0);
    table.timestamp("updated_at").defaultTo(knex.fn.now());
  });
};

exports.down = knex => {
  return knex.schema.dropTable("sub");
};
