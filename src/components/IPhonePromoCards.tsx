"use client";

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface IPhoneDetails {
  name: string;
  image: string;
  basePrice: number; // Base price in number
  ram: string;
  colors: { name: string; inStock: boolean }[]; // Updated to include stock status
  storage: { size: string; inStock: boolean }[]; // Updated to include stock status for storage
  camera: string;
}

interface SelectedIPhoneDetails extends IPhoneDetails {
  selectedStorage: string;
  selectedColor: string;
  finalPrice: number; // The calculated final price
  displayPrice: string; // The formatted string for display
}

interface IPhonePromoCardsProps {
  onSelectIPhone: (iphone: SelectedIPhoneDetails) => void;
  onLearnMore: (iphone: SelectedIPhoneDetails) => void;
}

const IPhonePromoCards: React.FC<IPhonePromoCardsProps> = ({ onSelectIPhone, onLearnMore }) => {
  const iPhones: IPhoneDetails[] = [
    {
      name: 'iPhone 16 Pro Max',
      image: 'https://cdn.prod.website-files.com/637c596725cb8b7f82fe360b/66dfee42b7a243aab721a37f_CelcomDigi_iPhone-16-Pro_Device-Image.avif',
      basePrice: 600,
      ram: '8GB RAM',
      colors: [
        { name: 'Titanium Hitam', inStock: true },
        { name: 'Titanium Putih', inStock: true },
        { name: 'Titanium Biru', inStock: false }, // Example: Out of stock
        { name: 'Titanium Semulajadi', inStock: true },
      ],
      storage: [
        { size: '256GB', inStock: true },
        { size: '512GB', inStock: true },
        { size: '1TB', inStock: false }, // Out of stock
      ],
      camera: '48MP Utama, 12MP Ultra Lebar, 12MP Telefoto'
    },
    {
      name: 'iPhone 16 Pro',
      image: 'https://cdn.prod.website-files.com/637c596725cb8b7f82fe360b/66dfee428f6c2ccb7da97d60_CelcomDigi_iPhone-16-Pro-Max_Device-Image.avif',
      basePrice: 550,
      ram: '8GB RAM',
      colors: [
        { name: 'Titanium Hitam', inStock: true },
        { name: 'Titanium Putih', inStock: true },
        { name: 'Titanium Biru', inStock: true },
        { name: 'Titanium Semulajadi', inStock: false }, // Example: Out of stock
      ],
      storage: [
        { size: '128GB', inStock: true },
        { size: '256GB', inStock: true },
        { size: '512GB', inStock: true },
        { size: '1TB', inStock: false }, // Out of stock
      ],
      camera: '48MP Utama, 12MP Ultra Lebar, 12MP Telefoto'
    },
    {
      name: 'iPhone 16',
      image: 'https://cdn.prod.website-files.com/637c596725cb8b7f82fe360b/66e2613e9aff0f9a20c4ca03_CelcomDigi_iPhone-16-Pink_Device-Image.avif',
      basePrice: 500,
      ram: '6GB RAM',
      colors: [
        { name: 'Biru', inStock: true },
        { name: 'Merah Jambu', inStock: true },
        { name: 'Kuning', inStock: false }, // Example: Out of stock
        { name: 'Hijau', inStock: true },
        { name: 'Hitam', inStock: true },
      ],
      storage: [
        { size: '128GB', inStock: true },
        { size: '256GB', inStock: true },
        { size: '512GB', inStock: true },
      ],
      camera: '48MP Utama, 12MP Ultra Lebar'
    },
    {
      name: 'iPhone 16e',
      image: 'https://cdn.prod.website-files.com/637c596725cb8b7f82fe360b/67bfeb741c4477ee5c1a6f7a_CelcomDigi_iPhone16e_device_image.avif',
      basePrice: 450,
      ram: '6GB RAM',
      colors: [
        { name: 'Biru', inStock: true },
        { name: 'Merah Jambu', inStock: false }, // Example: Out of stock
        { name: 'Kuning', inStock: true },
        { name: 'Hijau', inStock: true },
        { name: 'Hitam', inStock: true },
      ],
      storage: [
        { size: '64GB', inStock: true },
        { size: '128GB', inStock: true },
        { size: '256GB', inStock: true },
      ],
      camera: '12MP Utama, 12MP Ultra Lebar'
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
      {iPhones.map((iphone, index) => {
        const [selectedStorage, setSelectedStorage] = useState<string>(
          iphone.storage.find(s => s.inStock)?.size || '' // Select first in-stock storage
        );
        const [selectedColor, setSelectedColor] = useState<string>(
          iphone.colors.find(c => c.inStock)?.name || '' // Select first in-stock color
        );
        const [calculatedPrice, setCalculatedPrice] = useState<number>(iphone.basePrice);

        useEffect(() => {
          const storageSizes = iphone.storage.map(s => s.size);
          const storageIndex = storageSizes.indexOf(selectedStorage);
          let priceAdjustment = 0;
          if (storageIndex === 1) {
            priceAdjustment = 100;
          } else if (storageIndex >= 2) {
            priceAdjustment = 200;
          }
          setCalculatedPrice(iphone.basePrice + priceAdjustment);
        }, [selectedStorage, iphone.basePrice, iphone.storage]);

        const handleSelectIPhone = () => {
          onSelectIPhone({
            ...iphone,
            selectedStorage,
            selectedColor,
            finalPrice: calculatedPrice,
            displayPrice: `RM${calculatedPrice}`
          });
        };

        const handleLearnMore = () => {
          onLearnMore({
            ...iphone,
            selectedStorage,
            selectedColor,
            finalPrice: calculatedPrice,
            displayPrice: `RM${calculatedPrice}`
          });
        };

        return (
          <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center">
            <img src={iphone.image} alt={iphone.name} className="mx-auto mb-4 w-32 h-auto" />
            <h5 className="text-xl font-semibold mb-1">{iphone.name}</h5>
            <p className="text-sm text-gray-600 mb-2">RM{calculatedPrice}</p>
            <p className="text-sm text-gray-500 mb-1">{iphone.ram}</p>

            {/* Storage Selection using Select component */}
            <div className="mb-2">
              <p className="text-sm text-gray-700 font-medium mb-1">Storan:</p>
              <Select onValueChange={setSelectedStorage} defaultValue={selectedStorage}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Pilih Storan" />
                </SelectTrigger>
                <SelectContent>
                  {iphone.storage.map((storageOption, sIdx) => {
                    let storagePriceText = '';
                    if (sIdx === 1) {
                      storagePriceText = ' (+RM100)';
                    } else if (sIdx >= 2) {
                      storagePriceText = ' (+RM200)';
                    }
                    return (
                      <SelectItem
                        key={storageOption.size}
                        value={storageOption.size}
                        disabled={!storageOption.inStock}
                      >
                        {storageOption.size}{storagePriceText} {!storageOption.inStock && '(Kehabisan Stok)'}
                      </SelectItem>
                    );
                  })}
                </SelectContent>
              </Select>
            </div>

            {/* Color Selection using Select component */}
            <div className="mb-4">
              <p className="text-sm text-gray-700 font-medium mb-1">Warna:</p>
              <Select onValueChange={setSelectedColor} defaultValue={selectedColor}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Pilih Warna" />
                </SelectTrigger>
                <SelectContent>
                  {iphone.colors.map((colorOption) => (
                    <SelectItem
                      key={colorOption.name}
                      value={colorOption.name}
                      disabled={!colorOption.inStock}
                    >
                      {colorOption.name} {!colorOption.inStock && '(Kehabisan Stok)'}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <p className="text-sm text-gray-500 mb-4">Kamera: {iphone.camera}</p>

            <Button
              onClick={handleSelectIPhone}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white mb-2"
            >
              Beli sekarang
            </Button>
            <Button
              variant="outline"
              onClick={handleLearnMore}
              className="w-full border-blue-600 text-blue-600 hover:bg-blue-50 hover:text-blue-700 text-sm"
            >
              Ketahui lebih lanjut
            </Button>
          </div>
        );
      })}
    </div>
  );
};

export default IPhonePromoCards;