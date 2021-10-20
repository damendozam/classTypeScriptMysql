import express from 'express';
import bodyParser from "body-parser";
import { createConnection } from 'mysql2';

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

interface Table {
    item:number;
    data1:string;
};

const conn = createConnection({
    host: 'be9rg9gbkctprbw0xwwg-mysql.services.clever-cloud.com',
    user: 'u1koj7e84ixrashv',
    password: 'EUT7hFk7RcCfDwHmbRE7'
}); 
app.get('/', function(req, res) {
    conn.connect();
    conn.query("use be9rg9gbkctprbw0xwwg;")
    res.end("Bienvenido");
});

app.post('/consulta', function(req, res) {
    let var1:string=req.body.data1;
    conn.query(`SELECT * FROM Students WHERE name1 = '${var1}';`, function (error, results:Table[], fields) {
        if (error) throw error;
        console.log(results);
    });
    res.end();
});

app.post('/insertion', function(req, res) {
    conn.query("use be9rg9gbkctprbw0xwwg;")
    conn.query(`INSERT INTO Students (idStudents,name1,name2,lastName1,lastName2,carrer,faculty)
	                    VALUES (0,'Diego','Andrés','Mendoza','Mora','Mechatronic','Psicology');`, function (error, results:Table[], fields) {
        if (error) throw error;
        console.log(results);
    });
    res.end();
});



app.listen(3000);  

 