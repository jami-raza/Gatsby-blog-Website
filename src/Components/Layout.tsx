import React,{ReactNode} from 'react';
import Navbar from './Header';
import Footer from './Footer';


type Props = {
  children:ReactNode,
}

const Layout = ({children}:Props) => {
  return (
    <div>
    <Navbar />
    
    {children}
    <Footer />
    </div>
  )
}
export default Layout;