// http://www.dbarnes.info/node-couchdb-api/#server
// https://www.npmjs.com/package/couchdb-api
//
//
//
var couchdb = require("couchdb-api");

// connect to a couchdb server (defaults to http://localhost:5984)
var server = couchdb.srv("http://172.17.0.1:5984");

// test it out!
server.info(function (err, response) {
    console.log ("*************** Connected to couch, should see Welcome, version etc etc ******");
    console.log(response);
    console.log(err);
    console.log ("*************** Done  *****");

    // should get { couchdb: "Welcome", version: "1.0.1" }
    // if something went wrong, the `err` argument would provide the error that CouchDB provides

});
// this is good.
console.log ("connected");
console.log ("Get the databases in it ");

server.allDbs( function (err, response) {
    console.log ("*************** Listing all the databses, should be _replicator, _users. and registry");
    console.log(response);
    console.log(err);
    console.log ("*************** Done **********");

    //  should get the databases in the couchdb.
    //[ '_replicator', '_users', 'registry' ]
    // if something went wrong, the `err` argument would provide the error that CouchDB provides

} );
//log
server.log( function (err, response) {
    console.log ("*************** aGet the text of the log *************");
    console.log(response);
    console.log(err);
    console.log ("*************** Done **********");
});

//stats
server.stats( function (err, response) {
    console.log ("*************** Server.stats - Server running stats  ************ ");
    console.log(response);
    console.log(err);
    console.log ("*************** Done **********");
});

//uuids
server.stats( function (err, response) {
    console.log ("*************** Server.uuids - Lists of UUIDs ************ ");
    console.log(response);
    console.log(err);
    console.log ("*************** Done **********");
});




// select a database, i.e either _replicator, _users. or registry.
var db = server.db("_users");

db.info(function (err, response) {
    console.log ("*************** Basic stats of  _users database **************");
    console.log(response);
    console.log(err);
    console.log ("*************** DONE *********************");

         // should see the basic statistics for your test database
         // if you chose a non-existant db, you'd get { error: "not_found", reason: "no_db_file" } in place of `err`
});

// select the registry database now.
var db = server.db("registry");

db.info(function (err, response) {
    console.log ("*************** Basic stats of  registry database **************");
    console.log(response);
    console.log(err);
    console.log ("*************** DONE *********************");

});


console.log ("print all docs");
var docs = db.allDocs(function (err, response) {
    console.log ("*************** printing all the db.allDocs() ********");
    console.log(response);
    console.log(err);
    console.log ("*************** Done   *********************");

});

/*
# node couch.js 
connected
connected to a db
{ couchdb: 'Welcome',
  uuid: '19fb64f5ead46e2f67355775ba34fcbe',
  version: '1.6.1',
  vendor: { version: '1.6.1', name: 'The Apache Software Foundation' } }
null
{ db_name: '_users',
  doc_count: 2,
  doc_del_count: 0,
  update_seq: 3,
  purge_seq: 0,
  compact_running: false,
  disk_size: 20578,
  data_size: 8340,
  instance_start_time: '1492082093673416',
  disk_format_version: 6,
  committed_update_seq: 3 }
*/

