"use client";

import React from 'react';
import { Button } from '@/components/ui/button';

interface iPhonePromotionListProps {
  onSelectIPhone: (iphone: { name: string; image: string; }) => void;
}

const iPhonePromotionList: React.FC<iPhonePromotionListProps> = ({ onSelectIPhone }) => {
  const iPhones = [
    { name: 'iPhone 16 Pro Max', image: 'https://cdn.prod.website-files.com/637c596725cb8b7f82fe360b/66dfee42b7a243aab721a37f_CelcomDigi_iPhone-16-Pro_Device-Image.avif' },
    { name: 'iPhone 16 Pro', image: 'https://cdn.prod.website-files.com/637c596725cb8b7f82fe360b/66dfee428f6c2ccb7da97d60_CelcomDigi_iPhone-16-Pro-Max_Device-Image.avif' },
    { name: 'iPhone 16', image: 'https://cdn.prod.website-files.com/637c596725cb8b7f82fe360b/66e2613e9aff0f9a20c4ca03_CelcomDigi_iPhone-16-Pink_Device-Image.avif' },
    { name: 'iPhone 16e', image: 'https://cdn.prod.website-files.com/637c596725cb8b7f82fe360b/67bfeb741c4477ee5c1a6f7a_CelcomDigi_iPhone16e_device_image.avif' },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
      {iPhones.map((iphone, index) => (
        <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center">
          <img src={iphone.image} alt={iphone.name} className="mx-auto mb-4 w-32 h-auto" />
          <h5 className="text-xl font-semibold mb-4">{iphone.name}</h5>
          <Button
            onClick={() => onSelectIPhone(iphone)}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white"
          >
            Beli sekarang
          </Button>
        </div>
      ))}
    </div>
  );
};

export default iPhonePromotionList;