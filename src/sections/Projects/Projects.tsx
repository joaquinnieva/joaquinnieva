import { useState } from 'react'
import ProyectCard from '../../components/ProyectCard/ProyectCard'
import proyects from '../../constants/proyectsInfo'

function Projects() {
  const [isCollapsed, collapse] = useState(true)
  return (
    <section id="projects" className="text-gray-400 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col flex-wrap w-full mb-20">
          <div className="w-full mb-6 lg:w-1/3 lg:mb-0">
            <h1 className="mb-2 text-3xl font-medium text-white sm:text-4xl title-font">
              Proyectos
            </h1>
          </div>
          <p className="w-full leading-relaxed text-opacity-90">
            Este es mi portfolio de proyectos personales, algunos son simples,
            de solo desarrollo fontend con los que fui aprendiendo y otros con
            mas complejidad donde fui practicando, empleando backend con algunas
            tecnologias con las que me capacité.
          </p>
        </div>
        <div
          className={`flex flex-wrap -m-4 overflow-hidden relative pb-12  ${
            isCollapsed ? 'h-proyects' : `h-100`
          }`}
        >
          {proyects.map((proyect: any, i: number) => (
            <div key={i} className="p-4 xl:w-1/3 md:w-1/2">
              <ProyectCard proyect={proyect} />
            </div>
          ))}
          <div className="absolute bottom-0 w-full h-20 bg-gradient-to-t from-primary-800"></div>
        </div>
        <div className="flex justify-center w-100">
          <button
            onClick={() => collapse(!isCollapsed)}
            className="inline-flex px-4 py-2 mt-8 text-lg text-white border border-gray-500 rounded bg-primary-700 focus:outline-none hover:border-gray-600 hover:bg-primary-800"
          >
            {isCollapsed ? 'Ver más' : 'Ver menos'}
          </button>
        </div>
      </div>
    </section>
  )
}

export default Projects
