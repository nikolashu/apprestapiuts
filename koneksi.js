var mysql = require('mysql');

//buat komeksi database
const conn = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'db_bengkel'
});

conn.connect((err)=>{
    if (err) throw err;
    console.log('Mysql Terkoneksi');
})

module.exports = conn;