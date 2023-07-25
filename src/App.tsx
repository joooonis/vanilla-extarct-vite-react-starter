import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './styles/global.css.ts';
import Layout from './components/common/Layout/Layout.tsx';

const router = createBrowserRouter([{ path: '/', element: <Layout /> }]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
