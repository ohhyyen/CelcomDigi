import React from 'react';
import { Link } from 'react-router-dom';

const AppleDevicesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-700 to-blue-900 text-white py-20 overflow-hidden">
        <div className="container mx-auto text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Latest iPhone. Greatest price.</h1>
          <p className="text-lg md:text-xl mb-8">Get it now on Malaysia’s widest and fastest network</p>
          {/* Placeholder for video background */}
          <div className="absolute inset-0 z-0 opacity-20">
            <img src="https://cdn.prod.website-files.com/637c596725cb8b7f82fe360b%2F67bfe8d80c908175e7bc619d_CelcomDigi_iPhone_16e_Social_Video_16x9_HD_MY-EN%20%281%29-poster-00001.jpg" alt="iPhone 16e video poster" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">The best iPhone experience with CelcomDigi</h2>
            <p className="text-lg text-gray-600">Discover our suite of iPhone services tailored just for you</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link to="/postpaid" className="block p-6 rounded-lg shadow-lg bg-gradient-to-br from-blue-500 to-blue-700 text-white hover:shadow-xl transition-shadow">
              <h4 className="text-xl font-semibold mb-2">Plans made for your iPhone</h4>
              <p className="text-sm">Powered by our premium 5G &amp; 4G Internet plans</p>
            </Link>
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
            <h2 className="text-3xl font-bold mb-4">Get the best iPhone 16 instalment plan in Malaysia with Easy360</h2>
            <p className="text-lg text-gray-600">The easiest way to own an iPhone 16 — from RM53/month with RM0 upfront, 0% interest</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Device Card 1 */}
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <img src="https://cdn.prod.website-files.com/637c596725cb8b7f82fe360b/66dfee42b7a243aab721a37f_CelcomDigi_iPhone-16-Pro_Device-Image.avif" alt="iPhone 16 Pro Max" className="mx-auto mb-4 w-48 h-auto" />
              <h5 className="text-xl font-semibold mb-1">iPhone 16 Pro Max</h5>
              <div className="text-sm text-gray-500 mb-4">RRP: RM5,999</div>
              <div className="border-t border-gray-200 pt-4">
                <div className="flex justify-around text-sm mb-2">
                  <div>24 mths</div>
                  <div>36 mths</div>
                </div>
                <div className="flex justify-around items-center">
                  <div className="text-lg font-bold">From RM182</div>
                  <div className="text-lg font-bold">From RM114</div>
                </div>
              </div>
              <button className="mt-6 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors">Buy now</button>
            </div>

            {/* Device Card 2 */}
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <img src="https://cdn.prod.website-files.com/637c596725cb8b7f82fe360b/66dfee428f6c2ccb7da97d60_CelcomDigi_iPhone-16-Pro-Max_Device-Image.avif" alt="iPhone 16 Pro" className="mx-auto mb-4 w-48 h-auto" />
              <h5 className="text-xl font-semibold mb-1">iPhone 16 Pro</h5>
              <div className="text-sm text-gray-500 mb-4">RRP: RM4,999</div>
              <div className="border-t border-gray-200 pt-4">
                <div className="flex justify-around text-sm mb-2">
                  <div>24 mths</div>
                  <div>36 mths</div>
                </div>
                <div className="flex justify-around items-center">
                  <div className="text-lg font-bold">From RM143</div>
                  <div className="text-lg font-bold">From RM88</div>
                </div>
              </div>
              <button className="mt-6 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors">Buy now</button>
            </div>

            {/* Device Card 3 */}
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <img src="https://cdn.prod.website-files.com/637c596725cb8b7f82fe360b/66e2613e9aff0f9a20c4ca03_CelcomDigi_iPhone-16-Pink_Device-Image.avif" alt="iPhone 16" className="mx-auto mb-4 w-48 h-auto" />
              <h5 className="text-xl font-semibold mb-1">iPhone 16</h5>
              <div className="text-sm text-gray-500 mb-4">RRP: RM3,999</div>
              <div className="border-t border-gray-200 pt-4">
                <div className="flex justify-around text-sm mb-2">
                  <div>24 mths</div>
                  <div>36 mths</div>
                </div>
                <div className="flex justify-around items-center">
                  <div className="text-lg font-bold">From RM113</div>
                  <div className="text-lg font-bold">From RM68</div>
                </div>
              </div>
              <button className="mt-6 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors">Buy now</button>
            </div>

            {/* Device Card 4 */}
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <img src="https://cdn.prod.website-files.com/637c596725cb8b7f82fe360b/67bfeb741c4477ee5c1a6f7a_CelcomDigi_iPhone16e_device_image.avif" alt="iPhone 16e" className="mx-auto mb-4 w-48 h-auto" />
              <h5 className="text-xl font-semibold mb-1">iPhone 16e</h5>
              <div className="text-sm text-gray-500 mb-4">RRP: RM2,999</div>
              <div className="border-t border-gray-200 pt-4">
                <div className="flex justify-around text-sm mb-2">
                  <div>24 mths</div>
                  <div>36 mths</div>
                </div>
                <div className="flex justify-around items-center">
                  <div className="text-lg font-bold">From RM91</div>
                  <div className="text-lg font-bold">From RM53</div>
                </div>
              </div>
              <button className="mt-6 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors">Buy now</button>
            </div>
          </div>

          <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 mt-8 rounded-md flex items-center space-x-3">
            <img src="https://cdn.prod.website-files.com/637c596725cb8b7f82fe360b/66e145c2fe6dccec188158eb_new-promo-icon.svg" alt="Promo Icon" className="w-10 h-10" />
            <div>
              <p className="text-sm">Get a <strong>FREE 35W charger &amp; RM300 voucher</strong> when you pre-order your iPhone 16 device from now until September 20. <a href="#" className="underline hover:text-yellow-800">Learn more here.</a></p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4 mt-8">
            <Link to="/devices/iphones-specs" className="bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition-colors text-center">See full specs</Link>
            <Link to="/devices/iphones-compare" className="bg-gray-200 text-gray-800 py-3 px-6 rounded-md hover:bg-gray-300 transition-colors text-center">Compare iPhone models</Link>
          </div>
        </div>
      </section>

      {/* Level Up Apple Experience Section */}
      <section className="py-16 bg-gray-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Level up your Apple experience</h2>
            <p className="text-lg text-gray-600">From protection to accessories — everything to make your iPhone even better</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Promo Banner 1 */}
            <a href="/promotions/apple-iphone16-pwp-offer" className="block rounded-lg shadow-md overflow-hidden bg-white hover:shadow-xl transition-shadow">
              <img src="https://cdn.prod.website-files.com/637c596725cb8b7f82fe360b/66ec1b6669aeff25ffb5fd1f_CelcomDigi_PWP_Campaign%20Banner_EN_990x557.avif" alt="Purchase-with-Purchase" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2"><strong>Purchase-with-Purchase</strong></h3>
                <p className="text-gray-600">Save up to 45% off on iPhone 16 series accessories bundle</p>
              </div>
            </a>
            {/* Promo Banner 2 */}
            <a href="/promotions/free-phonecare" className="block rounded-lg shadow-md overflow-hidden bg-white hover:shadow-xl transition-shadow">
              <img src="https://cdn.prod.website-files.com/637c596725cb8b7f82fe360b/66e310ba32c8476bbaa7f793_CelcomDigi_PromoThumbnail_iPhone16_PhoneCare_990x557_EN.avif" alt="PhoneCARE" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2"><strong>PhoneCARE</strong></h3>
                <p className="text-gray-600">Swap or replace your used iPhone for any reason at only RM21/month</p>
              </div>
            </a>
            {/* Promo Banner 3 */}
            <a href="/devices/trade-in" className="block rounded-lg shadow-md overflow-hidden bg-white hover:shadow-xl transition-shadow">
              <img src="https://cdn.prod.website-files.com/637c596725cb8b7f82fe360b/66e310bac1a475d395575672_CelcomDigi_PromoThumbnail_iPhone16_TradeIn_990x557_EN.avif" alt="Trade in" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Trade in with maximised value</h3>
                <p className="text-gray-600">Get up to RM4,700 when you trade in your used iPhone</p>
              </div>
            </a>
            {/* Promo Banner 4 */}
            <a href="/postpaid/watchsim" className="block rounded-lg shadow-md overflow-hidden bg-white hover:shadow-xl transition-shadow">
              <img src="https://cdn.prod.website-files.com/637c596725cb8b7f82fe360b/66e310b96474ba64145a9d61_CelcomDigi_PromoThumbnail_iPhone16_WatchSIM_990x557_EN.avif" alt="WatchSIM" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">WatchSIM</h3>
                <p className="text-gray-600">Access unparalleled connectivity for your Apple Watch at only RM20/month</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Apple Device Pricing Section (Simplified) */}
      <section id="price-list" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Apple device pricing</h2>
          </div>
          {/* Simplified static device cards - original HTML had complex filtering/CMS */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Example Device Card (repeated for other devices if needed) */}
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <img src="https://cdn.prod.website-files.com/637c596725cb8b7f82fe360b/67c51f946299d4c3152e155c_CelcomDigi_iPhone-e_900x900_White.avif" alt="Device Image" className="mx-auto mb-4 w-32 h-auto" />
              <div className="text-left">
                <div className="text-gray-500 text-sm">Apple</div>
                <h5 className="text-lg font-semibold mb-2">iPhone 16e</h5>
                <div className="flex justify-between items-center mb-2">
                  <div className="text-sm text-gray-500">RRP: RM4,499</div>
                  <div className="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded-full">512GB</div>
                </div>
                <div className="border-t border-gray-200 pt-4">
                  <div className="text-sm text-gray-500">From</div>
                  <div className="text-2xl font-bold mb-1">RM91<span className="text-sm font-normal text-gray-500">/month</span></div>
                  <div className="text-blue-600 text-sm">Save up to RM1223</div>
                </div>
                <div className="flex items-center space-x-2 mt-4">
                  <div className="text-sm text-gray-500">with</div>
                  <div className="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded-full">One™ Pro / One™ Ultra</div>
                </div>
                <button className="mt-6 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors">Buy now</button>
              </div>
            </div>
            {/* Add more static device cards here if needed, following the pattern */}
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <img src="https://cdn.prod.website-files.com/637c596725cb8b7f82fe360b/67c51f946299d4c3152e155c_CelcomDigi_iPhone-e_900x900_White.avif" alt="Device Image" className="mx-auto mb-4 w-32 h-auto" />
              <div className="text-left">
                <div className="text-gray-500 text-sm">Apple</div>
                <h5 className="text-lg font-semibold mb-2">iPhone 16e</h5>
                <div className="flex justify-between items-center mb-2">
                  <div className="text-sm text-gray-500">RRP: RM4,499</div>
                  <div className="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded-full">512GB</div>
                </div>
                <div className="border-t border-gray-200 pt-4">
                  <div className="text-sm text-gray-500">From</div>
                  <div className="text-2xl font-bold mb-1">RM97<span className="text-sm font-normal text-gray-500">/month</span></div>
                  <div className="text-blue-600 text-sm">Save up to RM1007</div>
                </div>
                <div className="flex items-center space-x-2 mt-4">
                  <div className="text-sm text-gray-500">with</div>
                  <div className="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded-full">Postpaid 5G 160</div>
                </div>
                <button className="mt-6 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors">Buy now</button>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <img src="https://cdn.prod.website-files.com/637c596725cb8b7f82fe360b/67c51f946299d4c3152e155c_CelcomDigi_iPhone-e_900x900_White.avif" alt="Device Image" className="mx-auto mb-4 w-32 h-auto" />
              <div className="text-left">
                <div className="text-gray-500 text-sm">Apple</div>
                <h5 className="text-lg font-semibold mb-2">iPhone 16e</h5>
                <div className="flex justify-between items-center mb-2">
                  <div className="text-sm text-gray-500">RRP: RM4,499</div>
                  <div className="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded-full">512GB</div>
                </div>
                <div className="border-t border-gray-200 pt-4">
                  <div className="text-sm text-gray-500">From</div>
                  <div className="text-2xl font-bold mb-1">RM99<span className="text-sm font-normal text-gray-500">/month</span></div>
                  <div className="text-blue-600 text-sm">Save up to RM935</div>
                </div>
                <div className="flex items-center space-x-2 mt-4">
                  <div className="text-sm text-gray-500">with</div>
                  <div className="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded-full">Postpaid 5G 140</div>
                </div>
                <button className="mt-6 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors">Buy now</button>
              </div>
            </div>
          </div>
          <div className="text-sm text-gray-600 mt-8">
            <p className="mb-2">Note:</p>
            <ul className="list-disc list-inside ml-4">
              <li>For iPhone 16, 16e, 16 Plus, 16 Pro &amp; 16 Pro Max, Postpaid 5G 100 plan will receive a monthly adjustment of RM1 throughout the contract period.</li>
            </ul>
          </div>
          <div className="text-center mt-8">
            <a href="https://www.celcomdigi.com/devices/easy360#apple" className="text-blue-600 hover:underline">See price list in table</a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently asked questions</h2>
          </div>
          <div className="space-y-4">
            {/* FAQ Item 1 */}
            <details className="bg-white p-4 rounded-lg shadow-md">
              <summary className="flex justify-between items-center cursor-pointer text-lg font-semibold">
                When will I receive my iPhone?
                <svg className="w-6 h-6 text-gray-600 transform rotate-0 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="mt-2 text-gray-700">Once your order is processed, you should receive an email that contains your order tracking number when the item is on its way. For certain models with higher demand, delivery may take up to 1 to 3 weeks.</p>
            </details>
            {/* FAQ Item 2 */}
            <details className="bg-white p-4 rounded-lg shadow-md">
              <summary className="flex justify-between items-center cursor-pointer text-lg font-semibold">
                Is the iPhone 16 series available on instalment plans from CelcomDigi?
                <svg className="w-6 h-6 text-gray-600 transform rotate-0 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="mt-2 text-gray-700">Yes, the iPhone 16 series is available on Easy360, our device instalment plan for up to 36 months with 0% interest and RM0 upfront payment for eligible customers.</p>
            </details>
            {/* FAQ Item 3 */}
            <details className="bg-white p-4 rounded-lg shadow-md">
              <summary className="flex justify-between items-center cursor-pointer text-lg font-semibold">
                Can I still enjoy the RM300 PWP iPhone 16 series benefit?
                <svg className="w-6 h-6 text-gray-600 transform rotate-0 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="mt-2 text-gray-700">You can enjoy PWP discounts of up to 43% on iPhone 16 series accessories bundle. Please visit any of our nationwide stores to find out more.</p>
            </details>
            {/* FAQ Item 4 */}
            <details className="bg-white p-4 rounded-lg shadow-md">
              <summary className="flex justify-between items-center cursor-pointer text-lg font-semibold">
                How do I trade in my iPhone?
                <svg className="w-6 h-6 text-gray-600 transform rotate-0 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="mt-2 text-gray-700">CelcomDigi customers can now conveniently trade in their old smartphones via the following methods:<br/><br/>• Walk into any Celcom bluecube, Digi Store, and CelcomDigi store nationwide.<br/>• Initiate the trade-in online via the <a href="https://www.celcomdigi.com/devices/trade-in" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">CelcomDigi Trade-In page</a> and request a pick-up of their trade-in device from their location.<br/><br/>For more information, visit our <a href="https://help.celcomdigi.com/support/solutions/articles/70000661171-trade-in-of-devices" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Help Centre</a>.</p>
            </details>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AppleDevicesPage;