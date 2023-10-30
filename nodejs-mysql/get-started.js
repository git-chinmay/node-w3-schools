const mysql = require('mysql');

// Create a connection object
const con = mysql.createConnection({
    host : "localhost",
    username : "user",
    password : "password"
});

// Connect to mysql instance
con.connect((err)=>{
    if (err) throw err;
    console.log("Database connected.");
})

// Querying the database
sql = "your sql query"
con.connect((err)=>{
    if(err) throw err;
    console.log("Connected");
    con.query(sql, (err, result)=>{
        if(err) throw err;
        console.log(result);
    })
})

// Creating a Database
sql = "CREATE DATABASE mydb"
con.connect((err)=>{
    if(err) throw err;
    console.log("Connected");
    con.query(sql, (err, result)=>{
        if(err) throw err;
        console.log("Database created.");
    })
})


//Creating a Table
const con1 = mysql.createConnection({
    host: "localhost",
    user: "yourusername",
    password: "yourpassword",
    database: "mydb"
})

// Creating a table in databse
sql = "CREATE TABLE customers (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), address VARCHAR(255))"
con1.connect((err)=>{
    if(err) throw err;
    console.log("Connected");
    con.query(sql, (err, result)=>{
        if(err) throw err;
        console.log("Table created.");
    })
})


// INSERT into the table
sql = "INSERT INTO customers (name, address) VALUES ('Company Inc', 'Highway 37')"
con1.connect((err)=>{
    if(err) throw err;
    console.log("Connected");
    con.query(sql, (err, result)=>{
        if(err) throw err;
        console.log("1 record inserted.");
    })
})

// SELECT From
sql = "SELECT FROM customers"
con1.connect((err)=>{
    if(err) throw err;
    console.log("Connected");
    con.query(sql, (err, result, fields)=>{
        if(err) throw err;
        console.log(result);
    })
})

// The third parameter of the callback function `fields` is an array containing information about each field in the result.