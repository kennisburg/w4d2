const pg = require('pg');

const client = new pg.Client({
  user: 'development',
  password: 'development',
  database: 'test_db',
  host: 'localhost',
  port: 5432,
  ssl: true
})

const firstName = process.argv[2];
// const lastName = process.argv[3];

// client.connect((err) => {
//   console.log('connected')
//   if (err) {
//     return console.log('error', err);
//   }  

//   let query = 'SELECT * FROM famous_people WHERE first_name = $1 or last_name = $2'
//   let values = [firstName, lastName]

//   client.query(query, values, (err, result) => {
//     if (err) {
//       return console.log('query error', err);
//     }
//     console.log(result.rows);
//     client.end();
//   })

//})



// const knex = require('knex')({
//   client: 'pg',
// })


var knex = require('knex')({
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

//A. Method where we directly talk to the Database with the help
// // of Client
// client.connect((err) => {
//   if (err) {
//     console.log('connection error', err)
//   }

//   let query = 'SELECT * FROM famous_people'
//   //let values = [firstName, lastName]
//   client.query(query,null, (err, result) => {
//     if (err) {
//       console.log('query error', err)
//     }
//     console.log("We got some results :",result.rows);
//     client.end();
//   })

// })


//B. Where we talk to the Database with the help of ORM called "KNEX"

console.log("NOW RUNNING THROUGH KNEX");
knex.select("*").from("famous_people")
.then(function (people) {
    people.forEach(function(value){
      console.log(value);
    });
  }).catch(function(err) {
    // All the error can be checked in this piece of code
    console.log(err);
  }).finally(function() {
    // To close the connection pool
    console.log("we are in the finally block");
    knex.destroy();
  });
