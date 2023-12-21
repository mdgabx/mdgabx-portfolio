import Navbar from '../Navbar';
import Home from '../Home';
 
const Layout = () => {
    return (    
        <div className="container-fluid w-full">
            <div className='flex flex-col'>
            <div className="hidden lg:block">
                    {/* Desktop Navbar */}
                    <Navbar />
                </div>
                <div className="block lg:hidden">
                    {/* Mobile Navbar */}
                    Mobile Navbar
                </div>
               
                <div className="bg-gray-900">
                    <Home />
                </div>
            </div>
        </div>
    )
}

export default Layout;