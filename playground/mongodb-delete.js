//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, db) => {
    if (error) {
      return console.log('Unable to connect');
}
console.log('connected to mongoDB server');

//deleteMany : you know
// db.collection('Todos').deleteMany({text: 'walk the dog'}).then((result) => {
//   console.log(result);
//
// });
//deleteOne : self explanatory
// db.collection('Todos').deleteOne({text: 'Something todo'}).then((result) => {
//   console.log(result);
// });

// db.collection('Users').deleteMany({name: 'Tenzin'}).then((result) => {
//   console.log(result);
// });
//findOneAndDelete : deletes an individual item and returns those items

db.collection('Users').findOneAndDelete({name: 'Andrew'}).then((result) => {
  console.log(result);
});
//closes mongoDB connection
//db.close();
});
