import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header'
import './style.css'
import '../components/style.css'

const SharedLayout = () => {
  return (
    <>    
    <Header />
      <main>
        <Outlet />
      </main>
     <Footer />    
    </>
  );
};

export default SharedLayout;


