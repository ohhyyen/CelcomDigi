import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-blue-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">CelcomDigi</Link>
        <div className="flex space-x-4">
          <Link to="/postpaid" className="hover:text-blue-200">Postpaid</Link>
          <Link to="/prepaid" className="hover:text-blue-200">Prepaid</Link>
          <Link to="/fibre" className="hover:text-blue-200">Fibre</Link>
          <Link to="/devices/apple" className="hover:text-blue-200">Devices</Link>
          <Link to="/lifestyle" className="hover:text-blue-200">Lifestyle</Link>
          <Link to="/roaming" className="hover:text-blue-200">Roaming</Link>
          <Link to="/promotions" className="hover:text-blue-200">Promotions</Link>
          <a href="https://help.celcomdigi.com/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-200">GET HELP</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;