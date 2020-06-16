exports.up = knex => {
  return knex.schema.table("post", table => {
    table
      .integer("sub_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("sub")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
  });
};

exports.down = knex => {
  return knex.schema.table("post", table => {
  	table.dropColumn('sub_id')
  });
};