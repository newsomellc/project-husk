/** 
 * Sets up the web server
 */ 
'use strict';
const Server = require('http').Server;

module.exports = (app, port) =>
{
	if (!port) port = 3000;

	let srvr = Server(app);

	srvr.listen(port);

	srvr.on('listening', () =>
	{
		console.log(`Server running at http://localhost:${port}/`);
	});

	return srvr;
};
