import express from "express";
import { formularioLogin, formularioRegistro, formularioOlvidePassword } from "../controllers/usuario.controller.js";

const router = express.Router();

router.get('/login', formularioLogin);
router.get('/registro', formularioRegistro)
router.get('/olvide-password',formularioOlvidePassword)



export default router

// Notas:

//Creamos las rutas con router, las cuales importaremos en nuestro archivo principal index.js.

// router.get('/', function (req, res) {
//     res.json({msg: 'Hola mundo en express'})
// });

//  - Solo podemos tener una ruta, pero asignarle diferentes metodos.

//  - const router = express.Router(); Se crea la instancia de express.Router()

//  - Para agruparlas en un solo grupo de rutas.
//  router.route('/')
//         .get(function (req, res) {
//         res.json({ msg: 'Respuesta de tipo get' });
//         })
//         .post(function (req, res) {
//             res.json({msg: 'Respuesta de tipo post'})
//         })

// - "Render"(res.render('')) nos ayuda a renderizar las vistas, ya previamente indicamos con set cual seria el view engine que en este caso es pug y la carpeta en la que se encuentran "./views" lo cual tambien nos ayuda a que ya no tengamos que indicarle la carpeta ./views:

// router.get('/', function (req, res) {
//     res.render('auth/login')
// });