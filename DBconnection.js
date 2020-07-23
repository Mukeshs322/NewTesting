
//var Region= req.body.Region;



exports.dbConnection = function () {
    
    var dbConfig = {
        user: 'mukesh',
    password: 'test',
    server:'abcd', // You can use 'localhost\\instance' to connect to named instance
    // port:1433,
    database: 'pqr',
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
    return dbConfig;



};