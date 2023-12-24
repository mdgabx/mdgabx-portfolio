import { Link, NavLink } from "react-router-dom"
import wdbsaLogo from "../../assets/images/wdbsaLogo.png"
import { useState } from "react"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faHome, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons'
// import { faGithub, faLinkedin, faSkype } from '@fortawesome/free-brands-svg-icons'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const onChangeOpen = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="flex flex-col bg-black">
      <header className="flex items-center justify-between relative px-10 font-quicksand text-white">
        <Link className="logo" to="/">
          <img src={wdbsaLogo} alt="wdbsa logo" width="90" height="50" />
        </Link>

        <button type="button" className="md:hidden" onClick={onChangeOpen}>
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-gray-500 focus:outline-none focus:text-white"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-gray-500 focus:outline-none focus:text-white"
            >
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          )}
        </button>

        <nav className="flex hidden md:block space-x-5 flex-row items-center justify-center gap-5">
          <NavLink to="/" className='hover:text-teal-600 hover:border-b-2 hover:border-teal-600 p-4'>
            {/* <FontAwesomeIcon
                        icon={faHome}
                        color="#4d4d4e" 
                        style={{ height: '12px' }} 
                        className="hover:text-green-500 trasition duration-300 ease-in-out"
                    /> */}
            Home
          </NavLink>
          <NavLink to="/skills" className='hover:text-teal-600 hover:border-b-2 hover:border-teal-600 p-4'>
            {/* <FontAwesomeIcon 
                        icon={faUser} 
                        color="#4d4d4e" 
                        style={{ height: '12px' }}
                        className="hover:text-green-500 trasition duration-300 ease-in-out"
                    /> */}
            Skills
          </NavLink>
          <NavLink to="/contact" className='hover:text-teal-600 hover:border-b-2 hover:border-teal-600 p-4'>
            {/* <FontAwesomeIcon 
                        icon={faEnvelope} 
                        color="#4d4d4e" 
                        style={{ height: '12px' }} 
                        className="hover:text-green-500 trasition duration-300 ease-in-out"
                        /> */}
            Portfolio
          </NavLink>
        </nav>
      </header>
      {isOpen ? (
        <div className="container text-white font-quicksand md:hidden">
          <NavLink
            to="/"
            className="block px-12 py-2 hover:bg-teal-700 rounded"
          >
            Home
          </NavLink>
          <NavLink
            to="/skills"
            className="block px-12 py-2 hover:bg-teal-700 rounded"
          >
            Skills
          </NavLink>
          <NavLink
            to="/contact"
            className="block px-12 py-2 mb-3 hover:bg-teal-700 rounded"
          >
            Portfolio
          </NavLink>
        </div>
      ) : (
        <></>
      )}

      {/* <ul className="flex flex-row gap-4 items-center justify-center">
            <li>
                <a
                className="w-30"
                target="_blank" 
                rel="noreferrer"
                >
                    <FontAwesomeIcon 
                        icon={faLinkedin}
                        color="#4d4d4e"
                        size="lg"
                        className="hover:text-green-500 trasition duration-300 ease-in-out"
                    />
                </a>
            </li>

            <li>
                <a
                target="_blank" 
                rel="noreferrer"
                >
                    <FontAwesomeIcon 
                        icon={faGithub}
                        color="#4d4d4e" 
                        size="lg"
                        className="hover:text-green-500 trasition duration-300 ease-in-out"
                    />
                </a>
            </li>

            <li>
                <a
                target="_blank" 
                rel="noreferrer"
                >
                    <FontAwesomeIcon 
                        icon={faSkype}
                        color="#4d4d4e" 
                        size="lg"
                        className="hover:text-green-500 trasition duration-300 ease-in-out"
                    />
                </a>
            </li>
        </ul> */}
    </div>
  )
}

export default Navbar
