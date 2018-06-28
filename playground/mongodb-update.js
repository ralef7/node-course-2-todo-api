//const MongoClient = require('mongodb').MongoClient
const{ MongoClient, ObjectID} = require('mongodb');



//amzn webservices url or heroku url here
//dont need new db to start using
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err){
    return console.log('unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server!');

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('5b301ae5c2ccdbb91a980e8a')
  // }, {
  //   $set:{
  //     completed: true
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result);
  // });

  //increment age, and change name to your name
  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5b2efc8bc3bae24570ac6a44')
  }, {
    $set:{
      name: 'Robert Alef'
    },
    $inc: {
      age: 1
    }
  }, {
      returnOriginal: false
    }).then((result) => {
    console.log(result);
  });


  // db.close();
});
