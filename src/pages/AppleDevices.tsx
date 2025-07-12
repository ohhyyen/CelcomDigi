import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PostpaidPromotionChecker from '../components/PostpaidPromotionChecker'; // Import komponen baru

const AppleDevicesPage: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play()
        .then(() => {
          console.log("Video started playing automatically.");
        })
        .catch(error => {
          console.error("Video autoplay failed:", error.name, error.message);
          console.log("Kemungkinan besar, browser memblokir pemutaran otomatis karena kebijakannya atau masalah format. Interaksi pengguna mungkin diperlukan.");
        });
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-white text-gray-800 py-20 overflow-hidden">
        <div className="container mx-auto text-center px-4">
          <h1 className="text-4xl md:text-5xl font-light mb-4">iPhone Terkini. Harga Terbaik.</h1>
          <p className="text-lg md:text-xl mb-8">Dapatkan sekarang di rangkaian terluas dan terpantas Malaysia</p>
          <video
            ref={videoRef}
            className="w-full h-auto mt-8 rounded-lg shadow-lg"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/637c596725cb8b7f82fe360b_67bfe8d80c908175e7bc619d_CelcomDigi_iPhone_16e_Social_Video_16x9_HD_MY-EN (1)-transcode.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {/* New Postpaid Promotion Checker Section - Moved here */}
          <div className="mt-12"> {/* Added margin-top for spacing */}
            <PostpaidPromotionChecker />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Pengalaman iPhone terbaik dengan CelcomDigi</h2>
            <p className="text-lg text-gray-600">Temui rangkaian perkhidmatan iPhone kami yang disesuaikan untuk anda</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Removed: Pelan yang dibuat untuk iPhone anda */}
            {/* Removed: Complete Apple ecosystem */}
            {/* Removed: Easy App Store subscriptions */}
            {/* Removed: Stay connected with WatchSIM */}
          </div>
        </div>
      </section>

      {/* Buy Now Section */}
      <section id="buy-now" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Dapatkan pelan ansuran iPhone 16 terbaik di Malaysia dengan Easy360</h2>
            {/* Removed: <p className="text-lg text-gray-600">Cara termudah untuk memiliki iPhone 16 — dari RM53/bulan dengan RM0 pendahuluan, 0% faedah</p> */}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Device Card 1 */}
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <img src="https://cdn.prod.website-files.com/637c596725cb8b7f82fe360b/66dfee42b7a243aab721a37f_CelcomDigi_iPhone-16-Pro_Device-Image.avif" alt="iPhone 16 Pro Max" className="mx-auto mb-4 w-48 h-auto" />
              <h5 className="text-xl font-semibold mb-1">iPhone 16 Pro Max</h5>
              {/* Removed RRP, 24/36 bulan, and prices */}
              <button className="mt-6 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors">Beli sekarang</button>
            </div>

            {/* Device Card 2 */}
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <img src="https://cdn.prod.website-files.com/637c596725cb8b7f82fe360b/66dfee428f6c2ccb7da97d60_CelcomDigi_iPhone-16-Pro-Max_Device-Image.avif" alt="iPhone 16 Pro" className="mx-auto mb-4 w-48 h-auto" />
              <h5 className="text-xl font-semibold mb-1">iPhone 16 Pro</h5>
              {/* Removed RRP, 24/36 bulan, and prices */}
              <button className="mt-6 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors">Beli sekarang</button>
            </div>

            {/* Device Card 3 */}
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <img src="https://cdn.prod.website-files.com/637c596725cb8b7f82fe360b/66e2613e9aff0f9a20c4ca03_CelcomDigi_iPhone-16-Pink_Device-Image.avif" alt="iPhone 16" className="mx-auto mb-4 w-48 h-auto" />
              <h5 className="text-xl font-semibold mb-1">iPhone 16</h5>
              {/* Removed RRP, 24/36 bulan, and prices */}
              <button className="mt-6 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors">Beli sekarang</button>
            </div>

            {/* Device Card 4 */}
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <img src="https://cdn.prod.website-files.com/637c596725cb8b7f82fe360b/67bfeb741c4477ee5c1a6f7a_CelcomDigi_iPhone16e_device_image.avif" alt="iPhone 16e" className="mx-auto mb-4 w-48 h-auto" />
              <h5 className="text-xl font-semibold mb-1">iPhone 16e</h5>
              {/* Removed RRP, 24/36 bulan, and prices */}
              <button className="mt-6 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors">Beli sekarang</button>
            </div>
          </div>

          <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 mt-8 rounded-md flex items-center space-x-3">
            <img src="https://cdn.prod.website-files.com/637c596725cb8b7f82fe360b/66e145c2fe6dccec188158eb_new-promo-icon.svg" alt="Ikon Promosi" className="w-10 h-10" />
            <div>
              <p className="text-sm">Dapatkan <strong>pengecas 35W PERCUMA &amp; baucar RM300</strong> apabila anda pra-tempah peranti iPhone 16 anda dari sekarang hingga 20 September. <a href="#" className="underline hover:text-yellow-800">Ketahui lebih lanjut di sini.</a></p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4 mt-8">
            <Link to="/devices/iphones-specs" className="bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition-colors text-center">Lihat spesifikasi penuh</Link>
            <Link to="/devices/iphones-compare" className="bg-gray-200 text-gray-800 py-3 px-6 rounded-md hover:bg-gray-300 transition-colors text-center">Bandingkan model iPhone</Link>
          </div>
        </div>
      </section>

      {/* Level Up Apple Experience Section */}
      <section className="py-16 bg-gray-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Tingkatkan pengalaman Apple anda</h2>
            <p className="text-lg text-gray-600">Dari perlindungan hingga aksesori — segala-galanya untuk menjadikan iPhone anda lebih baik</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Promo Banner 1 */}
            <a href="/promotions/apple-iphone16-pwp-offer" className="block rounded-lg shadow-md overflow-hidden bg-white hover:shadow-xl transition-shadow">
              <img src="https://cdn.prod.website-files.com/637c596725cb8b7f82fe360b/66ec1b6669aeff25ffb5fd1f_CelcomDigi_PWP_Campaign%20Banner_EN_990x557.avif" alt="Pembelian dengan Pembelian" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2"><strong>Pembelian dengan Pembelian</strong></h3>
                <p className="text-600">Jimat sehingga 45% untuk bundle aksesori siri iPhone 16</p>
              </div>
            </a>
            {/* Promo Banner 2 */}
            <a href="/promotions/free-phonecare" className="block rounded-lg shadow-md overflow-hidden bg-white hover:shadow-xl transition-shadow">
              <img src="https://cdn.prod.website-files.com/637c596725cb8b7f82fe360b/66e310ba32c8476bbaa7f793_CelcomDigi_PromoThumbnail_iPhone16_PhoneCare_990x557_EN.avif" alt="PhoneCARE" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2"><strong>PhoneCARE</strong></h3>
                <p className="text-gray-600">Tukar atau ganti iPhone terpakai anda atas sebarang sebab pada hanya RM21/bulan</p>
              </div>
            </a>
            {/* Promo Banner 3 */}
            <a href="/devices/trade-in" className="block rounded-lg shadow-md overflow-hidden bg-white hover:shadow-xl transition-shadow">
              <img src="https://cdn.prod.website-files.com/637c596725cb8b7f82fe360b/66e310bac1a475d395575672_CelcomDigi_PromoThumbnail_iPhone16_TradeIn_990x557_EN.avif" alt="Tukar beli" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Tukar beli dengan nilai maksimum</h3>
                <p className="text-gray-600">Dapatkan sehingga RM4,700 apabila anda tukar beli iPhone terpakai anda</p>
              </div>
            </a>
            {/* Promo Banner 4 */}
            <a href="/postpaid/watchsim" className="block rounded-lg shadow-md overflow-hidden bg-white hover:shadow-xl transition-shadow">
              <img src="https://cdn.prod.website-files.com/637c596725cb8b7f82fe360b/66e310b96474ba64145a9d61_CelcomDigi_PromoThumbnail_iPhone16_WatchSIM_990x557_EN.avif" alt="WatchSIM" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">WatchSIM</h3>
                <p className="text-gray-600">Akses sambungan tanpa tandingan untuk Apple Watch anda pada hanya RM20/bulan</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Apple Device Pricing Section (Simplified) */}
      <section id="price-list" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Harga peranti Apple</h2>
          </div>
          {/* Simplified static device cards - original HTML had complex filtering/CMS */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Example Device Card (repeated for other devices if needed) */}
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <img src="https://cdn.prod.website-files.com/637c596725cb8b7f82fe360b/67c51f946299d4c3152e155c_CelcomDigi_iPhone-e_900x900_White.avif" alt="Imej Peranti" className="mx-auto mb-4 w-32 h-auto" />
              <div className="text-left">
                <div className="text-gray-500 text-sm">Apple</div>
                <h5 className="text-lg font-semibold mb-2">iPhone 16e</h5>
                <div className="flex justify-between items-center mb-2">
                  <div className="text-sm text-gray-500">RRP: RM4,499</div>
                  <div className="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded-full">512GB</div>
                </div>
                <div className="border-t border-gray-200 pt-4">
                  <div className="text-sm text-gray-500">Dari</div>
                  <div className="text-2xl font-bold mb-1">RM91<span className="text-sm font-normal text-gray-500">/bulan</span></div>
                  <div className="text-blue-600 text-sm">Jimat sehingga RM1223</div>
                </div>
                <div className="flex items-center space-x-2 mt-4">
                  <div className="text-sm text-gray-500">dengan</div>
                  <div className="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded-full">One™ Pro / One™ Ultra</div>
                </div>
                <button className="mt-6 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors">Beli sekarang</button>
              </div>
            </div>
            {/* Add more static device cards here if needed, following the pattern */}
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <img src="https://cdn.prod.website-files.com/637c596725cb8b7f82fe360b/67c51f946299d4c3152e155c_CelcomDigi_iPhone-e_900x900_White.avif" alt="Imej Peranti" className="mx-auto mb-4 w-32 h-auto" />
              <div className="text-left">
                <div className="text-gray-500 text-sm">Apple</div>
                <h5 className="text-lg font-semibold mb-2">iPhone 16e</h5>
                <div className="flex justify-between items-center mb-2">
                  <div className="text-sm text-gray-500">RRP: RM4,499</div>
                  <div className="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded-full">512GB</div>
                </div>
                <div className="border-t border-gray-200 pt-4">
                  <div className="text-sm text-gray-500">Dari</div>
                  <div className="text-2xl font-bold mb-1">RM97<span className="text-sm font-normal text-gray-500">/bulan</span></div>
                  <div className="text-blue-600 text-sm">Jimat sehingga RM1007</div>
                </div>
                <div className="flex items-center space-x-2 mt-4">
                  <div className="text-sm text-gray-500">dengan</div>
                  <div className="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded-full">Pascabayar 5G 160</div>
                </div>
                <button className="mt-6 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors">Beli sekarang</button>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <img src="https://cdn.prod.website-files.com/637c596725cb8b7f82fe360b/67c51f946299d4c3152e155c_CelcomDigi_iPhone-e_900x900_White.avif" alt="Imej Peranti" className="mx-auto mb-4 w-32 h-auto" />
              <div className="text-left">
                <div className="text-gray-500 text-sm">Apple</div>
                <h5 className="text-lg font-semibold mb-2">iPhone 16e</h5>
                <div className="flex justify-between items-center mb-2">
                  <div className="text-sm text-gray-500">RRP: RM4,499</div>
                  <div className="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded-full">512GB</div>
                </div>
                <div className="border-t border-gray-200 pt-4">
                  <div className="text-sm text-gray-500">Dari</div>
                  <div className="text-2xl font-bold mb-1">RM99<span className="text-sm font-normal text-gray-500">/bulan</span></div>
                  <div className="text-blue-600 text-sm">Jimat sehingga RM935</div>
                </div>
                <div className="flex items-center space-x-2 mt-4">
                  <div className="text-sm text-gray-500">dengan</div>
                  <div className="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded-full">Pascabayar 5G 140</div>
                </div>
                <button className="mt-6 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors">Beli sekarang</button>
              </div>
            </div>
          </div>
          <div className="text-sm text-gray-600 mt-8">
            <p className="mb-2">Nota:</p>
            <ul className="list-disc list-inside ml-4">
              <li>Untuk iPhone 16, 16e, 16 Plus, 16 Pro &amp; 16 Pro Max, pelan Pascabayar 5G 100 akan menerima pelarasan bulanan sebanyak RM1 sepanjang tempoh kontrak.</li>
            </ul>
          </div>
          <div className="text-center mt-8">
            <a href="https://www.celcomdigi.com/devices/easy360#apple" className="text-blue-600 hover:underline">Lihat senarai harga dalam jadual</a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Soalan Lazim</h2>
          </div>
          <div className="space-y-4">
            {/* FAQ Item 1 */}
            <details className="bg-white p-4 rounded-lg shadow-md">
              <summary className="flex justify-between items-center cursor-pointer text-lg font-semibold">
                Bilakah saya akan menerima iPhone saya?
                <svg className="w-6 h-6 text-gray-600 transform rotate-0 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="mt-2 text-gray-700">Setelah pesanan anda diproses, anda akan menerima e-mel yang mengandungi nombor penjejakan pesanan anda apabila item dalam perjalanan. Untuk model tertentu dengan permintaan yang lebih tinggi, penghantaran mungkin mengambil masa sehingga 1 hingga 3 minggu.</p>
            </details>
            {/* FAQ Item 2 */}
            <details className="bg-white p-4 rounded-lg shadow-md">
              <summary className="flex justify-between items-center cursor-pointer text-lg font-semibold">
                Adakah siri iPhone 16 tersedia dalam pelan ansuran dari CelcomDigi?
                <svg className="w-6 h-6 text-gray-600 transform rotate-0 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="mt-2 text-gray-700">Ya, siri iPhone 16 tersedia di Easy360, pelan ansuran peranti kami sehingga 36 bulan dengan 0% faedah dan bayaran pendahuluan RM0 untuk pelanggan yang layak.</p>
            </details>
            {/* FAQ Item 3 */}
            <details className="bg-white p-4 rounded-lg shadow-md">
              <summary className="flex justify-between items-center cursor-pointer text-lg font-semibold">
                Bolehkah saya masih menikmati faedah PWP siri iPhone 16 RM300?
                <svg className="w-6 h-6 text-gray-600 transform rotate-0 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="mt-2 text-gray-700">Anda boleh menikmati diskaun PWP sehingga 43% untuk bundle aksesori siri iPhone 16. Sila kunjungi mana-mana kedai kami di seluruh negara untuk mengetahui lebih lanjut.</p>
            </details>
            {/* FAQ Item 4 */}
            <details className="bg-white p-4 rounded-lg shadow-md">
              <summary className="flex justify-between items-center cursor-pointer text-lg font-semibold">
                Bagaimana cara saya tukar beli iPhone saya?
                <svg className="w-6 h-6 text-gray-600 transform rotate-0 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="mt-2 text-gray-700">Pelanggan CelcomDigi kini boleh tukar beli telefon pintar lama mereka dengan mudah melalui kaedah berikut:<br/><br/>• Kunjungi mana-mana Celcom bluecube, Digi Store, dan kedai CelcomDigi di seluruh negara.<br/>• Mulakan tukar beli secara dalam talian melalui <a href="https://www.celcomdigi.com/devices/trade-in" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">halaman Tukar Beli CelcomDigi</a> dan minta pengambilan peranti tukar beli anda dari lokasi anda.<br/><br/>Untuk maklumat lanjut, layari <a href="https://help.celcomdigi.com/support/solutions/articles/70000661171-trade-in-of-devices" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Pusat Bantuan</a> kami.</p>
            </details>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AppleDevicesPage;