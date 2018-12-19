const knex = require('knex')({
  client: 'pg',
  connection: {
    user: 'development',
    password: 'development',
    database: 'test_db',
    host: 'localhost',
    port: 5432,
    ssl: true
  }
});

knex('famous_people').insert({first_name: process.argv[2],
  last_name: process.argv[3], birthdate: process.argv[4]})
  .returning('id')