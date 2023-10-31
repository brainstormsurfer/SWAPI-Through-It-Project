import { Outlet } from 'react-router-dom';
import Footer from '../shared/Footer';
import Header from '../shared/Header'

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


