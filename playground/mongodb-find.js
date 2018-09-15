//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, db) => {
    if (error) {
      return console.log('Unable to connect');
}
console.log('connected to mongoDB server');

// db.collection('Todos').find({
//   _id: new ObjectID('5b99af1ae91f1a0d02c3b934')
// }).toArray().then((docs) => {
//   console.log('Todos');
//   console.log(JSON.stringify(docs, undefined, 2));
//
// }, (err) => {
//   console.log('Unable to fetch todos', err);
//
// });

// query all docs and count
// db.collection('Todos').find().count().then((count) => {
//   console.log(`Todos count: ${count}`);
//
// }, (err) => {
//   console.log('Unable to fetch todos', err);
//
// });

db.collection('Users').find({name:'Tenzin'}).toArray().then((docs) => {
  console.log(JSON.stringify(docs,undefined, 2));
});

});
//takes string arg of collection you want to insert

//closes mongoDB connection
//db.close();
