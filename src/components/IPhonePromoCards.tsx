"use client";

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils'; // Import cn for conditional styling
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"; // Import Select components

interface IPhoneDetails {
  name: string;
  image: string;
  price: string;
  ram: string;
  colors: string[];
  storage: string[];
  camera: string;
}

// Update the interface to include selected options
interface SelectedIPhoneDetails extends IPhoneDetails {
  selectedStorage: string;
  selectedColor: string;
}

interface IPhonePromoCardsProps {
  onSelectIPhone: (iphone: SelectedIPhoneDetails) => void;
  onLearnMore: (iphone: SelectedIPhoneDetails) => void;
}

const IPhonePromoCards: React.FC<IPhonePromoCardsProps> = ({ onSelectIPhone, onLearnMore }) => {
  const iPhones = [
    {
      name: 'iPhone 16 Pro Max',
      image: 'https://cdn.prod.website-files.com/637c596725cb8b7f82fe360b/66dfee42b7a243aab721a37f_CelcomDigi_iPhone-16-Pro_Device-Image.avif',
      price: '(RM600)',
      ram: '8GB RAM',
      colors: ['Titanium Hitam', 'Titanium Putih', 'Titanium Biru', 'Titanium Semulajadi'],
      storage: ['256GB', '512GB', '1TB'],
      camera: '48MP Utama, 12MP Ultra Lebar, 12MP Telefoto'
    },
    {
      name: 'iPhone 16 Pro',
      image: 'https://cdn.prod.website-files.com/637c596725cb8b7f82fe360b/66dfee428f6c2ccb7da97d60_CelcomDigi_iPhone-16-Pro-Max_Device-Image.avif',
      price: '(RM550)',
      ram: '8GB RAM',
      colors: ['Titanium Hitam', 'Titanium Putih', 'Titanium Biru', 'Titanium Semulajadi'],
      storage: ['128GB', '256GB', '512GB', '1TB'],
      camera: '48MP Utama, 12MP Ultra Lebar, 12MP Telefoto'
    },
    {
      name: 'iPhone 16',
      image: 'https://cdn.prod.website-files.com/637c596725cb8b7f82fe360b/66e2613e9aff0f9a20c4ca03_CelcomDigi_iPhone-16-Pink_Device-Image.avif',
      price: '(RM500)',
      ram: '6GB RAM',
      colors: ['Biru', 'Merah Jambu', 'Kuning', 'Hijau', 'Hitam'],
      storage: ['128GB', '256GB', '512GB'],
      camera: '48MP Utama, 12MP Ultra Lebar'
    },
    {
      name: 'iPhone 16e',
      image: 'https://cdn.prod.website-files.com/637c596725cb8b7f82fe360b/67bfeb741c4477ee5c1a6f7a_CelcomDigi_iPhone16e_device_image.avif',
      price: '(RM450)',
      ram: '6GB RAM',
      colors: ['Biru', 'Merah Jambu', 'Kuning', 'Hijau', 'Hitam'],
      storage: ['64GB', '128GB', '256GB'],
      camera: '12MP Utama, 12MP Ultra Lebar'
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
      {iPhones.map((iphone, index) => {
        // State for selected storage and color for each iPhone card
        const [selectedStorage, setSelectedStorage] = useState<string>(iphone.storage[0]);
        const [selectedColor, setSelectedColor] = useState<string>(iphone.colors[0]);

        const handleSelectIPhone = () => {
          onSelectIPhone({ ...iphone, selectedStorage, selectedColor });
        };

        const handleLearnMore = () => {
          onLearnMore({ ...iphone, selectedStorage, selectedColor });
        };

        return (
          <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center">
            <img src={iphone.image} alt={iphone.name} className="mx-auto mb-4 w-32 h-auto" />
            <h5 className="text-xl font-semibold mb-1">{iphone.name}</h5>
            {iphone.price && <p className="text-sm text-gray-600 mb-2">{iphone.price}</p>}
            <p className="text-sm text-gray-500 mb-1">{iphone.ram}</p>

            {/* Storage Selection using Select component */}
            <div className="mb-2">
              <p className="text-sm text-gray-700 font-medium mb-1">Storan:</p>
              <Select onValueChange={setSelectedStorage} defaultValue={selectedStorage}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Pilih Storan" />
                </SelectTrigger>
                <SelectContent>
                  {iphone.storage.map((storageOption) => (
                    <SelectItem key={storageOption} value={storageOption}>
                      {storageOption}
                    </SelectItem>
                  ))}
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
                    <SelectItem key={colorOption} value={colorOption}>
                      {colorOption}
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