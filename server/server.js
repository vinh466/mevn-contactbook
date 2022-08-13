const app = require('./app')
const config = require('./app/config');
const MongoDB = require('./app/utils/mongodb.util');

const PORT = config.app.port;

async function startServer() {
    try {
        await MongoDB.connect(config.db.uri)
        console.log('Connect to database server  !!');
        app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}/`))

    } catch (error) {
        console.log(`Cann't connect to database server !!\n`, error);
        process.exit();
    }
}

startServer()