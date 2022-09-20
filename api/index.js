const mysql = require('mysql2');
const express = require('express');
const bodyParser = require('body-parser');
const cred = require('./credentials');
const cors = require('cors');
const app = express();
const port = 3001;
var con = mysql.createConnection({
    port: 3306,
    host: 'localhost',
    user: cred.user,
    password: cred.pass,
    database: cred.dbname
});
   
con.connect();

app.use(bodyParser.json()).use(cors());

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

app.get("/", (req, res) => {
    res.send("hello");
});

app.get("/locations", (req, res) => {
    con.promise().query('SELECT * FROM locations')
        .then(([rows, fields]) => {
            console.log(rows);
            res.json(rows);
        });
});

app.post("/locations/add", (req, res) => {
    console.log(req.body);
    con.promise().query(`INSERT INTO locations (name, building, admin_rating, gender) 
        VALUES (${JSON.stringify(req.body.name)}, ${JSON.stringify(req.body.building)}, ${req.body.admin_rating}, ${JSON.stringify(req.body.gender)})`);
    res.status(201).json("done");
});

app.delete("/locations/delete/:id", (req, res) => {
    console.log(req.params.id);
    con.promise().query(`DELETE FROM locations WHERE id=${req.body.id}`);
    res.status(201).json("done");
});

app.put("/locations/update/:id", (req, res) => {
    console.log(req.params.id);
    con.promise().query(`UPDATE locations SET name=${JSON.stringify(req.body.name)}, building=${JSON.stringify(req.body.building)}, admin_rating=${req.body.admin_rating}, gender=${JSON.stringify(req.body.gender)} WHERE id=${req.params.id}`);
    res.status(201).json("done");
});

con.query('SELECT * FROM locations', (error, results, fields) => {
    console.log(results);
});