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

  const handleCheckPromotions = () => {
    if (phoneNumber.trim() === '') {
      showError('Sila masukkan nombor telefon anda.');
      return;
    }

    setIsLoading(true);
    setShowResults(false);
    showSuccess('Mencari promosi eksklusif anda...');

    setTimeout(() => {
      setIsLoading(false);
      setShowResults(true);
    }, 10000);
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

      <Dialog open={showResults} onOpenChange={setShowResults}>
        <DialogContent className="sm:max-w-[800px] max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Promosi iPhone Eksklusif Anda</DialogTitle>
            <DialogDescription>
              Tahniah untuk nombor {phoneNumber}! Ini adalah senarai peranti yang tersedia dengan tawaran harga istimewa untuk nombor pascabayar anda. Terima kasih atas kesetiaan anda bersama kami.
            </DialogDescription>
          </DialogHeader>
          <iPhonePromotionList />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default PostpaidPromotionChecker;