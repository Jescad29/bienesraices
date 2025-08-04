**Bienes Raices** es una aplicación web de bienes raíces construida con **Node.js** y **Express.js**. Permite publicar, buscar y gestionar propiedades de forma fácil y rápida, brindando una experiencia intuitiva tanto para agentes inmobiliarios como para compradores.

---

## 🚀 Características principales

- Publicación de propiedades con imágenes, descripciones y ubicación.
- Buscador con filtros por tipo, precio, ubicación, etc.
- Panel de administración para agentes inmobiliarios.
- Formulario de contacto para consultas.
- Diseño responsive con Bootstrap.

---

## 🧰 Tecnologías utilizadas

- **Node.js**
- **Express.js**
- **MongoDB** (o MySQL)
- **EJS** (motor de plantillas)
- **Axios** (para peticiones del cliente)
- **Bootstrap**, HTML5, CSS3, JavaScript

---

## 📁 Estructura del proyecto

```bash

bienesraices/
├── index.js                                     # Arranca el servidor
├── routes/
│   ├── usuario.routes.js
│   ├── 
│   ├── 
│   └── 
├── controllers/
│   ├── usuario.controller.js
│   ├── 
│   ├── 
│   └── 
├── models/
│   ├── Usuario.js
│   ├── 
│   └── 
├── middleware/
│   ├── 
│   ├── 
│   └── 
├── views/                      
│   ├── autch/
│   │   ├── login.pug
│   │   ├── olvide-password.pug
│   │   └── registro.pug
│   └── layout/
│       └── index.pug
├── public/
│   ├── css/
│   │   ├── app.css
│   │   └── tailwind.css
│   ├── img/
│   │   ├── 
│   │   └── 
│   ├── js/
│   │   ├── 
│   │   └── 
│   ├── 
│   └── 
├── .env
├── .gitignore
├── postcss.config.js
├── tailwind.config.js
├── package-lock.json
├── package.json
└── README.md
```

---
## ⚙️ Tecnologías usadas

- Node.js
- Express.js
- Nodemon
- Tailwind
- Pug
- MySQL
- Sequelize

## funcionalidades realizadas hasta el momento 🐱‍🏍
- Login
- Registro
- Olvide Password

## 🛠️ Instalación

1. Clona el repositorio

```bash
git clone https://github.com/Jescad29/bienesraices
cd bienesraices
```

2. Instala las dependencias:

```
npm install
```

3. Inicia el servidor.

```
npm start

```

```
npm run server

```

4. Abre en tu navegador.

```
http://localhost:3000/auth/login

```
