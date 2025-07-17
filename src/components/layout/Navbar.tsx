import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-celcomdigi-dark-blue text-white h-20 px-4 shadow-md flex items-center"> {/* Menetapkan ketinggian tetap dan memusatkan item */}
      <div className="container mx-auto flex justify-between items-center h-full"> {/* Memastikan kontainer mengisi ketinggian nav */}
        <Link to="/" className="flex items-center h-full"> {/* Memastikan link mengisi ketinggian dan memusatkan logo */}
          {/* Laluan logo yang dikemas kini dan saiz dibesarkan */}
          <img src="/celcomdigi-logo.jpg" alt="CelcomDigi Logo" className="h-full w-auto object-contain" /> {/* Logo mengisi ketinggian penuh */}
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