const oracledb = require('oracledb');
require('dotenv').config()
const logTimeDb = require('../debug/logTimeDb');

cns = {
    user: process.env.DB_ORACLE_USER,
    password: process.env.DB_ORACLE_PASSWORD,
    connectString: process.env.DB_ORACLE_HOST + "/" + process.env.DB_ORACLE_INSTANCE
}

async function Open(sql, binds, autoCommit) {
    var start = new Date();

    let cnn = await oracledb.getConnection(cns);
    let result = await cnn.execute(sql, binds, { outFormat: oracledb.OUT_FORMAT_OBJECT, autoCommit });
    cnn.release();

    var end = new Date() - start;
    logTimeDb(sql, end)
    return result;
}

exports.Open = Open;

exports.STRING = oracledb.STRING;
exports.NUMBER = oracledb.NUMBER;
exports.BIND_INOUT = oracledb.BIND_INOUT;
exports.BIND_OUT = oracledb.BIND_OUT;
exports.OUT_FORMAT_OBJECT = oracledb.OUT_FORMAT_OBJECT