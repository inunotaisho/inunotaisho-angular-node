require('dotenv').config({ silent: true});

class Configs {
    host = process.env.HOST;
    port = 587;
    user = process.env.FROM_EMAIL;
    password = process.env.PASS;
    databaseUri = process.env.DATABASE_URI || "mongodb://localhost:27017/inunotaisho";
}

export default new Configs;