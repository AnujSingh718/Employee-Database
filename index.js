const express = require('express');
const app= express()
const mysql2 = require('mysql2')
const cors = require('cors');

app.use(cors()); 
app.use(express.json());


const db = mysql2.createConnection({
    user:'root',
    host: 'localhost',
    password: '1234',
    database: 'employeesystem',
    insecureAuth : true
});
app.post('/create',(req,res)=>{
    const name = req.body.name;
    const age = req.body.age;
    const country = req.body.country;
    const position = req.body.position;
    const ctc = req.body.ctc;

    db.query("INSERT INTO employees(name, age, country, position, ctc) VALUES(?,?,?,?,?)",
    [name, age, country, position, ctc],
    (err,result)=>{
        if (err)
        {
            console.log(err); 
        }
        else
        {
            res.send("Values Inserted");
        }
       }
    );
});

app.get("/employees", (req, res) => {
    db.query("SELECT * FROM employees", (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  });

app.listen(3001, ()=>{
    console.log("listening on port 3001");
});