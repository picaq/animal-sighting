const Pool = require("pg").Pool;

const pool = new Pool({
    user: "***",
    password: "***",
    port: 5432,
    database: "animals"
});

module.exports = pool;