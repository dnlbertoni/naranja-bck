const dbora = require('../dbora/index');
const config = require('config');

const dummy = async (req, res, next) => {

    var aplicationName = config.get('app.name');
    var version = config.get('app.version');
    var dateRelease = config.get('app.dateRelease');
    var ambiente = config.get('app.ambiente');

    const jsonResponse = {
        "Aplicacion": aplicationName,
        "Version": version,
        "FechaRelease": dateRelease,
        "DataBase": await dummyMysql(),
        "Ambiente": ambiente
    }
    res.json(jsonResponse);

}

const dbmy = require('../dbmy/index')

const dummyMysql = async () => {

    try {
        const query = `select 1+1 as suma from dual`
        const rows = await dbmy.query(query);
        if (rows[0][0].suma == 2) {
            return '100%'
        } else {
            return false
        }

    } catch (err) {
        console.log(err);
        return false;
    }
}

module.exports = dummyMysql;




module.exports = dummy;