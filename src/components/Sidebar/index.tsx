import { Link, NavLink } from 'react-router-dom';
import wdbsaLogo from '../../assets/images/wdbsaLogo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faSkype } from '@fortawesome/free-brands-svg-icons'
 
const Sidebar:React.FC = () => (
    <div className="bg-black relative">
        <Link className="logo"  to="/">
            <img src={wdbsaLogo} alt="wdbsa logo" width="150" height="150"/>
        </Link>
        <nav className="flex flex-col items-center justify-center gap-5">
            <NavLink to="/">
                <FontAwesomeIcon
                    icon={faHome} 
                    color="#4d4d4e" 
                    style={{ height: '24px' }} 
                    className="hover:text-green-500 trasition duration-300 ease-in-out"
                 />
            </NavLink>
            <NavLink to="/about">
                <FontAwesomeIcon 
                    icon={faUser} 
                    color="#4d4d4e" 
                    style={{ height: '24px' }}
                    className="hover:text-green-500 trasition duration-300 ease-in-out"
                />
            </NavLink>
            <NavLink to="/contact">
                <FontAwesomeIcon 
                    icon={faEnvelope} 
                    color="#4d4d4e" 
                    style={{ height: '24px' }} 
                    className="hover:text-green-500 trasition duration-300 ease-in-out"
                    />
            </NavLink>
        </nav>

        <ul className="w-full absolute bottom-10 flex flex-col gap-4 items-center justify-center">
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
        </ul>
    </div>

)

export default Sidebar