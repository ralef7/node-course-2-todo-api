//const MongoClient = require('mongodb').MongoClient
const{ MongoClient, ObjectID} = require('mongodb');



//amzn webservices url or heroku url here
//dont need new db to start using
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err){
    return console.log('unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server!');

  //deleteMany
  // db.collection('Todos').deleteMany({text: 'eat lunch'}).then((result) =>{
  //   console.log(result);
  // });
  // db.collection('Users').deleteMany({name: 'Rob Alef'}).then((result) => {
  //   console.log(result);
  // });


  //deleteOne
  // db.collection('Todos').deleteOne({text: 'eat lunch'}).then((result) => {
  //   console.log(result);
  // });

  //findOneAndDelete
  // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
  //   console.log(result);
  // });
  db.collection('Users').findOneAndDelete({name: 'Mike Alef'}).then((result) => {
    console.log(result);
  });

  // db.close();
});
