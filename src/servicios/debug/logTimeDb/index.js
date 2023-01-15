require('dotenv').config()
//Independiente de LogDilfer
const logTimeDb = (sql, end) => {
    try {
        if (process.env.LOG_TIME_DB == 'true') {
            console.table([`${sql.toString().replace('\n', '')}`, `time: ${end}ms`])
        }
    } catch (error) {
        console.log("Error logTimeDb")
        console.log(error)

    }

}

module.exports = logTimeDb;