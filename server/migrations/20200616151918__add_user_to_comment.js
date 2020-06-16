exports.up = knex => {
  return knex.schema.table("comment", table => {
    table
      .integer("user_id")
      .unsigned()
      .references("id")
      .inTable("user")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
  });
};

exports.down = knex => {
  return knex.schema.table("comment", table => {
  	table.dropColumn('user_id')
  });
};