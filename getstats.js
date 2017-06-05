
registry = require('npm-stats')(["https://npm-registry.whitewater.ibm.com/", "downloads"])
// this lists everything package that is in the registry .
// registry.list().on('data', (chunk) => {  console.log(chunk); });

//#registry = require('npm-stats')(["https://registry.npmjs.com/", ""])

//registry.user("bcoe").list().on('data', (chunk) => {  console.log(chunk); });


// list by date - I cant get the since date working - maybe it is the format !
//registry.listByDate( "since 01-01-2017").on('data', (chunk) => {  console.log(chunk); });

// count of modules by user
registry.user("bcoe").count().on('data', (chunk) => {  console.log(chunk); });

//  list modules by this user.
//registry.user("shkiran4").list().on('data', (chunk) => {  console.log(chunk); });

console.log ("list all modules by keyword npm");
registry.keyword('npm').list().on('data', (chunk) => {  console.log(chunk); });

// Get the version of the module

//console.log ("getting the version");
//registry.module('somedir').version("").on('data', ( chunk) => {  console.log(chunk); });

