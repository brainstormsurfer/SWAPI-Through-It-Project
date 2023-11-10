import { Outlet } from 'react-router-dom';
import Footer from '../shared/Footer';
import Header from '../shared/Header'
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


