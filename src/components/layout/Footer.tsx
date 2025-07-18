import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 sm:py-8 mt-8"> {/* Padding responsif */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 text-sm sm:text-base"> {/* Jarak dan saiz teks responsif */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">CelcomDigi</h3> {/* Saiz teks responsif */}
            <div className="flex space-x-3 sm:space-x-4 mb-3 sm:mb-4"> {/* Jarak responsif */}
              {/* Simplified social icons */}
              <a href="https://web.facebook.com/CelcomDigi" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">Facebook</a>
              <a href="https://www.instagram.com/celcomdigi/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">Instagram</a>
              <a href="https://twitter.com/CelcomDigi" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">Twitter</a>
            </div>
            <h4 className="text-sm sm:text-md font-semibold mb-2">Muat turun aplikasi Celcom Life Hub atau MyDigi</h4> {/* Saiz teks responsif */}
            <div className="flex space-x-2">
              {/* Simplified app store icons */}
              <img src="https://cdn.prod.website-files.com/637c596725cb8b7f82fe360b/6551e76ef1d0bd1c0c55bea6_Apple_Icon.svg" alt="Apple App Store" className="h-7 sm:h-8" /> {/* Saiz imej responsif */}
              <img src="https://cdn.prod.website-files.com/637c596725cb8b7f82fe360b/6551e76e2606af8e05a9fd61_Google-play-store_Icon.svg" alt="Google Play Store" className="h-7 sm:h-8" />
            </div>
          </div>
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Mengenai CelcomDigi</h3> {/* Saiz teks responsif */}
            <ul className="space-y-1 sm:space-y-2"> {/* Jarak responsif */}
              <li><a href="https://corporate.celcomdigi.com/company/about-us" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">Mengenai Kami</a></li>
              <li><a href="https://celcomdigi.listedcompany.com/home.html" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">Hubungan Pelabur</a></li>
              <li><a href="https://corporate.celcomdigi.com/newsroom" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">Bilik Berita</a></li>
              <li><a href="https://corporate.celcomdigi.com/network/our-network" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">Rangkaian</a></li>
              <li><a href="https://corporate.celcomdigi.com/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">CelcomDigi Korporat</a></li>
              <li><a href="https://business.celcomdigi.com/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">CelcomDigi Perniagaan</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Sumber</h3> {/* Saiz teks responsif */}
            <ul className="space-y-1 sm:space-y-2"> {/* Jarak responsif */}
              <li><a href="https://help.celcomdigi.com/support/solutions/folders/70000485592" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">Notifikasi MCMC</a></li>
              <li><a href="/terms-and-conditions" className="hover:text-gray-400">Terma &amp; Syarat</a></li>
              <li><a href="https://assets.website-files.com/639b20bcbc27667faa23c543/639b20bcbc2766103223c5aa_Cookie%20Notice%20(CelcomDigi).pdf" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">Notis Kuki</a></li>
              <li>Notis Privasi: <a href="/privacy-notice" className="hover:text-gray-400">CelcomDigi</a> | <a href="https://cdn.prod.website-files.com/637c596725cb8b7f82fe360b/6711d56afec81dd3a8ebbbef_Celcom%20Privacy%20Notice%20181024.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">Celcom</a> | <a href="https://cdn.prod.website-files.com/637c596725cb8b7f82fe360b/6711d56a85f3e50b53009bec_Digi%20Privacy%20Notice%20181024.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">Digi</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-6 sm:mt-8 pt-3 sm:pt-4 text-center text-xs sm:text-sm"> {/* Padding dan saiz teks responsif */}
          <p>© Hak Cipta 2025 CelcomDigi Berhad [No. Pendaftaran 199701009694 (425190-X)]. Hak Cipta Terpelihara.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;