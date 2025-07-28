import express from 'express';
import usuarioRoutes from './routes/usuario.routes.js'

const app = express();


app.set('view engine', 'pug');
app.set('views', './views');


app.use('/auth', usuarioRoutes);


const port = 3000;
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


