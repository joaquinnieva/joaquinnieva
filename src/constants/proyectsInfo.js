import images from './images'

const {
  trady,
  vink,
  librery,
  apmin,
  alkemy,
  done,
  ecommerce,
  techfix,
  myportfolio,
  hiro,
} = images

let proyects = [
  {
    id: 11,
    name: 'Trady',
    description:
      'Tienda online 📊, es una app para generar tu tienda online, ideal para emprendimientos que no tienen web y quieren ademas de tener su web poder tomar pedidos desde whatsapp, el repo es privado.',
    img: trady,
    tecnologies: [
      'next',
      'typescript',
      'tailwind',
      'axios',
      'mongodb',
      'mongoose',
      'jwt',
    ],
    link: 'https://my-trady.vercel.app/',
  },
  {
    id: 9,
    name: 'Vink',
    description:
      'Perfil personalizado 📄, una app para generar un sitio web donde muestras tu perfil y también tus links centralizados, puedes crear y compartir tu perfil con los links y tu descripción, además puedes personalizarlo a tu gusto. Desarrollado con el stack MERN.',
    img: vink,
    tecnologies: [
      'react',
      'typescript',
      'react-router',
      'redux-toolkit',
      'tailwind',
      'formik',
      'axios',
      'node',
      'express',
      'mongodb',
      'mongoose',
      'jwt',
    ],
    repo: 'https://github.com/joaquinnieva/vink',
    link: 'https://vink.vercel.app',
  },
  {
    id: 7,
    name: 'Librery',
    description:
      'Aplicación basada en PDFs de forma foro o red social📚, se puede compartir PDFs y después un admin lo ordena en una librería por categorías . (En desarrollo)',
    img: librery,
    tecnologies: [
      'next',
      'typescript',
      'mysql',
      'recoil',
      'tailwind',
      'yup',
      'formik',
      'axios',
      'next-themes',
    ],
    repo: 'https://github.com/joaquinnieva/library-proyect',
    link: 'https://librery-app.vercel.app',
  },
  {
    id: 10,
    name: 'apmin',
    description:
      'Aplicación de envíos 📦 , SPA de envíos funcional y facil de usar, se pueden crear envíos y ver su estado ademas de editarlos. (En desarrollo)',
    img: apmin,
    tecnologies: [
      'angular',
      'typescript',
      'tailwind',
      'node',
      'express',
      'postgressql',
      'sequelize',
      'jwt',
    ],
    link: 'https://apmin.vercel.app',
    repo: 'https://github.com/joaquinnieva/apmin',
  },
  {
    id: 2,
    name: 'ecommerce',
    description:
      'Página comercial 🛒 , parte frontend de un e-commerce SPA que tiene slider y carrito de compras, usando una API (fakestoreapi) para llamar a los productos.',
    img: ecommerce,
    tecnologies: [
      'react',
      'react-router',
      'redux-toolkit',
      'css',
      'axios',
      'react-toastify',
      'styled-components',
    ],
    link: 'https://ecommerce-proyecto.vercel.app/',
    repo: 'https://github.com/joaquinnieva/ecommerce-proyecto',
  },
  {
    id: 4,
    name: 'Tech Fix',
    description:
      'Web informativa 💻 , una página estática para desplegar información de una marca dedicada a servicios.',
    img: techfix,
    tecnologies: ['react', 'css'],
    link: 'https://joaquinnieva.github.io/techfix/',
    repo: 'https://github.com/joaquinnieva/techfix',
  },
  {
    id: 3,
    name: 'Done',
    description:
      'Done📑 es una app de tareas, un CRUD básico donde manejo el estado global para la creación y eliminación de tareas.',
    img: done,
    tecnologies: ['react', 'redux', 'css'],
    link: 'https://joaquinnieva.github.io/done-proyect/',
    repo: 'https://github.com/joaquinnieva/done-proyect',
  },
  {
    id: 5,
    name: 'Challenge Alkemy',
    description:
      'SPA de heroes 🐱‍🏍. Utilizo una API (superheroapi) externa para poder llamar a los heroes, tiene un login para poder ingresar, y se puede armar un equipo de 6, validando que 3 sean buenos y 3 sean malos.     (solo inicia con datos puestos)',
    img: hiro,
    tecnologies: [
      'react',
      'react-router',
      'redux',
      'bootstrap',
      'formik',
      'axios',
    ],
    link: 'https://hiro-app-joaquinnieva.vercel.app/',
    repo: 'https://github.com/joaquinnieva/hiro-app',
  },
  {
    id: 6,
    name: 'Aceleración Alkemy',
    description: (
      <p>
        SPA creada en la aceleracion de&nbsp;
        <a href="https://www.alkemy.org/" target="_blank" rel="noreferrer">
          Alkemy
        </a>
        &nbsp;🚀, es un proyecto trabajado en equipo empleando Scrum como
        metodología y Jira para la gestión de tareas, el objetivo del proyecto
        era crear una app gestionable para admins donde pueden crear noticias y
        testimonios, además de desplegar información de la organización.
        <br />
        <a
          href="https://assets.alkemy.org/certificates/google-oauth2%7C103446983264709365963/c52cdefa-e4dc-4c63-91dc-2c7f73b2562e.pdf"
          target="_blank"
          rel="noreferrer"
        >
          Certificado
        </a>
        .
      </p>
    ),
    img: alkemy,
    tecnologies: [
      'react',
      'react-router',
      'redux-saga',
      'bootstrap',
      'formik',
      'axios',
    ],
    repo: 'https://github.com/alkemyTech/OT-93-Server',
  },
  {
    id: 1,
    name: 'Portafolio',
    description:
      'Es este mismo proyecto 👜 , donde puedo recopilar información sobre mí y mostrar lo que hago.',
    img: myportfolio,
    tecnologies: ['react', 'css', 'aos'],
    link: 'https://joaquinnieva.github.io/joaquinnieva/',
    repo: 'https://github.com/joaquinnieva/joaquinnieva',
  },
]
export default proyects
