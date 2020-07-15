require('dotenv').config();
const { JAWSDB_URL } = process.env;

module.exports = {
	development: {
	  client: "mysql",
	  connection: {
	    host: "127.0.0.1",
	    user: "root",
	    password: "rootroot",
	    database: "RES_ource",
	    charset: "utf8"
	  }
	},
	production: {
		client: 'mysql',
		connection: process.env.JAWSDB_URL,
		migrations: {
			directory: __dirname + '/migrations'
		},
		seeds: {
			directory: __dirname + '/seeds'
		}
	}
};
