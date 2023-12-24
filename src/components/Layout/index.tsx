import Navbar from '../Navbar';
import React, { ReactNode } from 'react';

interface LayoutProps {
    children: ReactNode;
  }
 
const Layout:React.FC<LayoutProps> = ({children}) => {
    return (    
        <div className="container-fluid w-full h-screen">
            <div className='flex flex-col h-100'>
                <Navbar />
                <div className="bg-gray-900 h-full md:h-screen">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Layout;