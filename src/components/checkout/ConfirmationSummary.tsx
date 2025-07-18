"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ShippingDetails } from '@/pages/Checkout';

// Update the type definition for selectedIPhone to include selected options
interface SelectedIPhoneDetails {
  name: string;
  image: string;
  basePrice: number; // Changed to number
  ram: string;
  colors: { name: string; inStock: boolean }[]; // Updated to include stock status
  storage: { size: string; inStock: boolean }[]; // Updated to include stock status for storage
  camera: string;
  selectedStorage: string; // Added
  selectedColor: string;   // Added
  finalPrice: number; // Added for calculated price
  displayPrice: string; // Added for formatted price string
}

interface ConfirmationSummaryProps {
  shippingDetails: ShippingDetails;
  selectedIPhone: SelectedIPhoneDetails; // Updated type
  onConfirm: () => void;
  onEdit: () => void;
}

const ConfirmationSummary: React.FC<ConfirmationSummaryProps> = ({
  shippingDetails,
  selectedIPhone,
  onConfirm,
  onEdit,
}) => {
  return (
    <div className="space-y-4 sm:space-y-6"> {/* Jarak responsif */}
      <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-gray-700 text-center">Sahkan Butiran Anda</h2> {/* Saiz teks responsif */}

      <Card>
        <CardHeader>
          <CardTitle className="text-lg sm:text-xl">Peranti Pilihan</CardTitle> {/* Saiz teks responsif */}
        </CardHeader>
        <CardContent className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-4"> {/* Susun atur responsif */}
          <img src={selectedIPhone.image} alt={selectedIPhone.name} className="w-20 h-auto sm:w-24 rounded-md" /> {/* Saiz imej responsif */}
          <div className="text-center sm:text-left"> {/* Penjajaran teks responsif */}
            <p className="text-base sm:text-lg font-medium">{selectedIPhone.name}</p> {/* Saiz teks responsif */}
            <p className="text-sm text-gray-600">Harga: {selectedIPhone.displayPrice}</p> {/* Saiz teks responsif */}
            <p className="text-sm text-gray-600">RAM: {selectedIPhone.ram}</p>
            <p className="text-sm text-gray-600">Storan Pilihan: {selectedIPhone.selectedStorage}</p>
            <p className="text-sm text-gray-600">Warna Pilihan: {selectedIPhone.selectedColor}</p>
            <p className="text-sm text-gray-600">Kamera: {selectedIPhone.camera}</p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg sm:text-xl">Maklumat Penghantaran</CardTitle> {/* Saiz teks responsif */}
        </CardHeader>
        <CardContent className="space-y-2 text-sm sm:text-base"> {/* Saiz teks responsif */}
          <p><strong>Nama Penuh:</strong> {shippingDetails.fullName}</p>
          <p><strong>Nombor IC:</strong> {shippingDetails.icNumber}</p>
          <p><strong>Nombor Telefon:</strong> {shippingDetails.phoneNumber}</p>
          <p><strong>Alamat:</strong> {shippingDetails.address}</p>
        </CardContent>
      </Card>

      <div className="flex flex-col sm:flex-row gap-4 mt-6">
        <Button
          onClick={onEdit}
          variant="outline"
          className="flex-1 border-blue-600 text-blue-600 hover:bg-blue-50 hover:text-blue-700"
        >
          Edit Maklumat
        </Button>
        <Button
          onClick={onConfirm}
          className="flex-1 bg-blue-600 hover:bg-blue-700 text-white"
        >
          Bayar Sekarang
        </Button>
      </div>
    </div>
  );
};

export default ConfirmationSummary;