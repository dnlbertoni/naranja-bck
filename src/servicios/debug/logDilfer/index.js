require('dotenv').config()

const logDilfer = (log) => {
    try {
        if (process.env.LOG_DILFER == 'true') {
            console.log(log)
        }
    } catch (error) {
        console.log("Error LogDilfer")

    }

}

module.exports = logDilfer;