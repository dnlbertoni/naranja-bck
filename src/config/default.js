require('dotenv').config();


/*
    Mac, Linux: NODE_ENV=production node /bin/wwww
    Windows: set NODE_ENV=production node /bin/wwww

*/

module.exports = {
    //App
    server: {
        port: process.env.APP_PORT,
        domain: process.env.APP_DOMAIN,
        path: process.env.APP_NAME || ''
    },

    //Data Base
    mySql: {
        host: process.env.HOST,
        port: process.env.PORT,
        user: process.env.USER,
        password: process.env.PASSWORD,
        dataBase: process.env.DATABASE
    },
    //variables de entorno para dummy
    app: {
        name: process.env.APP_NAME || 'N/D',
        version: process.env.APP_VERSION || '0.0',
        dateRelease: process.env.APP_RELEASE || 'N/D',
        ambiente: process.env.APP_ENTORNO || 'HOMOLOGACION'
    },
 
    logger: 'dev',
}
