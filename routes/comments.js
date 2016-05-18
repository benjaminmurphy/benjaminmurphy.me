"use strict";

let client = require('mongodb').MongoClient;
let connection = "mongodb://127.0.0.1:27017/benjaminmurphy";

var promise = client.connect(connection);

promise.then(function(connection) {
    return connection.collection("foo").insert({a: 1});
}).then(function(res) {
    return console.log("Succeeded", res);
}).catch(function(err) {
    return console.log("Failed", err);
});;

