import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProfileSection from './components/profilesection';

const App: React.FC = () => {
  const location = useLocation();

  return (
    <div className="dark:bg-gray-900 dark:text-white min-h-screen flex flex-col justify-between">
      <Navbar />
      
      {/* Show ProfileSection only on the home page ('/') */}
      {location.pathname === '/' && <ProfileSection />}

      {/* Render the content for other routes */}
      <main className="flex-grow">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default App;
