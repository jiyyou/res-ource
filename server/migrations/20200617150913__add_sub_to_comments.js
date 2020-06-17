exports.up = knex => {
  return knex.schema.table("comment", table => {
    table
      .integer("sub_id")
      .unsigned()
      .references("id")
      .inTable("sub")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
  });
};

exports.down = knex => {
  return knex.schema.table("comment", table => {
  	table.dropColumn('sub_id')
  });
};