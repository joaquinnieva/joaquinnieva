import { useState } from 'react'
import { Link } from 'react-scroll'
import images from '../../constants/images'
import navigation from '../../constants/navigation'

function Navbar() {
  const [isCollapse, collapse] = useState(false)
  return (
    <header className="fixed top-0 z-10 w-screen text-gray-400 bg-primary-900/95 body-font backdrop-blur-xl">
      <div className="container flex flex-row flex-wrap items-center justify-between p-3 mx-auto lg:justify-center">
        <img className="w-12" src={images.jn} alt="jn" />
        <div className="md:hidden">
          <button
            onClick={() => collapse(!isCollapse)}
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg hover:bg-primary-800"
          >
            <Menu />
          </button>
        </div>

        <nav className="flex-wrap items-center justify-center hidden text-base md:flex md:ml-auto md:mr-auto">
          {navigation.map((link: any, i: number) => (
            <Link
              key={i}
              className="mr-2 cursor-pointer hover:text-white md:p-2"
              to={link.hash}
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              {link.name}
            </Link>
          ))}
        </nav>
        <img
          className="w-12 invisible md:block hidden"
          src={images.jn}
          alt="jn"
        />
      </div>
      <div
        className={`w-full md:hidden md:w-auto ${
          isCollapse ? 'block' : 'hidden'
        }`}
      >
        <ul className="flex flex-col px-4 pb-5">
          {navigation.map((link: any, i: number) => (
            <Link
              key={i}
              className="p-2 cursor-pointer hover:text-white md:mr-5"
              to={link.hash}
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              {link.name}
            </Link>
          ))}
        </ul>
      </div>
    </header>
  )
}

export default Navbar

function Menu() {
  return (
    <svg
      className="w-6 h-6"
      aria-hidden="true"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
        clipRule="evenodd"
      ></path>
    </svg>
  )
}
