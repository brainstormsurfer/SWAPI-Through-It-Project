import { Outlet } from 'react-router-dom';
import Footer from './../shared/Footer';
import Navbar from '../shared/Navbar';

const SharedLayout = () => {
  return (
    <>
     <Navbar />
      <main>
        <Outlet />
      </main>
     <Footer />
    </>
  );
};

export default SharedLayout;


