import ExperienceCard from '../../components/ExperienceCard'
import { Experiences } from '../../constants/experienceInfo'

function Experience() {
  return (
    <section id="experience" className="text-gray-400 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col flex-wrap w-full mb-20">
          <div className="w-full mb-6 lg:w-1/3 lg:mb-0">
            <h1 className="mb-2 text-3xl font-medium text-white sm:text-4xl title-font">
              Experiencia
            </h1>
          </div>
          <p className="w-full text-lg leading-relaxed text-opacity-90">
            Actualmente cuento con 2 tramos de mi carrera profesional, al
            principio pasé por una pasantía donde me certifiqué como jobready, y
            el siguiente es mi puesto actual donde trabajo con un contrato de
            jornada completa.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          {Experiences.map((data, i) => (
            <ExperienceCard key={i} data={data} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
