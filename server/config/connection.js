const mongoose = require('mongoose');

// Replace <db_name> with the name of your database, ex: 'userdb'
mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/userDb');

module.exports = mongoose.connection;
