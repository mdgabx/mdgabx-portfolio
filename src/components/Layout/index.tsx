import Navbar from '../Navbar';
import Home from '../Home';
 
const Layout = () => {
    return (    
        <div className="container-fluid w-full h-screen">
            <div className='flex flex-col h-full'>
                <Navbar />
                <div className="bg-gray-900 h-100 md:h-screen">
                    <Home />
                </div>
            </div>
        </div>
    )
}

export default Layout;