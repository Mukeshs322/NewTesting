exports.dbConnection1 = function () {
    var dbConfig1 = {
        user: 'abcd',
    password: 'pass',
    server: 'test', // You can use 'localhost\\instance' to connect to named instance
    // port:1433,
    database: 'testing',
    pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 500000
    },
    options: {
        encrypt: false, // Use this if you're on Windows Azure
        tdsVersion: "7_1"
      }
    };
    return dbConfig1;
};