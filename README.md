# npmstats

https://pages.github.ibm.com/Whitewater/NPM-Tools-Operation/runbooks/npmstats.html for more details.

The couch.js reads data stored in the couch databases ( that is being used by the NPM registry in the backend )
Here, I have listed the interface and results by querying the NPM registry databases.

The NPMEnterprise application is installed in 

     # ls -pl /usr/local/lib/npme/couchdb/
     total 168
     -rw-r--r-- 1 ubuntu docker 135272 Jun  3 15:10 registry.couch
     -rwxrwx--- 1 ubuntu docker   4194 Apr 13 11:13 _replicator.couch
     -rwxrwx--- 1 ubuntu docker  20578 Apr 13 11:15 _users.couch



Attaching to the server using 127.0.0.1 did not work - so I had to get the Network interfaces by running the ifconfig |grep inet.
and got the 172.xx.xx.xx network interface.

The architecture that helped me in deciphering the database was

<img width="1233" alt="screen shot 2017-06-05 at 12 19 10 pm" src="https://cloud.githubusercontent.com/assets/14288989/26773518/3f144e9c-49e9-11e7-9a23-dc6e659cc32c.png">

So, I worked my way from getting the list of all Databases ( i.e registry, _replicator.couch and _users.couch ) and reading thru them.

    server.allDbs( function (err, response) {

The APIs are well documented in [API](http://www.dbarnes.info/node-couchdb-api/#server)
