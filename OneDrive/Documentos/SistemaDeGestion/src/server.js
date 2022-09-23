import express from 'express';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackConfig from '../webpack.config';
import connection from '../src/back/database/db'
//import login from '../src/front/componentes/login'

const mysql = require('mysql')

let conexion = mysql.createConnection({
    host: 'localhost',
    database: 'prueba_proyecto',
    user: 'root',
    password: ''
});

conexion.connect(function(error){
    if(error){
        throw error;
    }else{
        console.log('conexion exitosa')
    }
});
// conexion.query('SELECT * from usuarios', function(error, results, fields){
//     if(error)
//     throw error;

//     results.forEach(results => {
//         console.log(results);
        
//     });
// })
conexion.end();
//packages
const app = express();

//configuracion
app.set('port', process.env.PORT || 8000);

//middelewares
//app.use(webpackDevMiddleware(webpack(webpackConfig)))

//const connection = require('../src/back/database/db');

//routes
//  app.get('/', (req, res)=>{
//      res.render('login')
//  })

// app.get('/api', (req, res)=>{
//     res.json({api:'hola'});
// });


 app.get('/', (req, res)=>{
     res.send('index.js')
})
app.listen(app.get('port'), () =>{
    console.log('server on port', app.get('port'));
});