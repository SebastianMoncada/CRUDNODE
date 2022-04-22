const mysql = require('mysql');
const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    port: 3306,
    database: 'db_basico'

});

conexion.connect((err) => {
        if(err){
            console.log('Ha ocurrido un error'+err);   
        
        }else{
            console.log('Conexion exitosa');
        }
    
     });

     module.exports = conexion;