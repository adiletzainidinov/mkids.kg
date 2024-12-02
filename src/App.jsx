import { createBrowserRouter, RouterProvider } from 'react-router';
import Layouts from './layouts/Layouts';
import ErrorPage from './components/shared/pages/error-page/ErrorPage ';
import WrapperMainPage from './components/shared/pages/mainPageMain/WrapperMainPage';

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
