const mysql = require('mysql')

const databaseConnection=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'dummyticketdatabase'
})

module.exports= databaseConnection;