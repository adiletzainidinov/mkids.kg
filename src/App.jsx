import { createBrowserRouter, RouterProvider } from 'react-router';
import Layouts from './layouts/Layouts';
import ErrorPage from './components/pages/error-page/ErrorPage ';
import WrapperMainPage from './components/pages/mainPageMain/WrapperMainPage';

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layouts />,
      errorElement: <ErrorPage />,
      children: [{ path: '/', element: <WrapperMainPage /> }],
    },
    
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
