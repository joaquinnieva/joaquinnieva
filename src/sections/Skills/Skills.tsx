import { useState } from 'react'
import SVGProgess from '../../components/SVGProgress/SVGProgress'
import { skillsViews } from '../../constants/skills'
import { ArrowIconDown, ArrowIconUp } from '../../img/ArrowIcon/ArrowIcon'

function Skills() {
  const [isCollapsed, colapse] = useState(false)
  return (
    <section id="skills" className="text-gray-400 body-font">
      {skillsViews.map((group: any, i: number) => (
        <div key={i}>
          <div className="container flex flex-col items-center px-5 py-24 mx-auto md:flex-row">
            <div className="w-5/6 mb-10 lg:max-w-lg lg:w-full md:w-1/2 md:mb-0">
              {group.icon}
            </div>
            <div className="flex flex-col items-center justify-center w-full">
              <h1 className="w-2/3 mb-4 text-3xl font-medium text-white title-font sm:text-4xl">
                {group.title}
              </h1>
              <p className="w-2/3 text-lg leading-relaxed">{group.text}</p>
            </div>
          </div>
          <div className="flex flex-col justify-center w-full py-10 bg-primary-900">
            <button
              className="m-auto mb-4 md:hidden"
              onClick={() => colapse(!isCollapsed)}
            >
              {!isCollapsed ? <ArrowIconUp /> : <ArrowIconDown />}
            </button>
            <div
              className={`container m-auto columns-1 md:columns-5 sm:columns-3 ${
                isCollapsed ? 'hidden' : ''
              }`}
            >
              {group.skills.map((skill: any, i: number) => (
                <div key={i} className="p-1 lg:p-4">
                  <SVGProgess
                    progress={skill.progress}
                    image={skill.image}
                    name={skill.name}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </section>
  )
}

export default Skills
