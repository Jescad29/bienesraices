
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

const formularioOlvidePassword = (req, res) => {
    res.render('auth/olvide-password', {
        pagina: 'Recupera tu acceso a Bienes Raices'
    })
}


export {
    formularioLogin,
    formularioRegistro,
    formularioOlvidePassword
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
