import nodemailer from 'nodemailer'

// Email de registro.

const emailRegistro = async (datos) => {
    var transport = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS
        }
    });
    // Verificamos que datos se estan pasando.
    console.log(datos)

    const { email, nombre, token } = datos
    
    // Enviar email
    await transport.sendMail({
        from: 'BienesRaices.com',
        to: email,
        subject: 'Confirma tu Cuenta en BienesRaices.com',
        text: 'Confirma tu Cuenta en BienesRaices.com',
        html: `
            <p>Hola ${nombre}, comprueba tu cuenta en bienesRaices.com</p>

            <p>Tu cuenta ya esta lista, solo debes confirmarla en el siguiente enlace:
            <a href="${process.env.BACKEND_URL}:${process.env.PORT ?? 3000}/auth/confirmar/${token}">Confirmar Cuenta</a> </p>

            </p>Si tu no creaste esta cuenta, puedes ignorar el mensaje</p>
        `
    })
    console.log("El email se ha enviado con exito")
}

// Email de Olvide Password.

const emailOlvidePassword = async (datos) => {
    var transport = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS
        }
    });
    // Verificamos que datos se estan pasando.
    console.log(datos)

    const { email, nombre, token } = datos
    
    // Enviar email
    await transport.sendMail({
        from: 'BienesRaices.com',
        to: email,
        subject: 'Restablece tu password en BienesRaices.com',
        text: 'Restablece tu password en BienesRaices.com',
        html: `
            <p>Hola ${nombre}, has solicitado tu Password en bienesRaices.com</p>

            <p>Sigue el siguiente enlace para generar un password nuevo:
            <a href="${process.env.BACKEND_URL}:${process.env.PORT ?? 3000}/auth/olvide-password/${token}">Reestablecer Password</a> </p>

            </p>Si tu no solicitaste el cambio de password, puedes ignorar el mensaje</p>
        `
    })
    console.log("El email se ha enviado con exito")
}

export {
    emailRegistro,
    emailOlvidePassword
}