const express = require('express');
const { Client } = require('pg');

const app = express();
var client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: '',
    password: '263263-Trmtrm',
    port: 5432
})

//progreSQLとの接続が成功したか確認
client.connect((err) => {
    if (err) {
      console.log('error connecting: ' + err.stack);
      return;
    }
    console.log('success');
  });



app.get('/', (req, res) => {
    res.render('top.ejs');
});




let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}
app.listen(port);