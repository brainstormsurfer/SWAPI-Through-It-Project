import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header'
import "./styles/header-mq.css";
import "./styles/footer-mq.css";

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


