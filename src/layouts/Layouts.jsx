import { Outlet } from 'react-router';
import Header from '../components/shared/mainPage/Header';
import Footer from '../components/shared/Footer/Footer';

const Layouts = () => {
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

export default Layouts;
