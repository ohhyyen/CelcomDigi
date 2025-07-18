import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const navLinks = [
    { name: 'Pascabayar', href: 'https://www.celcomdigi.com/postpaid', external: true },
    { name: 'Prabayar', href: 'https://www.celcomdigi.com/prepaid/nx', external: true },
    { name: 'Fiber', href: 'https://www.celcomdigi.com/fibre', external: true },
    { name: 'Peranti', href: 'https://www.celcomdigi.com/devices/phone-care', external: true },
    { name: 'Gaya Hidup', href: '/lifestyle', external: false },
    { name: 'Perayauan', href: '/roaming', external: false },
    { name: 'Promosi', href: 'https://www.celcomdigi.com/promotions', external: true },
    { name: 'DAPATKAN BANTUAN', href: 'https://help.celcomdigi.com/', external: true },
  ];

  return (
    <nav className="bg-white text-gray-800 h-16 sm:h-20 px-4 shadow-md flex items-center">
      <div className="w-full flex justify-between items-center h-full">
        <Link to="/" className="flex items-center h-full">
          <img src="/celcomdigi-logo.jpg" alt="CelcomDigi Logo" className="h-full w-auto object-contain" />
        </Link>

        {/* Hamburger menu for mobile */}
        <div className="md:hidden">
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-gray-800">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Buka menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[250px] sm:w-[300px] bg-white p-4">
              <SheetHeader className="mb-6">
                <SheetTitle className="text-2xl font-bold text-gray-800">Menu</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  link.external ? (
                    <a
                      key={link.name}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base font-normal text-gray-700 hover:text-blue-600"
                      onClick={() => setIsSheetOpen(false)} // Tutup sheet apabila diklik
                    >
                      {link.name}
                    </a>
                  ) : (
                    <Link
                      key={link.name}
                      to={link.href}
                      className="text-base font-normal text-gray-700 hover:text-blue-600"
                      onClick={() => setIsSheetOpen(false)} // Tutup sheet apabila diklik
                    >
                      {link.name}
                    </Link>
                  )
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>

        {/* Desktop navigation links (hidden on mobile) */}
        <div className="hidden md:flex space-x-4">
          {navLinks.map((link) => (
            link.external ? (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 hover:text-blue-600"
              >
                {link.name}
              </a>
            ) : (
              <Link
                key={link.name}
                to={link.href}
                className="text-gray-800 hover:text-blue-600"
              >
                {link.name}
              </Link>
            )
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;