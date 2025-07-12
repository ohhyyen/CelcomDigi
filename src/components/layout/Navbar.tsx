import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-blue-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">CelcomDigi</Link>
        <div className="flex space-x-4">
          <Link to="/postpaid" className="hover:text-blue-200">Pascabayar</Link>
          <Link to="/prepaid" className="hover:text-blue-200">Prabayar</Link>
          <Link to="/fibre" className="hover:text-blue-200">Fiber</Link>
          <Link to="/devices/apple" className="hover:text-blue-200">Peranti</Link>
          <Link to="/lifestyle" className="hover:text-blue-200">Gaya Hidup</Link>
          <Link to="/roaming" className="hover:text-blue-200">Perayauan</Link>
          <Link to="/promotions" className="hover:text-blue-200">Promosi</Link>
          <a href="https://help.celcomdigi.com/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-200">DAPATKAN BANTUAN</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;