//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, db) => {
    if (error) {
      return console.log('Unable to connect');
}
console.log('connected to mongoDB server');


db.collection('Todos').insertOne({
  text: 'Something todo',
  completed: false
}, (err, result) => {
  if(err) {
    return console.log('fucked up');
  } else {
    console.log('successfully added');
  }
});
//takes string arg of collection you want to insert

//closes mongoDB connection
//db.close();

});
