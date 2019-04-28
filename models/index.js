let mongoose = require('mongoose');
mongoose.set('debug', true);
mongoose.connect('mongodb://localhost/sample-api');

mongoose.Promise = Promise;  //allows to use promise on mongoose

module.exports.Info = require('./information');