//const MongoClient = require('mongodb').MongoClient
const{ MongoClient, ObjectID} = require('mongodb');


//amzn webservices url or heroku url here
//dont need new db to start using
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err){
    return console.log('unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server!');

  // db.collection('Todos').insertOne({
  //   text:"something to do",
  //   completed: false
  // }, (err, result) => {
  //   if(err) {
  //     return console.log('Unable to insert todo', err);
  //   }
  //
  //   console.log(JSON.stringify(result.ops, undefined,2))
  // }) insert  Users{name, age, location}
  // db.collection('Users').insertOne({
  //   name: "Rob Alef",
  //   age: 31,
  //   location: 'Chicago'
  // }, (err, result) => {
  //   if(err){
  //     return console.log('unable to insert user', err);
  //   }
  //   console.log(result.ops[0]._id.getTimestamp());
  // })
  db.close();
});
