exports.up = knex => {
  return knex.schema.createTable("user", table => {
    table.increments("id").primary();
    table.string("fName").notNullable();
    table.string("lName").notNullable();
    table.string("linkedInId").notNullable();
    table.string("description");
    table.timestamp("updated_at").defaultTo(knex.fn.now());
  });
};

exports.down = knex => {
  return knex.schema.dropTable("user");
};
