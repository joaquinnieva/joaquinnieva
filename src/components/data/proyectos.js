import images from '../images';
const imagen1 = images.proyecto1;
const imagen2 = images.proyecto2;
const imagen3 = images.proyecto3;
const imagen4 = images.proyecto4;
const imagen5 = images.proyecto5;
const imagen6 = images.proyecto6;
const imagen7 = images.proyecto7;

let proyectos = [
  {
    id: 1,
    name: 'Portafolio',
    description: 'Es este mismo proyecto 👜 , donde puedo recopilar información sobre mí y mostrar lo que hago.',
    img: imagen1,
    tecnologies: ['react', 'css'],
    link: 'https://joaquinnieva.github.io/joaquinnieva/',
    repo: 'https://github.com/joaquinnieva/joaquinnieva',
  },
  {
    id: 2,
    name: 'ecommerce',
    description: 'Página comercial 🛒 , parte frontend de un e-commerce SPA que tiene slider y carrito de compras. (En desarrollo)',
    img: imagen2,
    tecnologies: ['react', 'react-router', 'redux', 'css', 'styled-components'],
    link: 'https://ecommerce-proyecto.vercel.app/',
    repo: 'https://github.com/joaquinnieva/ecommerce-proyecto',
  },
  {
    id: 3,
    name: 'Done',
    description: 'Done📑 es una app de tareas, un CRUD básico donde manejo el estado global para la creación y eliminación de tareas.',
    img: imagen3,
    tecnologies: ['react', 'redux', 'css'],
    link: 'https://joaquinnieva.github.io/done-proyect/',
    repo: 'https://github.com/joaquinnieva/done-proyect',
  },
  {
    id: 4,
    name: 'Tech Fix',
    description: 'Web informativa 💻 , una página estática para desplegar información de una marca dedicada a servicios.',
    img: imagen4,
    tecnologies: ['react', 'css'],
    link: 'https://joaquinnieva.github.io/techfix/',
    repo: 'https://github.com/joaquinnieva/techfix',
  },
  {
    id: 5,
    name: 'Hiro',
    description:
      'SPA de heroes 🐱‍🏍. Utilizo una API externa para poder llamar a los heroes, tiene un login para poder ingresar, y se puede armar un equipo de 6, validando que 3 sean buenos y 3 sean malos.     (solo inicia con datos puestos)',
    img: imagen5,
    tecnologies: ['react', 'react-router', 'redux', 'bootstrap', 'formik', 'axios'],
    link: 'https://hiro-app-joaquinnieva.vercel.app/',
    repo: 'https://github.com/joaquinnieva/hiro-app',
  },
  {
    id: 6,
    name: 'Somos Más',
    description: (
      <p>
        SPA creada en la aceleracion de&nbsp;
        <a href="https://www.alkemy.org/" target="_blank" rel="noreferrer">
          Alkemy
        </a>
        &nbsp;🚀, es un proyecto trabajado en equipo empleando Scrum como metodología y Jira para la gestión de tareas, el objetivo del
        proyecto era crear una app gestionable para admins donde pueden crear noticias y testimonios, además de desplegar información de la
        organización.
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
    img: imagen6,
    tecnologies: ['react', 'react-router', 'redux-saga', 'bootstrap', 'formik', 'axios'],
    repo: 'https://github.com/alkemyTech/OT-93-Server',
  },
  {
    id: 7,
    name: 'Top Helper',
    description:
      'App para ayudar a jugadores de Top Eleven⚽, tiene registro de usuarios con apartado de perfil y foro para preguntas o aportes. (En desarrollo)',
    img: imagen7,
    tecnologies: ['react', 'react-router', 'redux-toolkit', 'bootstrap', 'formik', 'firebase'],
    repo: 'https://github.com/joaquinnieva/top-helper',
  },
];
export default proyectos;
