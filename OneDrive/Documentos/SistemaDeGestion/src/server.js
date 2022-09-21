import express from 'express';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackConfig from '../webpack.config';
//packages
const app = express();

//configuracion
app.set('port', process.env.PORT || 8000);

//middelewares
app.use(webpackDevMiddleware(webpack(webpackConfig)))

//routes
app.get('/', (req, res) => {
    res.send('hola mundo');
});

app.get('/api', (req, res)=>{
    res.json({api:'hola'});
});

app.listen(app.get('port'), () =>{
    console.log('server on port', app.get('port'));
});