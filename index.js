import express from 'express';
import csrf from 'csurf';
import cookieParser from 'cookie-parser';
import usuarioRoutes from './routes/usuario.routes.js'
import db from './config/db.js';

// Crear la app
const app = express();

// Habilitar lectura de datos de formularios.
app.use(express.urlencoded({ extended: true }))

// Habilitar Cookie Parser
app.use(cookieParser())

// CSRF
app.use( csrf({cookie: true}))

// Conexion a la base de datos 
try {
    await db.authenticate(); 
    db.sync()
    console.log('Conexión Correcta a la Base de datos')
} catch (error) {
    console.log('Error en la conexion a la base de datos')
}

// Habilitar vistas
app.set('view engine', 'pug');
app.set('views', './views');

// Carpeta Pública
app.use(express.static('public'));

// Routing
app.use('/auth', usuarioRoutes);


const port = process.env.port || 3000;
app.listen(port, () => {
    console.log(`El servidor esta funcionando en el puerto ${port}`)
});
 
// Notas:

// import express from 'express';
// import usuarioRoutes from './routes/usuario.routes.js'

// const app = express();

// Indica que queremos utilizar pug como view engine y que carpeta es la de views (En donde vamos a utilizar nuestras vistas)
// ('set' es para la configuración)
// app.set('view engine', 'pug');
// app.set('views', './views');

//  Routing (use es para las vistas.)
// app.use('/auth', usuarioRoutes)

// Definir un proyecto y arrancar el proyecto
// const port = 3000;
// app.listen(port, () => {
//     console.log(`El servidor esta funcionando en el puerto ${port}`)
// });


