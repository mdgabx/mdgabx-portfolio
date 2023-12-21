import { Link, NavLink } from 'react-router-dom';
import wdbsaLogo from '../../assets/images/wdbsaLogo.png'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faHome, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons'
// import { faGithub, faLinkedin, faSkype } from '@fortawesome/free-brands-svg-icons'
 
const Navbar:React.FC = () => (
    <div className="bg-black flex items-center justify-between relative px-10 font-quicksand text-white">
        <Link className="logo"  to="/">
            <img src={wdbsaLogo} alt="wdbsa logo" width="100" height="50"/>
        </Link>
        <nav className="flex flex-row items-center justify-center gap-5">
            <NavLink to="/">
                {/* <FontAwesomeIcon
                    icon={faHome}
                    color="#4d4d4e" 
                    style={{ height: '12px' }} 
                    className="hover:text-green-500 trasition duration-300 ease-in-out"
                 /> */}
                 Home
            </NavLink>
            <NavLink to="/about">
                {/* <FontAwesomeIcon 
                    icon={faUser} 
                    color="#4d4d4e" 
                    style={{ height: '12px' }}
                    className="hover:text-green-500 trasition duration-300 ease-in-out"
                /> */}
                About
            </NavLink>
            <NavLink to="/contact">
                {/* <FontAwesomeIcon 
                    icon={faEnvelope} 
                    color="#4d4d4e" 
                    style={{ height: '12px' }} 
                    className="hover:text-green-500 trasition duration-300 ease-in-out"
                    /> */}
                    Portfolio
            </NavLink>
        </nav>

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

export default Navbar