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

app.get("/pacientes1/:pacIdentificacion", (req, res)=>{    
    const { pacIdentificacion } = req.params;    
       
        db.query('SELECT * FROM pacientes WHERE pacIdentificacion = ?', [pacIdentificacion], (err, results) => {
            if (err) {
                console.error('Error en la Consulta:', err);
                return res.status(500).json({ error: 'Error en el Servidor' });
            }    
            if (results.length === 0) {
                return res.status(404).json({ error: 'Unregistered patient' });
            }    
            res.json(results[0]); 
        });
    
});

app.get("/medicos/:medIdentificacion", (req, res)=>{    
    const { medIdentificacion } = req.params;    
        
        db.query('SELECT * FROM medicos WHERE medIdentificacion = ?', [medIdentificacion], (err, results) => {
            if (err) {
                console.error('Error en la Consulta:', err);
                return res.status(500).json({ error: 'Error en el Servidor' });
            }    
            if (results.length === 0) {
                return res.status(404).json({ error: 'Unregistered Doctor' });
            }    
            res.json(results[0]); 
        });
    
});

app.get("/consultorios/:numero", (req, res)=>{    
    const { numero } = req.params;    
        
        db.query('SELECT * FROM consultorios WHERE conNumero = ?', [numero], (err, results) => {
            if (err) {
                console.error('Error en la Consulta:', err);
                return res.status(500).json({ error: 'Error en el Servidor' });
            }    
            if (results.length === 0) {
                return res.status(404).json({ error: 'Unregistered Office' });
            }    
            res.json(results[0]); 
        });
    
});


app.get("/citas/:numero", (req, res)=>{    
    const { numero } = req.params;    
        
        db.query('SELECT * FROM citas10 WHERE citaNumero = ?', [numero], (err, results) => {
            if (err) {
                console.error('Error en la Consulta:', err);
                return res.status(500).json({ error: 'Error en el Servidor' });
            }    
            if (results.length === 0) {
                return res.status(404).json({ error: 'Cita no registrada' });
            }    
            res.json(results[0]); 
        });
    
});

app.put("/pacientes/:pacIdentificacion", (req, res) =>{
    const pacienteId = req.params.pacIdentificacion;
    const result = "UPDATE pacientes SET pacIdentificacion = ?, pacApellidos = ?, pacNombres = ?, pacFechaNacimiento = ?, pacTelefono = ?, PacSexo = ? WHERE pacIdentificacion = ?";
    const values = [
        req.body.pacIdentificacion, 
        req.body.pacApellidos,
        req.body.pacNombres,
        req.body.pacFechaNacimiento,
        req.body.pacTelefono,
        req.body.pacSexo
    ];

    db.query(result, [...values, pacienteId], (err, data)=>{
        if(err) return res.json(err);
        return res.json("Success");
    });
});

app.put("/medicos/:Identificacion", (req, res) =>{
    const medicoId = req.params.Identificacion;
    const result = "UPDATE medicos SET medIdentificacion = ?, medApellidos = ?, medNombres = ?, medTelefono = ?, medEspecialidad = ? WHERE medIdentificacion = ?";
    const values = [
        req.body.medIdentificacion, 
        req.body.medApellidos,
        req.body.medNombres,        
        req.body.medTelefono,
        req.body.medEspecialidad
    ];

    db.query(result, [...values, medicoId], (err, data)=>{
        if(err) return res.json(err);
        return res.json("Success");
    });
});

app.put("/consultorios/:numero", (req, res) =>{
    const consultorioId = req.params.numero;
    const result = "UPDATE consultorios SET conNombre = ? WHERE conNumero = ?";
    const values = [
        req.body.conNombre        
    ];

    db.query(result, [...values, consultorioId], (err, data)=>{
        if(err) return res.json(err);
        return res.json("Success");
    });
});

app.put("/citas/:numero", (req,res) =>{
    const citaId = req.params.numero;
    const result = "UPDATE citas10 SET citaFecha = ?, citaHora = ?, citaPaciente = ?, citaMedico = ?, citaConsultorio = ?, citaEstado = ?, citaObservaciones = ? WHERE citaNumero = ?";
    const values = [
        req.body.citaFecha,
        req.body.citaHora,
        req.body.citaPaciente,
        req.body.citaMedico,
        req.body.citaConsultorio,
        req.body.citaEstado,
        req.body.citaObservaciones               
    ];

    db.query(result, [...values, citaId], (err,data)=>{
        if(err) return res.json(err);
        return res.json("Success");
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
        return res.json("Success");
    });
});

app.post("/medicos", (req,res) =>{
    const result = "INSERT INTO medicos(medIdentificacion, medNombres, medApellidos, medTelefono, medEspecialidad) VALUES(?)";
    const values = [
        req.body.medIdentificacion,
        req.body.medNombres,
        req.body.medApellidos,
        req.body.medTelefono,
        req.body.medEspecialidad       
    ];

    db.query(result, [values], (error) =>{
        if(error) return res.json(error);
        return res.json("Success");
    });
});

app.delete("/pacientes/:pacIdentificacion", (req,res) =>{
    const pacienteId = req.params.pacIdentificacion;
    const result = "DELETE FROM pacientes WHERE pacIdentificacion = ?";
    db.query(result, [pacienteId], (err, data)=>{
        if(err) return res.json(err);
        return res.json("Success");
    });
});

app.delete("/medicos/:Identificacion", (req,res) =>{
    const medicoId = req.params.Identificacion;
    const result = "DELETE FROM medicos WHERE medIdentificacion = ?";
    db.query(result, [medicoId], (err, data)=>{
        if(err) return res.json(err);
        return res.json("Success");
    });
});

app.delete("/consultorios/:numero", (req,res) =>{
    const consultorioId = req.params.numero;
    const result = "DELETE FROM consultorios WHERE conNumero = ?";
    db.query(result, [consultorioId], (err, data)=>{
        if(err) return res.json(err);
        return res.json("Success");
    });
});

app.delete("/citas/:numero", (req,res) =>{
    const citaId = req.params.numero;
    const result = "DELETE FROM citas10 WHERE citaNumero = ?";

    db.query(result, [citaId], (err, data)=>{
        if(err) return res.json(err);
        return res.json("Success");
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

app.post("/consultorios", (req,res) =>{
    const result = "INSERT INTO consultorios(ConNombre) VALUES(?)";
    const values = [
        req.body.ConNombre               
    ];

    db.query(result, [values], (error) =>{
        if(error) return res.json(error);
        return res.json("Success");
    });
});

app.post("/citas", (req,res) =>{
    const result = "INSERT INTO citas10(citaFecha, citaHora, citaPaciente, citaMedico, citaConsultorio, citaEstado, citaObservaciones) VALUES(?)";
    const values = [
        req.body.citaFecha,
        req.body.citaHora,
        req.body.citaPaciente,
        req.body.citaMedico,
        req.body.citaConsultorio,
        req.body.citaEstado,
        req.body.citaObservaciones              
    ];

    db.query(result, [values], (error) =>{
        if(error) return res.json(error);
        return res.json("Success");
    });
});

app.listen(8800, () =>{
    console.log("Connected to Backend");
});

