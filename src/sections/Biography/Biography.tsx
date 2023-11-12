import { BIO_BUTTON, BIO_DESCRIPTION } from '../../constants/constants'
import ProfileIcon from '../../img/ProfileIcon/ProfileIcon'

const cvFile = require('../../img/JoaquínNievaCV.pdf')

function Biography() {
  return (
    <section id="about" className="py-24 font-medium text-secondary body-font">
      <div className="container flex items-center px-5 py-12 mx-auto ">
        <div className="flex flex-col items-center px-5 py-12 mx-auto border border-gray-500 rounded-md bg-primary-500 md:flex-row">
          <div className="w-auto p-12 lg:w-auto">
            <ProfileIcon />
          </div>
          <div className="flex flex-col items-center text-center lg:flex-grow md:w-1/2 md:items-start md:text-left">
            <p className="mb-8 text-xl leading-relaxed">{BIO_DESCRIPTION}</p>
            <div className="flex justify-center">
              <a
                className="inline-flex px-6 py-2 text-lg text-gray-200 border border-gray-500 rounded bg-primary-500/10 focus:outline-none hover:border-gray-600 hover:bg-primary-500/20"
                href={cvFile}
                download="Joaquín Nieva CV.pdf"
              >
                {BIO_BUTTON}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Biography
