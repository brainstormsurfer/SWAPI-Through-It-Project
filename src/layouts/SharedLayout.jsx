import { Outlet } from 'react-router-dom';
import Footer from '../shared/Footer';
import Header from '../shared/Header'
import './style.css'

const SharedLayout = () => {
  return (
    <>
    <div className="container">
    <Header />
      <main>
        <Outlet />
      </main>
     <Footer />
    </div>
    </>
  );
};

export default SharedLayout;


