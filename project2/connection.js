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

    // SQL Query to create a student table in the students database
    let createStdTable = `CREATE TABLE IF NOT EXISTS student(
        id int primary key auto_increment,
        name varchar(255) not null,
        email varchar(255) not null,
        phone varchar(255),
        address varchar(255)
    )`;

    // SQL Query to Insert Data in student table in the students database
    let insertStdTable = `INSERT INTO student(name, email, phone, address) values('John', 'john@gmail.com', '+123456789', '123 Wolf Street')`;

    // SQL Query to get datafrom student table from the student database
    let selectStdTable = `SELECT * FROM student`;

    // SQL Query to modify the data in the student table in the students database
    let updateStdTable = `UPDATE student SET NAME='John Smith', email='john.smith@gmail.com' where id=1`;

    // SQL Query to get datafrom student table from the student database
    let modStdTable = `SELECT * FROM student`;

    // SQL Query to delete data from student table from the students database
    let deleteStdTable = `DELETE from student where id=1`;

    // SQL Query to get datafrom student table from the student database
    let StdTable = `SELECT * FROM student`;

    // Use db.query instead of dbConnection.query
    db.query(StdTable, (error, result) => {
        if(error){
            throw error;
        }
        console.log(">>> Result", result);
    });
});
