import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { AuthProvider } from './context';
import { routes } from 'routes';

const router = createBrowserRouter(routes);

function App() {
  return (
    // Auth provider for user authentication
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;
