const firebaseConfig = require('./dbConfig');
const firebase =  require('firebase');
var configObj = {

    apiKey:firebaseConfig.apiKey,
    authDomain:firebaseConfig.authDomain,
    databaseURL:firebaseConfig.databaseURL,
    storageBucket:firebaseConfig.storageBucket

  };
  
firebase.initializeApp(configObj)

var database = firebase.database();

module.exports = database;