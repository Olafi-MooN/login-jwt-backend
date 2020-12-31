
exports.up = function(knex) {
    return knex.schema
    .createTable('users', function (table) {
       table.increments('id');
       table.string('first_name', 255).notNullable();
       table.string('userName', 255).notNullable();
       table.string('password', 255).notNullable();
    })
};

exports.down = function(knex) {
  knex.dropTable("users");
};
