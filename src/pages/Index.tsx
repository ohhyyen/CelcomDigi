import React from 'react';
import Navbar from '../components/layout/Navbar.tsx';
import Footer from '../components/layout/Footer.tsx';
import AppleDevicesPage from './AppleDevices';
import LiveChat from '../components/LiveChat.tsx'; // Import LiveChat component

const Index: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <AppleDevicesPage />
      </main>
      <Footer />
      <LiveChat /> {/* Add LiveChat component here */}
    </div>
  );
};

export default Index;