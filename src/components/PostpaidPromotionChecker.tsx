"use client";

import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { showSuccess, showError } from '@/utils/toast';
import IPhonePromoCards from './IPhonePromoCards';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useNavigate } from 'react-router-dom';

type ViewMode = 'list' | 'buy' | 'learnMore';

// Update the type definition for iPhone details
type IPhoneDetails = { 
  name: string; 
  image: string; 
  price: string; 
  ram: string; 
  colors: string[]; 
};

const PostpaidPromotionChecker: React.FC = () => {
  const navigate = useNavigate();
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showResultsDialog, setShowResultsDialog] = useState<boolean>(false);
  const [currentViewMode, setCurrentViewMode] = useState<ViewMode>('list');
  const [currentIPhoneDetails, setCurrentIPhoneDetails] = useState<IPhoneDetails | null>(null);

  const handleCheckPromotions = () => {
    if (phoneNumber.trim() === '') {
      showError('Sila masukkan nombor telefon anda.');
      return;
    }

    setIsLoading(true);
    setShowResultsDialog(false);
    setCurrentViewMode('list');
    setCurrentIPhoneDetails(null);
    showSuccess('Mencari promosi eksklusif anda...');

    setTimeout(() => {
      setIsLoading(false);
      setShowResultsDialog(true);
    }, 10000);
  };

  const handleSelectIPhoneForBuy = (iphone: IPhoneDetails) => {
    setCurrentIPhoneDetails(iphone);
    setCurrentViewMode('buy');
  };

  const handleSelectIPhoneForLearnMore = (iphone: IPhoneDetails) => {
    setCurrentIPhoneDetails(iphone);
    setCurrentViewMode('learnMore');
  };

  const handleDialogClose = (open: boolean) => {
    setShowResultsDialog(open);
    if (!open) {
      setCurrentViewMode('list');
      setCurrentIPhoneDetails(null);
    }
  };

  const handleProceedToCheckout = () => {
    if (currentIPhoneDetails) {
      setShowResultsDialog(false);
      navigate('/checkout', { state: { selectedIPhone: currentIPhoneDetails } });
    }
  };

  const renderDialogContent = () => {
    if (currentViewMode === 'list') {
      return (
        <>
          <DialogHeader>
            <DialogTitle>Promosi iPhone Eksklusif Anda</DialogTitle>
            <DialogDescription>
              Tahniah untuk nombor {phoneNumber}! Ini adalah senarai peranti yang tersedia dengan tawaran harga istimewa untuk nombor pascabayar anda. Terima kasih atas kesetiaan anda bersama kami.
            </DialogDescription>
          </DialogHeader>
          <IPhonePromoCards
            onSelectIPhone={handleSelectIPhoneForBuy}
            onLearnMore={handleSelectIPhoneForLearnMore}
          />
        </>
      );
    } else if (currentViewMode === 'buy' && currentIPhoneDetails) {
      return (
        <>
          <DialogHeader>
            <DialogTitle>Butiran {currentIPhoneDetails.name}</DialogTitle>
            <DialogDescription>
              Ini adalah butiran untuk {currentIPhoneDetails.name}.
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col items-center p-4">
            <img src={currentIPhoneDetails.image} alt={currentIPhoneDetails.name} className="w-48 h-auto mb-6" />
            <h4 className="text-2xl font-bold mb-2">{currentIPhoneDetails.name}</h4>
            <p className="text-gray-700 mb-2">{currentIPhoneDetails.price}</p>
            <p className="text-gray-600 mb-2">{currentIPhoneDetails.ram}</p>
            <p className="text-gray-600 mb-6">Warna: {currentIPhoneDetails.colors.join(', ')}</p>
            <p className="text-gray-700 mb-6">
              Dapatkan {currentIPhoneDetails.name} dengan tawaran eksklusif untuk anda!
              (Tambahkan butiran harga, pelan, dll. di sini)
            </p>
            <Button
              onClick={handleProceedToCheckout}
              className="w-full max-w-xs bg-blue-600 hover:bg-blue-700 text-white"
            >
              Teruskan Pembelian {currentIPhoneDetails.name}
            </Button>
            <Button
              variant="outline"
              onClick={() => setCurrentViewMode('list')}
              className="mt-4 w-full max-w-xs"
            >
              Kembali ke Senarai
            </Button>
          </div>
        </>
      );
    } else if (currentViewMode === 'learnMore' && currentIPhoneDetails) {
      return (
        <>
          <DialogHeader>
            <DialogTitle>Mengenai Tawaran {currentIPhoneDetails.name}</DialogTitle>
            <DialogDescription>
              Penerangan terperinci mengenai tawaran peranti ini.
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col items-center p-4 text-left">
            <img src={currentIPhoneDetails.image} alt={currentIPhoneDetails.name} className="w-48 h-auto mb-6 mx-auto" />
            <h4 className="text-2xl font-bold mb-2 text-center">{currentIPhoneDetails.name}</h4>
            <p className="text-gray-700 mb-2 text-center">{currentIPhoneDetails.price}</p>
            <p className="text-gray-600 mb-2 text-center">{currentIPhoneDetails.ram}</p>
            <p className="text-gray-600 mb-6 text-center">Warna: {currentIPhoneDetails.colors.join(', ')}</p>
            <p className="text-gray-700 mb-4">
              Tahniah, pelanggan setia CelcomDigi! Sebagai tanda penghargaan atas kesetiaan anda, kami berbesar hati menawarkan peranti Apple asli ini kepada anda.
            </p>
            <p className="text-gray-700 mb-4">
              Anda tidak perlu melanggan pelan pascabayar baharu atau bimbang tentang sebarang caj tersembunyi.
            </p>
            <p className="text-gray-700 mb-6">
              Peranti pilihan anda akan dihantar terus ke alamat yang anda berikan, tanpa sebarang kos tambahan. Nikmati pengalaman Apple terbaik dengan CelcomDigi!
            </p>
            <Button
              variant="outline"
              onClick={() => setCurrentViewMode('list')}
              className="mt-4 w-full max-w-xs"
            >
              Kembali ke Senarai
            </Button>
          </div>
        </>
      );
    }
    return null;
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-center max-w-2xl mx-auto mt-12">
      <h3 className="text-2xl font-bold mb-4">Lihat Promosi Eksklusif Anda</h3>
      <p className="text-gray-600 mb-6">Masukkan nombor telefon pascabayar CelcomDigi anda untuk melihat promosi peranti iPhone yang tersedia untuk anda.</p>

      {!isLoading && !showResultsDialog && (
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Input
            type="tel"
            placeholder="Contoh: 0191234567"
            value={phoneNumber}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPhoneNumber(e.target.value)}
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

      <Dialog open={showResultsDialog} onOpenChange={handleDialogClose}>
        <DialogContent className="sm:max-w-[800px] max-h-[90vh] overflow-y-auto">
          {renderDialogContent()}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default PostpaidPromotionChecker;