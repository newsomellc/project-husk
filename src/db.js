/** 
 * Sets up the database.
 */
'use strict';
const Knex = require('knex');

module.exports = dbconf =>
{
	let db = Knex(dbconf);
	return db;
};
