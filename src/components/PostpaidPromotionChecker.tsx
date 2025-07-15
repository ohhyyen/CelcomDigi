"use client";

import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { showSuccess, showError } from '@/utils/toast';
import iPhonePromotionList from './iPhonePromotionList';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const PostpaidPromotionChecker: React.FC = () => {
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showResults, setShowResults] = useState<boolean>(false);
  const [selectedIPhone, setSelectedIPhone] = useState<{ name: string; image: string; } | null>(null);

  const handleCheckPromotions = () => {
    if (phoneNumber.trim() === '') {
      showError('Sila masukkan nombor telefon anda.');
      return;
    }

    setIsLoading(true);
    setShowResults(false); // Close dialog if open
    setSelectedIPhone(null); // Reset selected iPhone
    showSuccess('Mencari promosi eksklusif anda...');

    setTimeout(() => {
      setIsLoading(false);
      setShowResults(true); // Open dialog with list
    }, 10000);
  };

  const handleSelectIPhone = (iphone: { name: string; image: string; }) => {
    setSelectedIPhone(iphone);
    // Dialog is already open, just change content
  };

  const handleDialogClose = (open: boolean) => {
    setShowResults(open);
    if (!open) {
      setSelectedIPhone(null); // Reset selected iPhone when dialog closes
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-center max-w-2xl mx-auto mt-12">
      <h3 className="text-2xl font-bold mb-4">Lihat Promosi Eksklusif Anda</h3>
      <p className="text-gray-600 mb-6">Masukkan nombor telefon pascabayar CelcomDigi anda untuk melihat promosi peranti iPhone yang tersedia untuk anda.</p>

      {!isLoading && !showResults && (
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Input
            type="tel"
            placeholder="Contoh: 0191234567"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="max-w-xs mx-auto sm:mx-0"
          />
          <Button onClick={handleCheckPromotions} className="bg-blue-600 hover:bg-blue-700 text-white">
            Lihat Promosi
          </Button>
        </div>
      )}

      {isLoading && (
        <div className="flex flex-col items-center justify-center h-48">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500"></div>
          <p className="mt-4 text-lg text-gray-700">Memuatkan promosi...</p>
        </div>
      )}

      <Dialog open={showResults} onOpenChange={handleDialogClose}>
        <DialogContent className="sm:max-w-[800px] max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>
              {selectedIPhone ? `Butiran ${selectedIPhone.name}` : 'Promosi iPhone Eksklusif Anda'}
            </DialogTitle>
            <DialogDescription>
              {selectedIPhone ? (
                `Ini adalah butiran untuk ${selectedIPhone.name}.`
              ) : (
                `Tahniah untuk nombor ${phoneNumber}! Ini adalah senarai peranti yang tersedia dengan tawaran harga istimewa untuk nombor pascabayar anda. Terima kasih atas kesetiaan anda bersama kami.`
              )}
            </DialogDescription>
          </DialogHeader>
          {selectedIPhone ? (
            <div className="flex flex-col items-center p-4">
              <img src={selectedIPhone.image} alt={selectedIPhone.name} className="w-48 h-auto mb-6" />
              <h4 className="text-2xl font-bold mb-4">{selectedIPhone.name}</h4>
              <p className="text-gray-700 mb-6">
                Dapatkan {selectedIPhone.name} dengan tawaran eksklusif untuk anda!
                (Tambahkan butiran harga, pelan, dll. di sini)
              </p>
              <Button className="w-full max-w-xs bg-blue-600 hover:bg-blue-700 text-white">
                Teruskan Pembelian {selectedIPhone.name}
              </Button>
              <Button
                variant="outline"
                onClick={() => setSelectedIPhone(null)}
                className="mt-4 w-full max-w-xs"
              >
                Kembali ke Senarai
              </Button>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-4 gap-4 mt-4 w-full">
                <div className="bg-white border border-gray-300 rounded-lg shadow-sm p-4 flex flex-col items-center justify-between">
                  <img src="/4023441_1.jpg" alt="iPhone 16 Pro Max" className="w-24 h-24 object-contain mb-2" />
                  <p className="text-base font-semibold text-gray-800 text-center">IPHONE 16 Pro Max</p>
                  <p className="text-sm font-light text-gray-600 text-center">(RM600)</p>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white text-xs py-1 h-auto mt-auto">Beli sekarang</Button>
                </div>
                <div className="bg-white border border-gray-300 rounded-lg shadow-sm p-4 flex flex-col items-center justify-center">
                  <p className="text-sm mb-2">Peranti 2</p>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white text-xs py-1 h-auto">Beli sekarang</Button>
                </div>
                <div className="bg-white border border-gray-300 rounded-lg shadow-sm p-4 flex flex-col items-center justify-center">
                  <p className="text-sm mb-2">Peranti 3</p>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white text-xs py-1 h-auto">Beli sekarang</Button>
                </div>
                <div className="bg-white border border-gray-300 rounded-lg shadow-sm p-4 flex flex-col items-center justify-center">
                  <p className="text-sm mb-2">Peranti 4</p>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white text-xs py-1 h-auto">Beli sekarang</Button>
                </div>
              </div>
              <iPhonePromotionList onSelectIPhone={handleSelectIPhone} />
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default PostpaidPromotionChecker;