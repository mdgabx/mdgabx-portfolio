import Navbar from '../Navbar';
import Home from '../Home';
 
const Layout = () => {
    return (    
        <div className="container-fluid w-full h-screen">
            <div className='flex flex-col h-full'>
            <div className="hidden lg:block">
                    {/* Desktop Navbar */}
                    <Navbar />
                </div>
                <div className="block lg:hidden">
                    {/* Mobile Navbar */}
                    Mobile Navbar
                </div>
               
                <div className="bg-gray-900 md:h-screen">
                    <Home />
                </div>
            </div>
        </div>
    )
}

export default Layout;