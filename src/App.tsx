import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { AuthProvider } from './context';
import { routes } from 'routes';

const router = createBrowserRouter(routes);

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;
