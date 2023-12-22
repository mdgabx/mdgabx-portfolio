import Navbar from '../Navbar';
import React, { ReactNode } from 'react';

interface LayoutProps {
    children: ReactNode;
  }
 
const Layout:React.FC<LayoutProps> = ({children}) => {
    return (    
        <div className="container-fluid w-full h-screen">
            <div className='flex flex-col h-full'>
                <Navbar />
                <div className="bg-gray-900 h-100 md:h-screen">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Layout;