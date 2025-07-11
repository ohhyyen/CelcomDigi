import React from 'react';
import Navbar from '../components/layout/Navbar.tsx';
import Footer from '../components/layout/Footer.tsx';
import AppleDevicesPage from './AppleDevices';

const Index: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <AppleDevicesPage />
      </main>
      <Footer />
    </div>
  );
};

export default Index;