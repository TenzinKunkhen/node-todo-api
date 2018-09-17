var mongoose = require('mongoose');

//set up promises for mongoose
mongoose.Promise = global.Promise;
//mongoose constantly waiting for connection
mongoose.connect('mongodb://localhost:27017/TodoApp');

module.exports = {mongoose};
