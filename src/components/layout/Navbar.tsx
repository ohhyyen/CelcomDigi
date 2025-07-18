import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-celcomdigi-dark-blue text-white h-60 px-4 shadow-md flex items-center"> {/* Menetapkan ketinggian tetap yang lebih besar */}
      <div className="container mx-auto flex justify-between items-center h-full"> {/* Memastikan kontainer mengisi ketinggian nav */}
        <Link to="/" className="flex items-center h-full"> {/* Memastikan link mengisi ketinggian dan memusatkan logo */}
          {/* Laluan logo yang dikemas kini dan saiz dibesarkan */}
          <img src="/celcomdigi-logo.jpg" alt="CelcomDigi Logo" className="h-full w-auto object-contain" /> {/* Logo mengisi ketinggian penuh */}
        </Link>
        <div className="flex space-x-4">
          <a href="https://www.celcomdigi.com/postpaid" target="_blank" rel="noopener noreferrer" className="hover:text-celcomdigi-light-blue">Pascabayar</a>
          <a href="https://www.celcomdigi.com/prepaid/nx" target="_blank" rel="noopener noreferrer" className="hover:text-celcomdigi-light-blue">Prabayar</a>
          <a href="https://www.celcomdigi.com/fibre" target="_blank" rel="noopener noreferrer" className="hover:text-celcomdigi-light-blue">Fiber</a>
          <a href="https://www.celcomdigi.com/devices/phone-care" target="_blank" rel="noopener noreferrer" className="hover:text-celcomdigi-light-blue">Peranti</a>
          <Link to="/lifestyle" className="hover:text-celcomdigi-light-blue">Gaya Hidup</Link>
          <Link to="/roaming" className="hover:text-celcomdigi-light-blue">Perayauan</Link>
          <a href="https://www.celcomdigi.com/promotions" target="_blank" rel="noopener noreferrer" className="hover:text-celcomdigi-light-blue">Promosi</a>
          <a href="https://help.celcomdigi.com/" target="_blank" rel="noopener noreferrer" className="hover:text-celcomdigi-light-blue">DAPATKAN BANTUAN</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;