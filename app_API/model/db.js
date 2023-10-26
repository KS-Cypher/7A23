var mongoose = require('mongoose');
require('dotenv').config();
const PORT = process.env.PORT || 3000;
var loc = require('./location');
var gracefulShutdown;
const dbURI = 'mongodb://0.0.0.0:27017/';
if(process.env.NODE_ENV === 'production') {
    dbURI = process.env.MONGOD_URI;
}
mongoose.connect(dbURI);
mongoose.connection.on('connected',function(){
    console.log('Mongoose connected to'+dbURI);
});
mongoose.connection.on('error', function (err) {
    console.log('Mongoose connection error: ' + err);
});
mongoose.connection.on('disconnected', function () {
    console.log('Mongoose disconnected');
});