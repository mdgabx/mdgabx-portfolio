import { Link, NavLink } from 'react-router-dom';
import wdbsaLogo from '../../assets/images/wdbsaLogo.png'

const Sidebar:React.FC = () => (
    <div className="bg-black">
        <Link className="logo"  to="/">
            <img src={wdbsaLogo} alt="wdbsa logo" width="150" height="150"/>
        </Link>
        <nav>
            <NavLink to="/">
                
            </NavLink>
        </nav>
    </div>

)

export default Sidebar