const Mysql = require('mysql2/promise');

const dbmy = Mysql.createPool({
    // host: process.env.DB_MYSQL_HOST,
    // user: process.env.DB_MYSQL_USER,
    // password: process.env.DB_MYSQL_PASSWORD,
    // database: process.env.DB_MYSQL_DATABASE,
    host: 'mysql',
    user: 'user',
    password: 'dilferbk*-',
    database: 'DBCLIENT',
    waitForConnections: true,
    connectionLimit: 100,
    queueLimit: 0
});

// host: 'localhost',
// user: 'user',
// password: 'dilferbk*-',
// database: 'DBCLIENT',

// DB_MYSQL_HOST='localhost'
// DB_MYSQL_USER='user'
// DB_MYSQL_PASSWORD='dilferbk*-'
// DB_MYSQL_DATABASE='DBCLIENT'

module.exports = dbmy;
