var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect( 'mongodb://vaibhav4205:frnd4ever@ds117681.mlab.com:17681/mydb' || 'mongodb://localhost:27017/TodoApp');

module.exports = {mongoose};
