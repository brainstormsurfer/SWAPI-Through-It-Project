import { Outlet } from 'react-router-dom';
import Footer from './../shared/Footer';

const SharedLayout = () => {
  return (
    <>
      <main>
        <Outlet />
      </main>
     <Footer />
    </>
  );
};

export default SharedLayout;


