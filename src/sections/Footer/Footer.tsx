import { useState } from 'react'
import images from '../../constants/images'
import GithubIcon from '../../img/GithubIcon/GithubIcon'
import LinkedinIcon from '../../img/LinkedinIcon/LinkedinIcon'
import MailIcon from '../../img/MailIcon/MailIcon'

function Footer() {
  const [buttonClicked, clickButton] = useState('')
  const handleCopy = () => {
    navigator.clipboard.writeText('joacoo.nieva@gmail.com')
    clickButton('Mail copiado!')
    setTimeout((): void => {
      clickButton('')
    }, 3000)
  }
  return (
    <footer
      id="contact"
      className="mt-12 text-gray-400 border-t border-gray-700 body-font bg-primary-900"
    >
      <div className="container flex flex-col items-center px-5 py-8 mx-auto sm:flex-row">
        <a
          href="https://github.com/joaquinnieva"
          className="flex items-center justify-center p-3 font-medium text-white border rounded-full border-secondary/25 title-font md:justify-start"
        >
          <img className="w-4" src={images.jn} alt="jn" />
        </a>
        <p className="mt-4 text-sm text-gray-400 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-primary-700 sm:py-2 sm:mt-0">
          © 2023 Copyright
        </p>
        <span className="inline-flex justify-center mt-4 sm:ml-auto sm:mt-0 sm:justify-start">
          <div className="flex">
            <div className="btn-gmail" title="Copiar mail">
              <div
                className={`p-1 rounded tooltip-mail ${
                  buttonClicked ? 'tooltip-gmail-show' : ''
                }`}
              >
                {buttonClicked}
              </div>

              <button
                type="button"
                className="m-2 transition duration-200 ease-in-out hover:-translate-y-1"
                onClick={handleCopy}
              >
                <MailIcon />
              </button>
            </div>
            <a
              className="m-2 transition duration-200 ease-in-out hover:-translate-y-1"
              href="https://www.linkedin.com/in/joaquinnieva/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedinIcon />
            </a>
            <a
              className="m-2 transition duration-200 ease-in-out hover:-translate-y-1"
              href="https://github.com/joaquinnieva"
              target="_blank"
              rel="noreferrer"
            >
              <GithubIcon />
            </a>
          </div>
        </span>
      </div>
    </footer>
  )
}

export default Footer
