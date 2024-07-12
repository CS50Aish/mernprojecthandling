const mysql = require("mysql");

// Create database connection
const db = mysql.createConnection({
    host: "localhost",
    user: "aish",
    password: "pass",
    database: "students"
});

// Connect to the database
db.connect((err) => {
    if(err){
        throw err;
    }
    console.log("MySql Connected");
})