import Sidebar from '../Sidebar';
import Home from '../Home';
 
const Layout = () => {
    return (    
        <div className="container-fluid w-screen h-screen">
            <div className='flex flex-row h-full'>
                <Sidebar />
                <div className="bg-gray-900 h-screen w-screen">
                    <Home />
                </div>
            </div>
        </div>
    )
}

export default Layout;