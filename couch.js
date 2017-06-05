#APIs here were used from http://www.dbarnes.info/node-couchdb-api/#server
#
# This code can be run where the NPME is installed.
# This queries the couch db and lists the contents of the database.
# To run this ; node couch.js
# Set the IP address of the server correctly, apparently the IP of localhost 127.0.0.1 did not work.
# so I had to set the other IP address from 'ifconfig |grep inet' to connect to the couch db.
#
# Code has to be changed to the appropriate database names, but in my case I am reading from 
# _users, _registry databases.
#
#

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
console.log ("connection to the database was successful");
console.log ("Get the databases in it. ");

server.allDbs( function (err, response) {
    console.log ("*************** Listing all the databases, should be _replicator, _users, and registry");
    console.log(response);
    console.log(err);
    console.log ("*************** Done **********");

    //  should get the databases in the couchdb.
    //[ '_replicator', '_users', 'registry' ]
    // if something went wrong, the `err` argument would provide the error that CouchDB provides

} );
//log
server.log( function (err, response) {
    console.log ("*************** Get the text of the log *************");
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
server.uuids( function (err, response) {
    console.log ("*************** Server.uuids - Lists of UUIDs ************ ");
    console.log(response);
    console.log(err);
    console.log ("*************** Done **********");
});


/********************************************************************************/
/*******************************  DATABASE , server->db(_users) *****************/
/********************************************************************************/
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

//allDocs
var docs = db.allDocs(function (err, response) {
    console.log ("*************** printing all the db.allDocs() ********");
    console.log(response);
    console.log(err);
    console.log ("*************** Done   *********************");

});

/********************************************************************************/
/***********Server-> Database-> Document  - look at db.allDocs()   **************/
/********************************************************************************/

var doc = db.doc("users");
doc.get(function (err, response) {

    console.log ("*************** info about document.get'users' ********");
    console.log(response);
    console.log(err);
    console.log ("*************** Done   *********************");

});
/********************************************************************************/
/*******************************  DATABASE , server->db(registry) ***************/
/********************************************************************************/

// select the registry database now.
var db_registry = server.db("registry");

db_registry.info(function (err, response) {
	console.log ("*************** Basic stats of server.db('registry') database **************");
	console.log(response);
	console.log(err);
	console.log ("*************** DONE *********************");

});
/********************************************************************************/
/*********************  DATABASE , server->db(registry)->docs() *****************/
/********************************************************************************/

//allDocs of db(registry)
var docs_registry = db_registry.allDocs(function (err, response) {
    console.log ("*************** printing all the db_registry.allDocs() ********");
    console.log(response);
    console.log(err);
    console.log ("*************** Done   *********************");

});

var doc_registry =  docs_registry.doc("aaa")
doc_registry.show ('ddoc',  function (err, response) {
    console.log ("*************** doc_registry - show of aaa ********");
    console.log(response);
    console.log(err);
    console.log ("*************** Done   *********************");

});

