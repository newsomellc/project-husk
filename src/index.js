/** 
 * Main entrypoint for the program.  Reads the conf, sets up the modules, runs the server.
 */
'use strict';
let app    = require('./app')();
let server = require('./server')(app, 3000);
