import {check, validationResult } from 'express-validator'
import Usuario from "../models/Usuario.js"
import { generarId } from '../helpers/tokens.js'
import { emailRegistro } from '../helpers/email.js'


const formularioLogin = (req, res) => {
    res.render('auth/login', {
        pagina: 'Iniciar Sesión'
    })
}

const formularioRegistro = (req, res) => {
    res.render('auth/registro', {
        pagina: 'Crear Cuenta'
    })
}

const registrar = async (req, res) => {
    // Validación
    await check('nombre').notEmpty().withMessage('El nombre es obligatorio').run(req)
    await check('email').notEmpty().withMessage('El correo es obligatorio').isEmail().withMessage('Eso no parece un email').run(req)
    await check('password').isLength({ min: 6 }).withMessage('El Password debe ser de al menos 6 caracteres').run(req)
    await check('repetir_password').custom((value, { req }) => value === req.body.password).withMessage('Los password no son iguales').run(req)
    
    let resultado = validationResult(req)

    // return res.json(resultado.array())

    // Verificar que el resultado este vacio
    if (!resultado.isEmpty()) {
        // Errores
        return res.render('auth/registro', {
            pagina: 'Crear Cuenta',
            errores: resultado.array(),
            usuario: {
                nombre: req.body.nombre,
                email: req.body.email
            }
        })
    }

    //Extraer los datos
    const {nombre, email, password} = req.body

    // Verficar que el usuario no este duplicado
    const existeUsuario = await Usuario.findOne({ where: { email } })

    if(existeUsuario) {
        return res.render('auth/registro', {
            pagina: 'Crear Cuenta',
            errores: [{msg:'El Usuario ya esta Registrado'}],
            usuario: {
                nombre: req.body.nombre,
                email: req.body.email
            }
        })
    }
    
    console.log(existeUsuario)

    // const usuario = await Usuario.create(req.body)
    // res.json(usuario)

    // Almacenar un usuario
    const usuario = await Usuario.create({
        nombre,
        email,
        password,
        token: generarId()
    })

    // Envia email de confirmaición

    emailRegistro({
        nombre: usuario.nombre,
        email: usuario.email,
        token: usuario.token
    })

    // Mostrar mensaje de confirmación

    res.render('templates/mensaje', {
        pagina: 'Cuenta Creada Correctamente',
        mensaje: 'Hemos Enviado un Email de confirmación, presiona en el enlace'
    })
};

// Función que comprueba una cuenta.
const confirmar = (req, res, next) => {
    const { token } = req.params;
    console.log(req.params.token)
    next();
}

const formularioOlvidePassword = (req, res) => {
    res.render('auth/olvide-password', {
        pagina: 'Recupera tu acceso a Bienes Raices'
    })
}


export {
    formularioLogin,
    formularioRegistro,
    formularioOlvidePassword,
    confirmar,  
    registrar
}




// Notas:
//  - Las funciones que se crean en el controlador se utilizaran importandolas en routes
//  - Hay dos maneras de exportarlas con export default formularioLogin, pero solo puedes tener un solo export default por archivo.
//  - La segunda es utilizando export {...} nombrados aquí si se pueden meter multiples funciones.
//      export {
//          formularioLogin,
//          formularioLoginTwho,
//          formularioLogin...
//      }
