import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-celcomdigi-dark-blue text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img src="/231020-celcomdigi-logo-1140x570.jpg" alt="CelcomDigi Logo" className="h-10 w-auto" /> {/* Increased height to h-10 and added w-auto */}
        </Link>
        <div className="flex space-x-4">
          <Link to="/postpaid" className="hover:text-celcomdigi-light-blue">Pascabayar</Link>
          <Link to="/prepaid" className="hover:text-celcomdigi-light-blue">Prabayar</Link>
          <Link to="/fibre" className="hover:text-celcomdigi-light-blue">Fiber</Link>
          <Link to="/devices/apple" className="hover:text-celcomdigi-light-blue">Peranti</Link>
          <Link to="/lifestyle" className="hover:text-celcomdigi-light-blue">Gaya Hidup</Link>
          <Link to="/roaming" className="hover:text-celcomdigi-light-blue">Perayauan</Link>
          <Link to="/promotions" className="hover:text-celcomdigi-light-blue">Promosi</Link>
          <a href="https://help.celcomdigi.com/" target="_blank" rel="noopener noreferrer" className="hover:text-celcomdigi-light-blue">DAPATKAN BANTUAN</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;