import { Navbar } from 'components/navbar';
import { Outlet } from 'react-router-dom';

export const MainLayout = () => (
  <div className="App">
    <Navbar />
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '1rem' }}>
      <Outlet />
    </div>
  </div>
);
