/** 
 * Sets up the web server
 */ 
'use strict';
const Server = require('http').Server;

module.exports = (app, port) =>
{
	if (!port) port = 3000;
	const PORT = process.env.PORT || 3000

	let srvr = Server(app);

	srvr.listen(PORT);

	srvr.on('listening', () =>
	{
		console.log(`Server listening on ${PORT}`);
	});

	return srvr;
};
