import { Link, NavLink } from 'react-router-dom';
import wdbsaLogo from '../../assets/images/wdbsaLogo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
 
const Sidebar:React.FC = () => (
    <div className="bg-black">
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

        <ul className="">
            <li>
                <a>
                    <FontAwesomeIcon 
                        icon={faLinkedin} 
                        color="#4d4d4e" 
                    />
                </a>
            </li>
        </ul>
    </div>

)

export default Sidebar