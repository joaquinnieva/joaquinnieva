import images from './images';
const image1 = images.proyecto1;
const image2 = images.proyecto2;
const image3 = images.proyecto3;
const image4 = images.proyecto4;
const image5 = images.proyecto5;
const image6 = images.proyecto6;
const image7 = images.proyecto7;
// const image8 = images.proyecto8;
const image9 = images.proyecto9;

let proyects = [
  {
    id: 9,
    name: 'Vink',
    description:
      'Sitio web personalizado a tu perfil 📄 , una app para generar un sitio web donde crear tu perfil y también centralizar links, puedes crear y compartir tu perfil con los links y tu descripción, además puedes personalizarlo a tu estilo . Desarrollado con el stack MERN.',
    img: image9,
    tecnologies: [
      'react',
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
    img: image7,
    tecnologies: ['next', 'mysql', 'recoil', 'tailwind', 'yup', 'formik', 'axios', 'next-themes'],
    repo: 'https://github.com/joaquinnieva/library-proyect',
    link: 'https://librery-app.vercel.app',
  },
  {
    id: 2,
    name: 'ecommerce',
    description:
      'Página comercial 🛒 , parte frontend de un e-commerce SPA que tiene slider y carrito de compras, usando una API (fakestoreapi) para llamar a los productos.',
    img: image2,
    tecnologies: ['react', 'react-router', 'redux-toolkit', 'css', 'axios', 'react-toastify', 'styled-components'],
    link: 'https://ecommerce-proyecto.vercel.app/',
    repo: 'https://github.com/joaquinnieva/ecommerce-proyecto',
  },
  {
    id: 4,
    name: 'Tech Fix',
    description:
      'Web informativa 💻 , una página estática para desplegar información de una marca dedicada a servicios.',
    img: image4,
    tecnologies: ['react', 'css'],
    link: 'https://joaquinnieva.github.io/techfix/',
    repo: 'https://github.com/joaquinnieva/techfix',
  },
  {
    id: 3,
    name: 'Done',
    description:
      'Done📑 es una app de tareas, un CRUD básico donde manejo el estado global para la creación y eliminación de tareas.',
    img: image3,
    tecnologies: ['react', 'redux', 'css'],
    link: 'https://joaquinnieva.github.io/done-proyect/',
    repo: 'https://github.com/joaquinnieva/done-proyect',
  },
  {
    id: 5,
    name: 'Challenge Alkemy',
    description:
      'SPA de heroes 🐱‍🏍. Utilizo una API (superheroapi) externa para poder llamar a los heroes, tiene un login para poder ingresar, y se puede armar un equipo de 6, validando que 3 sean buenos y 3 sean malos.     (solo inicia con datos puestos)',
    img: image5,
    tecnologies: ['react', 'react-router', 'redux', 'bootstrap', 'formik', 'axios'],
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
        &nbsp;🚀, es un proyecto trabajado en equipo empleando Scrum como metodología y Jira para la gestión de tareas,
        el objetivo del proyecto era crear una app gestionable para admins donde pueden crear noticias y testimonios,
        además de desplegar información de la organización.
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
    img: image6,
    tecnologies: ['react', 'react-router', 'redux-saga', 'bootstrap', 'formik', 'axios'],
    repo: 'https://github.com/alkemyTech/OT-93-Server',
  },
  {
    id: 1,
    name: 'Portafolio',
    description: 'Es este mismo proyecto 👜 , donde puedo recopilar información sobre mí y mostrar lo que hago.',
    img: image1,
    tecnologies: ['react', 'css', 'aos'],
    link: 'https://joaquinnieva.github.io/joaquinnieva/',
    repo: 'https://github.com/joaquinnieva/joaquinnieva',
  },
];
export default proyects;
