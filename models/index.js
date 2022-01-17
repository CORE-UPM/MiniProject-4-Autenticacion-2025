const path = require("path");

// Load ORM
const Sequelize = require('sequelize');

// The DATABASE_CONFIG_PATH environment variable contains the PATH of the data base configuration file.
// It is needed by autocorector.

const config_file = process.env.DATABASE_CONFIG_PATH || path.resolve(path.join(__dirname, '..', 'config', 'config.json'));
const config = require(config_file);

const sequelize = new Sequelize(config);

const User = require('./user')(sequelize);

module.exports = sequelize;
