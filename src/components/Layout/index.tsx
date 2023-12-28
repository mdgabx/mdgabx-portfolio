import Navbar from '../Navbar';
import React, { ReactNode } from 'react';

interface LayoutProps {
    children: ReactNode;
  }
 
const Layout:React.FC<LayoutProps> = ({children}) => {
    return (    
            <div className='container-fluid mx-auto'>
                <Navbar />
                <div className="container mb-10">
                    {children}
                </div>
            </div>
    )
}

export default Layout;