const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database:'ECommersedb'
})
connection.connect((error)=>{
    if(error) throw error;
    console.log('connected to database');
})

module.exports = connection;
