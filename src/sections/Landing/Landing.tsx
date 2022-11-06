import { Link } from 'react-scroll'
import IconLanding from '../../components/IconLanding/IconLanding'
import {
  LANDING_BUTTON,
  LANDING_TEXT,
  LANDING_TITLE1,
  LANDING_TITLE2
} from '../../constants/constants'
import images from '../../constants/images'

function Landing() {
  return (
    <section id="home" className="h-screen pt-20 text-gray-400 body-font">
      <div className="container flex flex-col-reverse items-center justify-around px-5 py-8 mx-auto lg:py-24 md:flex-row">
        <div className="flex flex-col my-12 text-center ">
          <h1 className="text-2xl font-medium text-white text-start title-font sm:text-2xl">
            {LANDING_TITLE1}
          </h1>
          <h1 className="mb-1 text-2xl font-medium text-white title-font text-start sm:text-2xl">
            {LANDING_TITLE2}
          </h1>
          <p className="mb-8 text-start">{LANDING_TEXT}</p>
          <div className="flex justify-start">
            <Link
              className="inline-flex px-6 py-2 text-lg text-white border border-gray-500 rounded cursor-pointer hover:border-gray-600 bg-primary-700 focus:outline-none hover:bg-primary-800"
              activeClass="active"
              to="skills"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              {LANDING_BUTTON}
            </Link>
          </div>
        </div>
        <div className="w-5/6 lg:max-w-lg lg:w-full md:w-1/2">
          <IconLanding />
        </div>
      </div>
      <img
        className="absolute bottom-0 hidden w-4 m-4 right-1/2 scroll md:block"
        src={images.flecha}
        alt=""
      />
      <img
        className="absolute bottom-0 hidden w-4 m-4 my-6 right-1/2 scroll md:block"
        src={images.flecha}
        alt=""
      />
    </section>
  )
}

export default Landing
