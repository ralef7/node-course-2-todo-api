//const MongoClient = require('mongodb').MongoClient
const{ MongoClient, ObjectID} = require('mongodb');



//amzn webservices url or heroku url here
//dont need new db to start using
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err){
    return console.log('unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server!');

  db.collection('Users').find({name: 'Rob Alef'}).toArray().then((docs) => {
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log('unable to fetch todos', err);
  });

  // db.close();
});
