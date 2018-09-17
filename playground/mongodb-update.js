//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, db) => {
    if (error) {
      return console.log('Unable to connect');
}
console.log('connected to mongoDB server');


db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5b99af1ae91f1a0d02c3b935')
  },{
    $set: {
      name: 'Tenzin'
    },
    $inc: {
      age: 1
    }
  },  {
      returnOriginal: false
    }).then((result) => {
      console.log(result);
    });

});
