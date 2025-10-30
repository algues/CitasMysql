import express, { json } from 'express';
import cors from 'cors';
import mysql from 'mysql';

const app = express();

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "consult"
});
db.connect(err =>{
    if(err){
        console.log("Error connecting to the database", err);
        return;
    }else{console.log("Successful connection to the database");}
});

app.get("/", async(req, res) =>{
    res.json("Hello this is the Backend");
});

app.get("/pacientes", async(req, res) =>{
    const result = "SELECT * FROM pacientes";
    db.query(result, (error, data) =>{
        if(error) return res.json(err)
        return res,json(data) 
    })
});

app.get("/pacientes/:pacIdentificacion", (req,res)=>{
    const pacienteId = req.params.pacIdentificacion;
    const result = "SELECT * FROM pacientes WHERE pacIdentificacion = ?";
    db.query(result, [pacienteId], (error, data)=>{
        if(error) return res.json(error)
        return res.json(data)
    })
});

app.put("/pacientes/:pacIdentificacion", (req,res) =>{
    const pacienteId = req.params.pacIdentificacion;
    const result = "UPDATE pacientes SET pacIdentificacion = ?, pacApellidos = ?, pacNombres = ?, pacFechaNacimiento = ?, pacTelefono = ?, PacSexo = ? WHERE pacIdentificacion = ?";
    const values = [
        req.body.pacIdentificacion, 
        req.body.pacApellidos,
        req.body.pacNombres,
        req.body.pacFechaNacimiento,
        req.body.pacTelefono,
        req.body.PacSexo
    ];

    db.query(result, [...values, pacienteId], (err, data)=>{
        if(err) return res.json(err);
        return res.json("Patient has been update successfully");
    });
});

app.post("/pacientes", async(req, res)=>{
    const result = "INSERT INTO pacientes(pacIdentificacion, pacApellidos, pacNombres, pacFechaNacimiento, pacTelefono, pacSexo) VALUES(?)";
    const values = [
        req.body.pacIdentificacion,
        req.body.pacApellidos,
        req.body.pacNombres,
        req.body.pacFechaNacimiento,
        req.body.pacTelefono,
        req.body.pacSexo
    ];

    db.query(result, [values], (error) =>{
        if(error) return res.json(error);
        return res.json("Patient has been created successfully");
    });
});

app.delete("/pacientes/:pacIdentificacion", (req,res) =>{
    const pacienteId = req.params.pacIdentificacion;
    const result = "DELETE FROM pacientes WHERE pacIdentificacion = ?";
    db.query(result, [pacienteId], (err, data)=>{
        if(err) return res.json(err);
        return res.json("Patient has been deleted successfully");
    });
});


app.post("/login", (req,res)=>{
    const result = "SELECT * FROM usuarios WHERE user = ? AND password = ?";    
    db.query(result, [req.body.user, req.body.password], (error, data)=>{
        if(error) return res.json("error");
        if(data.length > 0) {
           return res.json("Success")
      }else {
           return res.json("Failed")
      }
    })
});

app.listen(8800, () =>{
    console.log("Connected to Backend");
});

