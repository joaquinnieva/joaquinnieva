import images from "../images";
const imagen1 = images.proyecto1;
const imagen2 = images.proyecto2;
const imagen3 = images.proyecto3;
const imagen4 = images.proyecto4;
const imagen5 = images.proyecto5;


let proyectos = [
  {
    id: 1,
    name: "Portafolio",
    description: "Es este mismo proyecto 👜 , donde puedo recopilar información sobre mí y mostrar lo que hago.",
    img: imagen1,
    tecnologies: ["react", "css"],
    link: "https://joaquinnieva.github.io/joaquinnieva/",
  },
  {
    id: 2,
    name: "ecommerce",
    description: "Página comercial 🛒 , parte frontend de un e-commerce SPA que tiene slider y carrito de compras. (en proceso)",
    img: imagen2,
    tecnologies: ["react", "react-router", "redux", "css","styled-components"],
    link: "https://ecommerce-proyecto.vercel.app/",
  },
  {
    id: 3,
    name: "Done",
    description:
      "Done📑 es una app de tareas, un CRUD básico donde manejo el estado global para la creación y eliminación de tareas.",
    img: imagen3,
    tecnologies: ["react", "redux", "css"],
    link: "https://joaquinnieva.github.io/done-proyect/",
  },
  {
    id: 4,
    name: "Tech Fix",
    description: "Web informativa 💻 , una página estática para desplegar información de una marca dedicada a servicios.",
    img: imagen4,
    tecnologies: ["react", "css"],
    link: "https://joaquinnieva.github.io/techfix/",
  },
  {
    id: 5,
    name: "Hiro",
    description:
      "SPA de heroes 🐱‍🏍. Utilizo una API externa para poder llamar a los heroes, tiene un login para poder ingresar, y se puede armar un equipo de 6, validando que 3 sean buenos y 3 sean malos.     (solo inicia con datos puestos)",
    img: imagen5,
    tecnologies: ["react", "react-router", "redux", "bootstrap", "formik", "axios"],
    link: "https://hiro-app-joaquinnieva.vercel.app/",
  },
];
export default proyectos;
